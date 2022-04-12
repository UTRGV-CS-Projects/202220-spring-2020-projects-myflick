import { API, graphqlOperation } from "aws-amplify";
import {
	CreateConversationMutation,
	CreateMessageInput,
	CreateMessageMutation,
	CreateUserConversationsInput,
	CreateUserConversationsMutation,
	ListConversationsQuery,
	ListMessagesQuery,
	ListUserConversationsQuery,
	ListUsersQuery,
	OnCreateMessageSubscription,
} from "../src/API";
import {
	listConversations,
	listMatches,
	listMessages,
	listUserConversations,
} from "../src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import {
	createConversation,
	createMessage,
	createUserConversations,
	createLikedTableEfficient,
	updateLikedTableEfficient,
} from "../src/graphql/mutations";
import { onCreateMessage } from "../src/graphql/subscriptions";
import { Observable } from "zen-observable-ts";

export const fetchUserConversations = async (cognitoId: string) => {
	try {
		const data = (await API.graphql(
			graphqlOperation(listUserConversations, {
				filter: { userId: { eq: cognitoId } },
			})
		)) as GraphQLResult<ListUserConversationsQuery>;
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
		console.log("error in fetchUserConversations");
	}
};

export const fetchConversations = async (conversationId: string) => {
	try {
		const data = (await API.graphql(
			graphqlOperation(listConversations, {
				filter: { id: { eq: conversationId } },
			})
		)) as GraphQLResult<ListConversationsQuery>;
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
		console.log("error in fetchConversations");
	}
};

export const createUserConversation = async (
	cognitoId: string,
	conversationId: string
) => {
	try {
		const data = (await API.graphql(
			graphqlOperation(createUserConversations, {
				input: { conversationId, userId: cognitoId },
			})
		)) as GraphQLResult<CreateUserConversationsMutation>;

		return data;
	} catch (error) {
		console.log("error in createUserConversation");
		console.log(error);
	}
};

export const createConversations = async (
	name1: string,
	name2: string,
	id: string
) => {
	try {
		console.log(name1, name2);
		const data = (await API.graphql(
			graphqlOperation(createConversation, {
				input: { id, name1, name2 },
			})
		)) as GraphQLResult<CreateConversationMutation>;

		return data;
	} catch (error) {
		console.log(error);
	}
};

export const createMessages = async (
	conversationId: string | undefined,
	content: string,
	isSent: boolean,
	sender: string
) => {
	try {
		const data = (await API.graphql(
			graphqlOperation(createMessage, {
				input: {
					content,
					conversationId,
					isSent,
					sender,
				},
			})
		)) as GraphQLResult<CreateMessageMutation>;

		return data;
	} catch (error) {
		console.log(error);
	}
};

export const createMatch = async (
	cognitoId: string,
	peopleLikedList: string[]
) => {
	try {
		const matchData = (await API.graphql(
			graphqlOperation(createLikedTableEfficient, {
				input: {
					cognitoId,
					peopleLikedList,
				},
			})
		)) as GraphQLResult<CreateMessageMutation>;

		return matchData;
	} catch (error) {
		console.log(error);
	}
};

export const listMessage = async (conversationId: string | undefined) => {
	try {
		const data = (await API.graphql(
			graphqlOperation(listMessages, {
				filter: { conversationId: { eq: conversationId } },
			})
		)) as GraphQLResult<ListMessagesQuery>;
		return data;
	} catch (error) {
		console.log(error);
		throw new Error();
	}
};

export const fetchMatches = async (cognitoId: string) => {
	try {
		const data = (await API.graphql(
			graphqlOperation(listMatches, {
				cognitoId: cognitoId,
			})
		)) as GraphQLResult<ListConversationsQuery>;
		console.log(data.data.getLikedTableEfficient);
		return data.data.getLikedTableEfficient;
	} catch (error) {
		console.log(error);
		console.log("error in listMatches");
	}
};

export const updateMatches = async (
	cognitoId: string,
	peopleLikedList: string[]
) => {
	try {
		const matchData = (await API.graphql(
			graphqlOperation(updateLikedTableEfficient, {
				input: {
					cognitoId,
					peopleLikedList,
				},
			})
		)) as GraphQLResult<CreateMessageMutation>;

		return matchData;
	} catch (error) {
		console.log(error);
	}
};
