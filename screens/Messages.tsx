import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import NewMatchesList from "../components/Messages/NewMatchesList";
import NewMessagesList from "../components/Messages/NewMessagesList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
	ConversationType,
	MessageUser,
	RootStackScreenProps,
	ErrorTypes,
} from "../types";
import { SafeAreaView, Text, View } from "../components/Themed";
import {
	fetchConversations,
	fetchUserConversations,
	listMessage,
} from "../apis/messages";
import { AuthContext } from "../store/AuthContext";
import { Message, UserConversations } from "../src/API";
import { listConversations } from "../src/graphql/queries";
import { fetchUserDataMessage, fetchLikedInfo } from "../apis/users";
import { themeColor } from "../constants/Colors";

const Messages = ({ navigation }: RootStackScreenProps<"Messages">) => {
	const insets = useSafeAreaInsets();
	const { user, dispatch } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	const [conversations, setConversations] = useState<ConversationType[]>([]);
	const conversationIdSet = useRef(new Set<string>());
	//const [messages, setMessages] = useState<Message[][]>([]);

	const getLikedData = async () => {
		console.log("GETTING LIKED DATA *^*^*^*");
		fetchLikedInfo("0").then((res) => {
			console.log(res);
		});
	};

	const getData = async () => {
		console.log("getting data");
		fetchUserConversations(user.cognitoId).then((res) => {
			const userConversations = res?.data?.listUserConversations
				?.items as UserConversations[];
			if (userConversations.length > 0) {
				userConversations.forEach((userConversation) => {
					let lastMessage = "";
					let conversationMessages: Message[] = [];
					let messageUser: MessageUser;
					let messages: Message[];

					listMessage(userConversation.conversationId)
						.then((res) => {
							messages = res?.data?.listMessages?.items as Message[];
							if (messages.length > 0) {
								messages = messages.sort((a, b) => {
									return a.createdAt.localeCompare(b.createdAt);
								});
							}
						})
						.then(() => {
							fetchConversations(userConversation?.conversationId).then(
								(res) => {
									res?.data?.listConversations?.items?.map((conversation) => {
										let name: string;
										if (conversation?.name1 === user.cognitoId) {
											name = conversation!.name2;
										} else {
											name = conversation!.name1;
										}
										fetchUserDataMessage(name)
											.then((res) => {
												messageUser = res?.data?.getUser as MessageUser;
												if (messages.length > 0) {
													lastMessage = messages[messages.length - 1]?.content;
												} else {
													lastMessage = ErrorTypes.START_CONVERSATING;
												}

												return res;
											})

											.then(() => {
												const duplicated = conversationIdSet.current.has(
													userConversation.conversationId
												);
												if (duplicated) {
													const newConversations = conversations.map(function (
														item,
														i
													) {
														if (
															item.conversationId ==
															userConversation.conversationId
														) {
															return {
																conversationId:
																	userConversation!.conversationId,
																user: messageUser,
																lastMessage,
																messages,
															};
														} else {
															return item;
														}
													});
													setConversations(newConversations);
												} else {
													setConversations([
														...conversations,
														{
															conversationId: userConversation!.conversationId,
															user: messageUser,
															lastMessage,
															messages,
														},
													]);
													conversationIdSet.current.add(
														userConversation!.conversationId
													);
												}
											});
									});
								}
							);
						});
				});
			} else {
				setConversations([]);
			}
			setLoading(false);
		});
	};
	useEffect(() => {
		console.log("messages mounted");
	}, []);

	useEffect(() => {
		console.log("conversations", conversations);
	}, [conversations]);

	useEffect(() => {
		if (loading) {
			getData();
			getLikedData();
		}
	}, [loading]);

	return (
		<SafeAreaView style={[styles.container]}>
			{loading ? (
				<ActivityIndicator
					animating={loading}
					color={themeColor}
					size={"large"}
				/>
			) : (
				<>
					<NewMatchesList
						navigationProp={navigation}
						conversations={conversations}
					/>
					<NewMessagesList
						navigationProp={navigation}
						conversations={conversations}
						setLoading={setLoading}
					/>
				</>
			)}
		</SafeAreaView>
	);
};

export default Messages;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	noMessages: {
		color: themeColor,
		fontSize: 22,
	},
	button: {
		backgroundColor: themeColor,
		padding: 12,
		marginVertical: 10,
		borderRadius: 10,
		alignSelf: "center",
	},
	buttonText: {
		color: "white",
	},
});
