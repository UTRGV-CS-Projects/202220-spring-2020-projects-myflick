import { API, graphqlOperation } from "aws-amplify";
import {
  CreateConversationMutation,
  CreateMessageInput,
  CreateMessageMutation,
  CreateUserConversationsInput,
  CreateUserConversationsMutation,
  ListUserConversationsQuery,
  ListUsersQuery,
  OnCreateMessageSubscription,
} from "../src/API";
import { listUserConversations } from "../src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import {
  createConversation,
  createMessage,
  createUserConversations,
} from "../src/graphql/mutations";
import { onCreateMessage } from "../src/graphql/subscriptions";

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

export const onCreateMessages = async (conversationId: string) => {
  try {
    const data = (await API.graphql(
      graphqlOperation(onCreateMessage, {
        conversationId: conversationId,
      })
    )) as GraphQLResult<OnCreateMessageSubscription>;

    return data;
  } catch (error) {
    console.log(error);
  }
};
