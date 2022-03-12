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
  email: string,
  email_verified: boolean,
  firstName: string,
  picture: string,
  pronouns: string,
  bio?: string | null,
  location: string,
  photos: Array< string >,
  interests: Array< string >,
  loggedIn: boolean,
  profileComplete: boolean,
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

export type CreateUserInput = {
  cognitoId: string,
  id: string,
  email: string,
  email_verified: boolean,
  firstName: string,
  picture: string,
  pronouns: string,
  bio?: string | null,
  location: string,
  photos: Array< string >,
  interests: Array< string >,
  loggedIn: boolean,
  profileComplete: boolean,
};

export type UpdateUserInput = {
  cognitoId: string,
  id?: string | null,
  email?: string | null,
  email_verified?: boolean | null,
  firstName: string,
  picture?: string | null,
  pronouns?: string | null,
  bio?: string | null,
  location?: string | null,
  photos?: Array< string > | null,
  interests?: Array< string > | null,
  loggedIn?: boolean | null,
  profileComplete?: boolean | null,
};

export type DeleteUserInput = {
  cognitoId: string,
  firstName: string,
};

export type TableUserFilterInput = {
  cognitoId?: TableStringFilterInput | null,
  id?: TableIDFilterInput | null,
  email?: TableStringFilterInput | null,
  email_verified?: TableBooleanFilterInput | null,
  firstName?: TableStringFilterInput | null,
  picture?: TableStringFilterInput | null,
  pronouns?: TableStringFilterInput | null,
  bio?: TableStringFilterInput | null,
  location?: TableStringFilterInput | null,
  photos?: TableStringFilterInput | null,
  interests?: TableStringFilterInput | null,
  loggedIn?: TableBooleanFilterInput | null,
  profileComplete?: TableBooleanFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type UserConnection = {
  __typename: "UserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
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
      email: string,
      email_verified: boolean,
      firstName: string,
      picture: string,
      pronouns: string,
      bio?: string | null,
      location: string,
      photos: Array< string >,
      interests: Array< string >,
      loggedIn: boolean,
      profileComplete: boolean,
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
      email: string,
      email_verified: boolean,
      firstName: string,
      picture: string,
      pronouns: string,
      bio?: string | null,
      location: string,
      photos: Array< string >,
      interests: Array< string >,
      loggedIn: boolean,
      profileComplete: boolean,
    } | null,
    sender?: string | null,
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
        email: string,
        email_verified: boolean,
        firstName: string,
        picture: string,
        pronouns: string,
        bio?: string | null,
        location: string,
        photos: Array< string >,
        interests: Array< string >,
        loggedIn: boolean,
        profileComplete: boolean,
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
      email: string,
      email_verified: boolean,
      firstName: string,
      picture: string,
      pronouns: string,
      bio?: string | null,
      location: string,
      photos: Array< string >,
      interests: Array< string >,
      loggedIn: boolean,
      profileComplete: boolean,
    } | null,
    userId: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
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
    email: string,
    email_verified: boolean,
    firstName: string,
    picture: string,
    pronouns: string,
    bio?: string | null,
    location: string,
    photos: Array< string >,
    interests: Array< string >,
    loggedIn: boolean,
    profileComplete: boolean,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
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
    email: string,
    email_verified: boolean,
    firstName: string,
    picture: string,
    pronouns: string,
    bio?: string | null,
    location: string,
    photos: Array< string >,
    interests: Array< string >,
    loggedIn: boolean,
    profileComplete: boolean,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
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
    email: string,
    email_verified: boolean,
    firstName: string,
    picture: string,
    pronouns: string,
    bio?: string | null,
    location: string,
    photos: Array< string >,
    interests: Array< string >,
    loggedIn: boolean,
    profileComplete: boolean,
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
      email: string,
      email_verified: boolean,
      firstName: string,
      picture: string,
      pronouns: string,
      bio?: string | null,
      location: string,
      photos: Array< string >,
      interests: Array< string >,
      loggedIn: boolean,
      profileComplete: boolean,
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
      email: string,
      email_verified: boolean,
      firstName: string,
      picture: string,
      pronouns: string,
      bio?: string | null,
      location: string,
      photos: Array< string >,
      interests: Array< string >,
      loggedIn: boolean,
      profileComplete: boolean,
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
        email: string,
        email_verified: boolean,
        firstName: string,
        picture: string,
        pronouns: string,
        bio?: string | null,
        location: string,
        photos: Array< string >,
        interests: Array< string >,
        loggedIn: boolean,
        profileComplete: boolean,
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
        email: string,
        email_verified: boolean,
        firstName: string,
        picture: string,
        pronouns: string,
        bio?: string | null,
        location: string,
        photos: Array< string >,
        interests: Array< string >,
        loggedIn: boolean,
        profileComplete: boolean,
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
      email: string,
      email_verified: boolean,
      firstName: string,
      picture: string,
      pronouns: string,
      bio?: string | null,
      location: string,
      photos: Array< string >,
      interests: Array< string >,
      loggedIn: boolean,
      profileComplete: boolean,
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
      email: string,
      email_verified: boolean,
      firstName: string,
      picture: string,
      pronouns: string,
      bio?: string | null,
      location: string,
      photos: Array< string >,
      interests: Array< string >,
      loggedIn: boolean,
      profileComplete: boolean,
    } | null,
    sender?: string | null,
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
    email: string,
    email_verified: boolean,
    firstName: string,
    picture: string,
    pronouns: string,
    bio?: string | null,
    location: string,
    photos: Array< string >,
    interests: Array< string >,
    loggedIn: boolean,
    profileComplete: boolean,
  } | null,
};

