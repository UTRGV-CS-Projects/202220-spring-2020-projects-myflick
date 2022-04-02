/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateConversationInput = {
  createdAt?: string | null,
  name: string,
  id: string,
};

export type Conversation = {
  __typename: "Conversation",
  createdAt?: string | null,
  id: string,
  messages?: MessageConnection | null,
  name: string,
};

export type MessageConnection = {
  __typename: "MessageConnection",
  items?:  Array<Message | null > | null,
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
  username: string,
  registered?: boolean | null,
  email: string,
  email_verified: boolean,
  firstName: string,
  age?: number | null,
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

export type UpdateConversationInput = {
  createdAt?: string | null,
  id: string,
  name?: string | null,
};

export type DeleteConversationInput = {
  id: string,
};

export type CreateUserConversationsInput = {
  conversationId: string,
  userId: string,
};

export type UpdateUserConversationsInput = {
  conversationId: string,
  userId?: string | null,
};

export type DeleteUserConversationsInput = {
  conversationId: string,
};

export type CreateMessageInput = {
  content: string,
  conversationId: string,
  createdAt?: string | null,
  id: string,
  isSent?: boolean | null,
  sender?: string | null,
};

export type UpdateMessageInput = {
  content?: string | null,
  conversationId: string,
  createdAt?: string | null,
  id?: string | null,
  isSent?: boolean | null,
  sender?: string | null,
};

export type DeleteMessageInput = {
  conversationId: string,
};

export type CreatePictureInput = {
  id?: string | null,
  name?: string | null,
  owner?: string | null,
  file?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelPictureConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelPictureConditionInput | null > | null,
  or?: Array< ModelPictureConditionInput | null > | null,
  not?: ModelPictureConditionInput | null,
};

export type ModelStringInput = {
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
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Picture = {
  __typename: "Picture",
  id: string,
  name?: string | null,
  owner?: string | null,
  file?: S3Object | null,
  createdAt: string,
  updatedAt: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type UpdatePictureInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  file?: S3ObjectInput | null,
};

export type DeletePictureInput = {
  id: string,
};

export type CreateUserInput = {
  cognitoId: string,
  id: string,
  username: string,
  registered?: boolean | null,
  email: string,
  age?: number | null,
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
  username?: string | null,
  registered?: boolean | null,
  email?: string | null,
  email_verified?: boolean | null,
  firstName?: string | null,
  picture?: string | null,
  pronouns?: string | null,
  age?: number | null,
  bio?: string | null,
  location?: string | null,
  photos?: Array< string > | null,
  interests?: Array< string > | null,
  loggedIn?: boolean | null,
  profileComplete?: boolean | null,
};

export type DeleteUserInput = {
  cognitoId: string,
};

export type TableConversationFilterInput = {
  createdAt?: TableStringFilterInput | null,
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
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

export type ConversationConnection = {
  __typename: "ConversationConnection",
  items?:  Array<Conversation | null > | null,
  nextToken?: string | null,
};

export type TableUserConversationsFilterInput = {
  conversationId?: TableIDFilterInput | null,
  userId?: TableIDFilterInput | null,
};

export type UserConversationsConnection = {
  __typename: "UserConversationsConnection",
  items?:  Array<UserConversations | null > | null,
  nextToken?: string | null,
};

export type TableMessageFilterInput = {
  content?: TableStringFilterInput | null,
  conversationId?: TableIDFilterInput | null,
  createdAt?: TableStringFilterInput | null,
  id?: TableIDFilterInput | null,
  isSent?: TableBooleanFilterInput | null,
  sender?: TableStringFilterInput | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelPictureFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelPictureFilterInput | null > | null,
  or?: Array< ModelPictureFilterInput | null > | null,
  not?: ModelPictureFilterInput | null,
};

export type ModelIDInput = {
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
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPictureConnection = {
  __typename: "ModelPictureConnection",
  items:  Array<Picture | null >,
  nextToken?: string | null,
};

export type TableUserFilterInput = {
  cognitoId?: TableIDFilterInput | null,
  id?: TableIDFilterInput | null,
  username?: TableStringFilterInput | null,
  registered?: TableBooleanFilterInput | null,
  email?: TableStringFilterInput | null,
  email_verified?: TableBooleanFilterInput | null,
  firstName?: TableStringFilterInput | null,
  picture?: TableStringFilterInput | null,
  pronouns?: TableStringFilterInput | null,
  age?: TableIntFilterInput | null,
  bio?: TableStringFilterInput | null,
  location?: TableStringFilterInput | null,
  photos?: TableStringFilterInput | null,
  interests?: TableStringFilterInput | null,
  loggedIn?: TableBooleanFilterInput | null,
  profileComplete?: TableBooleanFilterInput | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type UserConnection = {
  __typename: "UserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type CreateConversationMutationVariables = {
  input: CreateConversationInput,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      items?:  Array< {
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

export type UpdateConversationMutationVariables = {
  input: UpdateConversationInput,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      items?:  Array< {
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

export type DeleteConversationMutationVariables = {
  input: DeleteConversationInput,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      items?:  Array< {
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

export type CreateUserConversationsMutationVariables = {
  input: CreateUserConversationsInput,
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
        username: string,
        registered?: boolean | null,
        email: string,
        email_verified: boolean,
        firstName: string,
        age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type UpdateUserConversationsMutationVariables = {
  input: UpdateUserConversationsInput,
};

export type UpdateUserConversationsMutation = {
  updateUserConversations?:  {
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
        username: string,
        registered?: boolean | null,
        email: string,
        email_verified: boolean,
        firstName: string,
        age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type DeleteUserConversationsMutationVariables = {
  input: DeleteUserConversationsInput,
};

export type DeleteUserConversationsMutation = {
  deleteUserConversations?:  {
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
        username: string,
        registered?: boolean | null,
        email: string,
        email_verified: boolean,
        firstName: string,
        age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type CreatePictureMutationVariables = {
  input: CreatePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type CreatePictureMutation = {
  createPicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePictureMutationVariables = {
  input: UpdatePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type UpdatePictureMutation = {
  updatePicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePictureMutationVariables = {
  input: DeletePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type DeletePictureMutation = {
  deletePicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      items?:  Array< {
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
    username: string,
    registered?: boolean | null,
    email: string,
    email_verified: boolean,
    firstName: string,
    age?: number | null,
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
      items?:  Array< {
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
    username: string,
    registered?: boolean | null,
    email: string,
    email_verified: boolean,
    firstName: string,
    age?: number | null,
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
      items?:  Array< {
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
    username: string,
    registered?: boolean | null,
    email: string,
    email_verified: boolean,
    firstName: string,
    age?: number | null,
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
      items?:  Array< {
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
    username: string,
    registered?: boolean | null,
    email: string,
    email_verified: boolean,
    firstName: string,
    age?: number | null,
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

export type GetConversationQueryVariables = {
  id: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      items?:  Array< {
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

export type ListConversationsQueryVariables = {
  filter?: TableConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ConversationConnection",
    items?:  Array< {
      __typename: "Conversation",
      createdAt?: string | null,
      id: string,
      messages?:  {
        __typename: "MessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserConversationsQueryVariables = {
  conversationId: string,
};

export type GetUserConversationsQuery = {
  getUserConversations?:  {
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
        username: string,
        registered?: boolean | null,
        email: string,
        email_verified: boolean,
        firstName: string,
        age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type ListUserConversationsQueryVariables = {
  filter?: TableUserConversationsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserConversationsQuery = {
  listUserConversations?:  {
    __typename: "UserConversationsConnection",
    items?:  Array< {
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
        username: string,
        registered?: boolean | null,
        email: string,
        email_verified: boolean,
        firstName: string,
        age?: number | null,
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
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  conversationId: string,
};

export type GetMessageQuery = {
  getMessage?:  {
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type ListMessagesQueryVariables = {
  filter?: TableMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "MessageConnection",
    items?:  Array< {
      __typename: "Message",
      author?:  {
        __typename: "User",
        cognitoId: string,
        id: string,
        username: string,
        registered?: boolean | null,
        email: string,
        email_verified: boolean,
        firstName: string,
        age?: number | null,
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
        username: string,
        registered?: boolean | null,
        email: string,
        email_verified: boolean,
        firstName: string,
        age?: number | null,
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

export type GetPictureQueryVariables = {
  id: string,
};

export type GetPictureQuery = {
  getPicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPicturesQueryVariables = {
  filter?: ModelPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPicturesQuery = {
  listPictures?:  {
    __typename: "ModelPictureConnection",
    items:  Array< {
      __typename: "Picture",
      id: string,
      name?: string | null,
      owner?: string | null,
      file?:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
      items?:  Array< {
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
    username: string,
    registered?: boolean | null,
    email: string,
    email_verified: boolean,
    firstName: string,
    age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type OnCreateConversationSubscriptionVariables = {
  createdAt?: string | null,
  id?: string | null,
  name?: string | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      items?:  Array< {
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

export type OnUpdateConversationSubscriptionVariables = {
  createdAt?: string | null,
  id?: string | null,
  name?: string | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      items?:  Array< {
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

export type OnDeleteConversationSubscriptionVariables = {
  createdAt?: string | null,
  id?: string | null,
  name?: string | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    createdAt?: string | null,
    id: string,
    messages?:  {
      __typename: "MessageConnection",
      items?:  Array< {
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

export type OnCreateUserConversationsSubscriptionVariables = {
  conversationId?: string | null,
  userId?: string | null,
};

export type OnCreateUserConversationsSubscription = {
  onCreateUserConversations?:  {
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
        username: string,
        registered?: boolean | null,
        email: string,
        email_verified: boolean,
        firstName: string,
        age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type OnUpdateUserConversationsSubscriptionVariables = {
  conversationId?: string | null,
  userId?: string | null,
};

export type OnUpdateUserConversationsSubscription = {
  onUpdateUserConversations?:  {
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
        username: string,
        registered?: boolean | null,
        email: string,
        email_verified: boolean,
        firstName: string,
        age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type OnDeleteUserConversationsSubscriptionVariables = {
  conversationId?: string | null,
  userId?: string | null,
};

export type OnDeleteUserConversationsSubscription = {
  onDeleteUserConversations?:  {
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
        username: string,
        registered?: boolean | null,
        email: string,
        email_verified: boolean,
        firstName: string,
        age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type OnCreateMessageSubscriptionVariables = {
  conversationId?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type OnUpdateMessageSubscriptionVariables = {
  content?: string | null,
  conversationId?: string | null,
  createdAt?: string | null,
  id?: string | null,
  isSent?: boolean | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type OnDeleteMessageSubscriptionVariables = {
  content?: string | null,
  conversationId?: string | null,
  createdAt?: string | null,
  id?: string | null,
  isSent?: boolean | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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
      username: string,
      registered?: boolean | null,
      email: string,
      email_verified: boolean,
      firstName: string,
      age?: number | null,
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

export type OnCreatePictureSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePictureSubscription = {
  onCreatePicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePictureSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePictureSubscription = {
  onUpdatePicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePictureSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePictureSubscription = {
  onDeletePicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  cognitoId?: string | null,
  id?: string | null,
  username?: string | null,
  registered?: boolean | null,
  email?: string | null,
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
      items?:  Array< {
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
    username: string,
    registered?: boolean | null,
    email: string,
    email_verified: boolean,
    firstName: string,
    age?: number | null,
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
  username?: string | null,
  registered?: boolean | null,
  email?: string | null,
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
      items?:  Array< {
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
    username: string,
    registered?: boolean | null,
    email: string,
    email_verified: boolean,
    firstName: string,
    age?: number | null,
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
  username?: string | null,
  registered?: boolean | null,
  email?: string | null,
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
      items?:  Array< {
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
    username: string,
    registered?: boolean | null,
    email: string,
    email_verified: boolean,
    firstName: string,
    age?: number | null,
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
