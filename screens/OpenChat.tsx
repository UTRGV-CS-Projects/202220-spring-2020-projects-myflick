import {
	StyleSheet,
	Text,
	KeyboardAvoidingView,
	Platform,
	FlatList,
} from "react-native";
import React, { useState, useRef, useEffect, useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types";
import { SafeAreaView, View } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import MessageBubble from "../components/Messages/MessageBubble";
import { ActivityIndicator, TextInput } from "react-native-paper";
//styling
import useColorScheme from "../hooks/useColorScheme";
import Colors, { themeColor } from "../constants/Colors";
import { createMessages, listMessage, createMatch } from "../apis/messages";
import { OnCreateMessageSubscription } from "../src/API";
import { AuthContext } from "../store/AuthContext";
import { API, graphqlOperation } from "aws-amplify";
import { onCreateMessage } from "../src/graphql/subscriptions";

const OpenChat = ({ navigation, route }: RootStackScreenProps<"OpenChat">) => {
	const [conversationId, setConversationId] = useState(route.params?.id);
	const [userId, setUserId] = useState(route.params?.name);
	const [person, setPerson] = useState(route.params?.person);
	const [loading, setLoading] = useState(true);
	const [messages, setMessages] = useState<Message[]>([]);
	const { user, dispatch } = useContext(AuthContext);
	const subscriptionRef = useRef<any>();

	interface Message {
		id: string;
		content: string;
		conversationId: string;
		createdAt: string;
		sender: string;
	}

	interface SubscriptionValue<T> {
		value: { data: T };
	}
	function mapOnCreateMessageSubscription(
		createMessageSubscription: OnCreateMessageSubscription
	): Message {
		const { id, content, conversationId, sender, createdAt } =
			createMessageSubscription.onCreateMessage || {};
		return {
			id,
			content,
			conversationId,
			sender,
			createdAt,
		} as Message;
	}

	function subscribeGraphQL<T>(
		subscription: any,
		callback: (value: T) => void
	) {
		return (
			API.graphql({
				query: subscription,
				variables: {
					conversationId,
				},
			}) as any
		).subscribe({
			next: (response: SubscriptionValue<T>) => {
				console.log("res value: ", response.value);
				callback(response.value.data);
			},
			error: (error: any) => console.warn(error),
		});
		/* return (API.graphql(graphqlOperation(subscription)) as any).subscribe({
      next: (response: SubscriptionValue<T>) => callback(response.value.data),
    }); */
	}

	const onCreateMessageHandler = (
		createMessageSubscription: OnCreateMessageSubscription
	) => {
		const message = mapOnCreateMessageSubscription(createMessageSubscription);
		console.log("new msg received");
		setMessages([...messages, message]);
	};

	useEffect(() => {
		console.log(conversationId);
		console.log(userId);
		console.log(person);

		listMessage(conversationId)
			.then((res) => {
				let messagesResponse = res?.data?.listMessages?.items as Message[];
				messagesResponse = messagesResponse.sort((a, b) => {
					return a.createdAt.localeCompare(b.createdAt);
				});
				setMessages(messagesResponse);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		console.log("messages", messages);

		// Subscribe to creation of Message
		const subscription = subscribeGraphQL<OnCreateMessageSubscription>(
			onCreateMessage,
			onCreateMessageHandler
		);

		return () => {
			// Stop receiving data updates from the subscription
			subscription.unsubscribe();
		};
	}, [messages]);

	const colorScheme = useColorScheme();
	const flatListRef = useRef<FlatList>(null);

	const [textBarInput, setTextBarInput] = useState("");

	//methods (triggers)
	const handleGoBack = () => {
		navigation.goBack();
	};

	const sendBtnTrigger = async () => {
		//if textBarInput is empty, do nothing
		if (textBarInput === "") return;

		//else, add new message input to the chat
		createMessages(conversationId, textBarInput, false, user.cognitoId);

		//once submitted, reset textBarInput
		setTextBarInput("");
	};

	const handleOpenChatSettings = async () => {
		console.warn("open chat settings button triggered");

		createMatch(user.cognitoId, ["aaa81442a5e-649a-4594-9687-dfffbc27f745"]);
	};

	//when data loads or is changed, the flatlist scrolls to the bottom
	const handleOnChange = () => {
		if (flatListRef.current) flatListRef.current.scrollToOffset({ offset: 0 });
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			{loading ? (
				<ActivityIndicator
					animating={loading}
					color={themeColor}
					size={"large"}
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						justifyContent: "center",
						alignItems: "center",
					}}
				/>
			) : (
				<SafeAreaView style={[styles.container]}>
					<View
						style={[
							styles.topBar,
							{ borderBottomColor: Colors[colorScheme].opposite },
						]}
					>
						<TouchableOpacity style={styles.backBtn} onPress={handleGoBack}>
							<Ionicons
								name="chevron-back-outline"
								size={30}
								color={Colors[colorScheme].opposite}
							/>
						</TouchableOpacity>

						<Text
							style={[styles.name, { color: Colors[colorScheme].opposite }]}
						>
							{person?.firstName}
						</Text>

						<TouchableOpacity
							style={styles.ellipsis}
							onPress={handleOpenChatSettings}
						>
							<Ionicons
								name="ellipsis-vertical-outline"
								size={30}
								color={Colors[colorScheme].opposite}
							/>
						</TouchableOpacity>
					</View>
					<FlatList
						ref={flatListRef}
						data={messages}
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						inverted={true}
						style={styles.flatList}
						contentContainerStyle={{ flexDirection: "column-reverse" }}
						onContentSizeChange={handleOnChange}
						renderItem={({ item }) => (
							<MessageBubble
								message={item}
								currentUserId={user.cognitoId}
								key={item.id}
								user={person}
							/>
						)}
					/>
					<View style={styles.bottomBarContainer}>
						<View style={styles.bottomBar}>
							<TextInput
								autoComplete={false}
								mode="outlined"
								autoCapitalize="none"
								secureTextEntry={false}
								activeOutlineColor={Colors[colorScheme].opposite}
								onChangeText={(value) => setTextBarInput(value)}
								value={textBarInput}
								style={[styles.textInput]}
								onSubmitEditing={sendBtnTrigger}
								onPressIn={handleOnChange}
							/>
							<TouchableOpacity
								style={styles.sendButton}
								onPressIn={sendBtnTrigger}
							>
								<Text style={styles.sendText}>Send</Text>
							</TouchableOpacity>
						</View>
					</View>
				</SafeAreaView>
			)}
		</KeyboardAvoidingView>
	);
};

export default OpenChat;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	flatList: {},
	topBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 5,
		height: 50,
		borderBottomWidth: 0.3,
	},
	backBtn: {
		paddingLeft: 5,
	},
	ellipsis: {
		paddingRight: 5,
	},
	name: {
		fontSize: 23,
	},

	bottomBar: {
		flexDirection: "row",
		paddingHorizontal: 10,
		alignItems: "center",
	},
	sendButton: {
		paddingVertical: 11,
		paddingHorizontal: 25,
		backgroundColor: themeColor,
		borderRadius: 10,
	},
	sendText: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	textInput: {
		width: "75%",
		height: 39,
		marginBottom: 3,
		borderRadius: 20,
		marginRight: 10,
	},
	bottomBarContainer: {
		justifyContent: "flex-end",
		marginBottom: 5,
		position: "relative",
	},
	scrollView: { flex: 1 },
});