export type GetUserQueryVariables = {
  cognitoId: string,
};

export type GetUserQuery = {
  getUser?:  {
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
    email: string,
    email_verified: boolean,
    firstName: string,
    picture: string,
    pronouns: string,
    bio?: string | null,
    location: string,
    photos: Array< string >,
    interests: Array< string >,
    loggedIn: boolean,
    profileComplete: boolean,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: TableUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "UserConnection",
    items?:  Array< {
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
      email: string,
      email_verified: boolean,
      firstName: string,
      picture: string,
      pronouns: string,
      bio?: string | null,
      location: string,
      photos: Array< string >,
      interests: Array< string >,
      loggedIn: boolean,
      profileComplete: boolean,
    } | null > | null,
    nextToken?: string | null,
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
      email: string,
      email_verified: boolean,
      firstName: string,
      picture: string,
      pronouns: string,
      bio?: string | null,
      location: string,
      photos: Array< string >,
      interests: Array< string >,
      loggedIn: boolean,
      profileComplete: boolean,
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
      email: string,
      email_verified: boolean,
      firstName: string,
      picture: string,
      pronouns: string,
      bio?: string | null,
      location: string,
      photos: Array< string >,
      interests: Array< string >,
      loggedIn: boolean,
      profileComplete: boolean,
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
        email: string,
        email_verified: boolean,
        firstName: string,
        picture: string,
        pronouns: string,
        bio?: string | null,
        location: string,
        photos: Array< string >,
        interests: Array< string >,
        loggedIn: boolean,
        profileComplete: boolean,
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
      email: string,
      email_verified: boolean,
      firstName: string,
      picture: string,
      pronouns: string,
      bio?: string | null,
      location: string,
      photos: Array< string >,
      interests: Array< string >,
      loggedIn: boolean,
      profileComplete: boolean,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  cognitoId?: string | null,
  id?: string | null,
  email?: string | null,
  email_verified?: boolean | null,
  firstName?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
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
    email: string,
    email_verified: boolean,
    firstName: string,
    picture: string,
    pronouns: string,
    bio?: string | null,
    location: string,
    photos: Array< string >,
    interests: Array< string >,
    loggedIn: boolean,
    profileComplete: boolean,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  cognitoId?: string | null,
  id?: string | null,
  email?: string | null,
  email_verified?: boolean | null,
  firstName?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
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
    email: string,
    email_verified: boolean,
    firstName: string,
    picture: string,
    pronouns: string,
    bio?: string | null,
    location: string,
    photos: Array< string >,
    interests: Array< string >,
    loggedIn: boolean,
    profileComplete: boolean,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  cognitoId?: string | null,
  id?: string | null,
  email?: string | null,
  email_verified?: boolean | null,
  firstName?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
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
    email: string,
    email_verified: boolean,
    firstName: string,
    picture: string,
    pronouns: string,
    bio?: string | null,
    location: string,
    photos: Array< string >,
    interests: Array< string >,
    loggedIn: boolean,
    profileComplete: boolean,
  } | null,
};
