/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Conversation = {
  __typename: "Conversation",
  createdAt?: string | null,
  id: string,
  messages?: MessageConnection | null,
  name: string,
};

export type MessageConnection = {
  __typename: "MessageConnection",
  messages?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  author?: User | null,
  content: string,
  conversationId: string,
  createdAt?: string | null,
  id: string,
  isSent?: boolean | null,
  recipient?: User | null,
  sender?: string | null,
};

export type User = {
  __typename: "User",
  cognitoId: string,
  conversations?: UserConverstationsConnection | null,
  id: string,
  messages?: MessageConnection | null,
  registered?: boolean | null,
  username: string,
};

export type UserConverstationsConnection = {
  __typename: "UserConverstationsConnection",
  nextToken?: string | null,
  userConversations?:  Array<UserConversations | null > | null,
};

export type UserConversations = {
  __typename: "UserConversations",
  associated?:  Array<UserConversations | null > | null,
  conversation?: Conversation | null,
  conversationId: string,
  user?: User | null,
  userId: string,
};

export type CreateConversationMutationVariables = {
  createdAt?: string | null,
  id: string,
  name: string,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      messages?:  Array< {
        __typename: "Message",
        content: string,
        conversationId: string,
        createdAt?: string | null,
        id: string,
        isSent?: boolean | null,
        sender?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  content?: string | null,
  conversationId: string,
  createdAt: string,
  id: string,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    author?:  {
      __typename: "User",
      cognitoId: string,
      conversations?:  {
        __typename: "UserConverstationsConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      registered?: boolean | null,
      username: string,
    } | null,
    content: string,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    isSent?: boolean | null,
    recipient?:  {
      __typename: "User",
      cognitoId: string,
      conversations?:  {
        __typename: "UserConverstationsConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      registered?: boolean | null,
      username: string,
    } | null,
    sender?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  username: string,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    cognitoId: string,
    conversations?:  {
      __typename: "UserConverstationsConnection",
      nextToken?: string | null,
      userConversations?:  Array< {
        __typename: "UserConversations",
        conversationId: string,
        userId: string,
      } | null > | null,
    } | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      messages?:  Array< {
        __typename: "Message",
        content: string,
        conversationId: string,
        createdAt?: string | null,
        id: string,
        isSent?: boolean | null,
        sender?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    registered?: boolean | null,
    username: string,
  } | null,
};

export type CreateUserConversationsMutationVariables = {
  conversationId: string,
  userId: string,
};

export type CreateUserConversationsMutation = {
  createUserConversations?:  {
    __typename: "UserConversations",
    associated?:  Array< {
      __typename: "UserConversations",
      associated?:  Array< {
        __typename: "UserConversations",
        conversationId: string,
        userId: string,
      } | null > | null,
      conversation?:  {
        __typename: "Conversation",
        createdAt?: string | null,
        id: string,
        name: string,
      } | null,
      conversationId: string,
      user?:  {
        __typename: "User",
        cognitoId: string,
        id: string,
        registered?: boolean | null,
        username: string,
      } | null,
      userId: string,
    } | null > | null,
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
    } | null,
    conversationId: string,
    user?:  {
      __typename: "User",
      cognitoId: string,
      conversations?:  {
        __typename: "UserConverstationsConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      registered?: boolean | null,
      username: string,
    } | null,
    userId: string,
  } | null,
};

export type AllMessageQueryVariables = {
  after?: string | null,
  conversationId: string,
  first?: number | null,
};

export type AllMessageQuery = {
  allMessage?:  Array< {
    __typename: "Message",
    author?:  {
      __typename: "User",
      cognitoId: string,
      conversations?:  {
        __typename: "UserConverstationsConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      registered?: boolean | null,
      username: string,
    } | null,
    content: string,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    isSent?: boolean | null,
    recipient?:  {
      __typename: "User",
      cognitoId: string,
      conversations?:  {
        __typename: "UserConverstationsConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      registered?: boolean | null,
      username: string,
    } | null,
    sender?: string | null,
  } | null > | null,
};

export type AllMessageConnectionQueryVariables = {
  after?: string | null,
  conversationId: string,
  first?: number | null,
};

export type AllMessageConnectionQuery = {
  allMessageConnection?:  {
    __typename: "MessageConnection",
    messages?:  Array< {
      __typename: "Message",
      author?:  {
        __typename: "User",
        cognitoId: string,
        id: string,
        registered?: boolean | null,
        username: string,
      } | null,
      content: string,
      conversationId: string,
      createdAt?: string | null,
      id: string,
      isSent?: boolean | null,
      recipient?:  {
        __typename: "User",
        cognitoId: string,
        id: string,
        registered?: boolean | null,
        username: string,
      } | null,
      sender?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type AllMessageFromQueryVariables = {
  after?: string | null,
  conversationId: string,
  first?: number | null,
  sender: string,
};

export type AllMessageFromQuery = {
  allMessageFrom?:  Array< {
    __typename: "Message",
    author?:  {
      __typename: "User",
      cognitoId: string,
      conversations?:  {
        __typename: "UserConverstationsConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      registered?: boolean | null,
      username: string,
    } | null,
    content: string,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    isSent?: boolean | null,
    recipient?:  {
      __typename: "User",
      cognitoId: string,
      conversations?:  {
        __typename: "UserConverstationsConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      registered?: boolean | null,
      username: string,
    } | null,
    sender?: string | null,
  } | null > | null,
};

export type AllUserQueryVariables = {
  after?: string | null,
  first?: number | null,
};

export type AllUserQuery = {
  allUser?:  Array< {
    __typename: "User",
    cognitoId: string,
    conversations?:  {
      __typename: "UserConverstationsConnection",
      nextToken?: string | null,
      userConversations?:  Array< {
        __typename: "UserConversations",
        conversationId: string,
        userId: string,
      } | null > | null,
    } | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      messages?:  Array< {
        __typename: "Message",
        content: string,
        conversationId: string,
        createdAt?: string | null,
        id: string,
        isSent?: boolean | null,
        sender?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    registered?: boolean | null,
    username: string,
  } | null > | null,
};

export type MeQuery = {
  me?:  {
    __typename: "User",
    cognitoId: string,
    conversations?:  {
      __typename: "UserConverstationsConnection",
      nextToken?: string | null,
      userConversations?:  Array< {
        __typename: "UserConversations",
        conversationId: string,
        userId: string,
      } | null > | null,
    } | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      messages?:  Array< {
        __typename: "Message",
        content: string,
        conversationId: string,
        createdAt?: string | null,
        id: string,
        isSent?: boolean | null,
        sender?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    registered?: boolean | null,
    username: string,
  } | null,
};

export type SubscribeToNewMessageSubscriptionVariables = {
  conversationId: string,
};

export type SubscribeToNewMessageSubscription = {
  subscribeToNewMessage?:  {
    __typename: "Message",
    author?:  {
      __typename: "User",
      cognitoId: string,
      conversations?:  {
        __typename: "UserConverstationsConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      registered?: boolean | null,
      username: string,
    } | null,
    content: string,
    conversationId: string,
    createdAt?: string | null,
    id: string,
    isSent?: boolean | null,
    recipient?:  {
      __typename: "User",
      cognitoId: string,
      conversations?:  {
        __typename: "UserConverstationsConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      registered?: boolean | null,
      username: string,
    } | null,
    sender?: string | null,
  } | null,
};

export type SubscribeToNewUCsSubscriptionVariables = {
  userId: string,
};

export type SubscribeToNewUCsSubscription = {
  subscribeToNewUCs?:  {
    __typename: "UserConversations",
    associated?:  Array< {
      __typename: "UserConversations",
      associated?:  Array< {
        __typename: "UserConversations",
        conversationId: string,
        userId: string,
      } | null > | null,
      conversation?:  {
        __typename: "Conversation",
        createdAt?: string | null,
        id: string,
        name: string,
      } | null,
      conversationId: string,
      user?:  {
        __typename: "User",
        cognitoId: string,
        id: string,
        registered?: boolean | null,
        username: string,
      } | null,
      userId: string,
    } | null > | null,
    conversation?:  {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
    } | null,
    conversationId: string,
    user?:  {
      __typename: "User",
      cognitoId: string,
      conversations?:  {
        __typename: "UserConverstationsConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      registered?: boolean | null,
      username: string,
    } | null,
    userId: string,
  } | null,
};

export type SubscribeToNewUsersSubscription = {
  subscribeToNewUsers?:  {
    __typename: "User",
    cognitoId: string,
    conversations?:  {
      __typename: "UserConverstationsConnection",
      nextToken?: string | null,
      userConversations?:  Array< {
        __typename: "UserConversations",
        conversationId: string,
        userId: string,
      } | null > | null,
    } | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      messages?:  Array< {
        __typename: "Message",
        content: string,
        conversationId: string,
        createdAt?: string | null,
        id: string,
        isSent?: boolean | null,
        sender?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    registered?: boolean | null,
    username: string,
  } | null,
};
