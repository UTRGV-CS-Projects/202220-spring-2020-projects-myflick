import {
	StyleSheet,
	Text,
	KeyboardAvoidingView,
	Platform,
	FlatList,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types";
import { SafeAreaView, View } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import MessageBubble from "../components/Messages/MessageBubble";
import { TextInput } from "react-native-paper";

//styling
import useColorScheme from "../hooks/useColorScheme";
import Colors, { themeColor } from "../constants/Colors";

const OpenChat = ({ navigation }: RootStackScreenProps<"OpenChat">) => {
	//hardcoded data for testing purpouses delete when finsihed - follows Message type from types.tsx
	let hardcodedChat = [
		{ id: "1", senderId: "1", content: "hey (msg1)", timeStamp: "3:00 pm" },
		{
			id: "2",
			senderId: "2",
			content: "Testing (msg2)",
			timeStamp: "3:02 pm",
		},
		{
			id: "10",
			senderId: "2",
			content: "Do double messages look bad? (msg2)",
			timeStamp: "3:02 pm",
		},
		{
			id: "11",
			senderId: "2",
			content:
				"Working on making the profile icon bubble only appear on the first msg, and then after another one is added, it's added (double) without bubble",
			timeStamp: "3:02 pm",
		},
		{
			id: "3",
			senderId: "1",
			content:
				"new message is added when typed and 'sent' (random gibberish just to see how a lonmg message would look like on the openchat screen) (msg3)",
			timeStamp: "3:05 pm",
		},
		{
			id: "4",
			senderId: "2",
			content: "working on rendering flatlist from the bottom up (msg4)",
			timeStamp: "3:07 pm",
		},
		{
			id: "5",
			senderId: "1",
			content:
				"Also working on making flatlist smaller when safeAreaKeyword is triggered (msg5)",
			timeStamp: "3:10 pm",
		},
		{
			id: "6",
			senderId: "2",
			content: "test (msg6)",
			timeStamp: "3:11 pm",
		},
		{
			id: "7",
			senderId: "1",
			content: "test (msg7)",
			timeStamp: "3:15 pm",
		},
		{
			id: "8",
			senderId: "2",
			content: "Damn (msg8)",
			timeStamp: "3:17 pm",
		},
		{
			id: "9",
			senderId: "1",
			content: "Cool beans (msg9 LAST)",
			timeStamp: "3:20 pm",
		},
	];

	const colorScheme = useColorScheme();
	const flatListRef = useRef<FlatList>(null);

	//dependent variables
	const [hardcodedChatEditable, setHardcodedChatEditable] =
		useState(hardcodedChat);
	const [textBarInput, setTextBarInput] = useState("");

	//methods (triggers)
	const handleGoBack = () => {
		navigation.navigate("Messages");
	};

	const sendBtnTrigger = () => {
		//if textBarInput is empty, do nothing
		if (textBarInput === "") return;

		//else, add new message input to the chat
		setHardcodedChatEditable([
			...hardcodedChatEditable,
			{
				id: "99", //HARDCODED DATA CHANGE THIS
				senderId: "1", //HARDCODED DATA CHANGE THIS
				content: textBarInput,
				timeStamp: "3:00 pm", //HARDCODED DATA CHANGE THIS
			},
		]);

		//once submitted, reset textBarInput
		setTextBarInput("");
	};

	const handleOpenChatSettings = () => {
		console.warn("open chat settings button triggered");
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
			<SafeAreaView style={[styles.container]}>
				<View style={styles.topBar}>
					<TouchableOpacity style={styles.backBtn} onPress={handleGoBack}>
						<Ionicons name="chevron-back-outline" size={30} color={"white"} />
					</TouchableOpacity>

					<Text style={styles.name}>
						Ashley {/* HARDCODED DATA, CHANGE THIS */}
					</Text>

					<TouchableOpacity
						style={styles.ellipsis}
						onPress={handleOpenChatSettings}
					>
						<Ionicons
							name="ellipsis-vertical-outline"
							size={30}
							color={"white"}
						/>
					</TouchableOpacity>
				</View>

				<FlatList
					ref={flatListRef}
					data={hardcodedChatEditable}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					inverted={true}
					style={styles.flatList}
					contentContainerStyle={{ flexDirection: "column-reverse" }}
					onContentSizeChange={handleOnChange}
					renderItem={({ item }) => (
						<MessageBubble
							messages={item}
							currentUserId={"1" /* HARDCODED DATA CHANGE THIS*/}
							key={item.id}
						/>
					)}
				/>

				<View style={styles.bottomBarContainer}>
					<View style={styles.bottomBar}>
						<TextInput
							label=""
							autoComplete={false}
							mode="outlined"
							autoCapitalize="none"
							secureTextEntry={false}
							activeOutlineColor={Colors[colorScheme].opposite}
							onChangeText={(value) => setTextBarInput(value)}
							value={textBarInput}
							style={[styles.textInput]}
							onSubmitEditing={sendBtnTrigger}
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
		borderBottomColor: "#3F3F3F",
	},
	backBtn: {
		paddingLeft: 5,
	},
	ellipsis: {
		paddingRight: 5,
	},
	name: {
		fontSize: 23,
		color: "white",
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
