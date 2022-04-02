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
  listMessages,
  listUserConversations,
} from "../src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import {
  createConversation,
  createMessage,
  createUserConversations,
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
    console.log(error);
  }
};

export const createConversations = async (name: string, id: string) => {
  try {
    const data = (await API.graphql(
      graphqlOperation(createConversation, {
        input: { id, name },
      })
    )) as GraphQLResult<CreateConversationMutation>;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createMessages = async (
  conversationId: string,
  content: string,
  isSent: string,
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

export const listMessage = async (conversationId: string | undefined) => {
  try {
    const data = (await API.graphql(
      graphqlOperation(listMessages, {
        filter: { conversationId: { eq: conversationId } },
      })
    )) as GraphQLResult<ListMessagesQuery>;

    return data;
  } catch (error) {
    throw new Error();
  }
};
