/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      cognitoId
      conversations {
        nextToken
        userConversations {
          conversationId
          userId
        }
      }
      id
      messages {
        items {
          content
          conversationId
          createdAt
          id
          isSent
          sender
        }
        nextToken
      }
      username
      registered
      email
      email_verified
      firstName
      picture
      pronouns
      bio
      location
      photos
      interests
      loggedIn
      profileComplete
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      cognitoId
      conversations {
        nextToken
        userConversations {
          conversationId
          userId
        }
      }
      id
      messages {
        items {
          content
          conversationId
          createdAt
          id
          isSent
          sender
        }
        nextToken
      }
      username
      registered
      email
      email_verified
      firstName
      picture
      pronouns
      bio
      location
      photos
      interests
      loggedIn
      profileComplete
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      cognitoId
      conversations {
        nextToken
        userConversations {
          conversationId
          userId
        }
      }
      id
      messages {
        items {
          content
          conversationId
          createdAt
          id
          isSent
          sender
        }
        nextToken
      }
      username
      registered
      email
      email_verified
      firstName
      picture
      pronouns
      bio
      location
      photos
      interests
      loggedIn
      profileComplete
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation($input: CreateConversationInput!) {
    createConversation(input: $input) {
      createdAt
      id
      messages {
        items {
          content
          conversationId
          createdAt
          id
          isSent
          sender
        }
        nextToken
      }
      name
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation($input: UpdateConversationInput!) {
    updateConversation(input: $input) {
      createdAt
      id
      messages {
        items {
          content
          conversationId
          createdAt
          id
          isSent
          sender
        }
        nextToken
      }
      name
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation($input: DeleteConversationInput!) {
    deleteConversation(input: $input) {
      createdAt
      id
      messages {
        items {
          content
          conversationId
          createdAt
          id
          isSent
          sender
        }
        nextToken
      }
      name
    }
  }
`;
export const createUserConversations = /* GraphQL */ `
  mutation CreateUserConversations($input: CreateUserConversationsInput!) {
    createUserConversations(input: $input) {
      associated {
        associated {
          conversationId
          userId
        }
        conversation {
          createdAt
          id
          name
        }
        conversationId
        user {
          cognitoId
          id
          username
          registered
          email
          email_verified
          firstName
          picture
          pronouns
          bio
          location
          photos
          interests
          loggedIn
          profileComplete
        }
        userId
      }
      conversation {
        createdAt
        id
        messages {
          nextToken
        }
        name
      }
      conversationId
      user {
        cognitoId
        conversations {
          nextToken
        }
        id
        messages {
          nextToken
        }
        username
        registered
        email
        email_verified
        firstName
        picture
        pronouns
        bio
        location
        photos
        interests
        loggedIn
        profileComplete
      }
      userId
    }
  }
`;
export const updateUserConversations = /* GraphQL */ `
  mutation UpdateUserConversations($input: UpdateUserConversationsInput!) {
    updateUserConversations(input: $input) {
      associated {
        associated {
          conversationId
          userId
        }
        conversation {
          createdAt
          id
          name
        }
        conversationId
        user {
          cognitoId
          id
          username
          registered
          email
          email_verified
          firstName
          picture
          pronouns
          bio
          location
          photos
          interests
          loggedIn
          profileComplete
        }
        userId
      }
      conversation {
        createdAt
        id
        messages {
          nextToken
        }
        name
      }
      conversationId
      user {
        cognitoId
        conversations {
          nextToken
        }
        id
        messages {
          nextToken
        }
        username
        registered
        email
        email_verified
        firstName
        picture
        pronouns
        bio
        location
        photos
        interests
        loggedIn
        profileComplete
      }
      userId
    }
  }
`;
export const deleteUserConversations = /* GraphQL */ `
  mutation DeleteUserConversations($input: DeleteUserConversationsInput!) {
    deleteUserConversations(input: $input) {
      associated {
        associated {
          conversationId
          userId
        }
        conversation {
          createdAt
          id
          name
        }
        conversationId
        user {
          cognitoId
          id
          username
          registered
          email
          email_verified
          firstName
          picture
          pronouns
          bio
          location
          photos
          interests
          loggedIn
          profileComplete
        }
        userId
      }
      conversation {
        createdAt
        id
        messages {
          nextToken
        }
        name
      }
      conversationId
      user {
        cognitoId
        conversations {
          nextToken
        }
        id
        messages {
          nextToken
        }
        username
        registered
        email
        email_verified
        firstName
        picture
        pronouns
        bio
        location
        photos
        interests
        loggedIn
        profileComplete
      }
      userId
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
      author {
        cognitoId
        conversations {
          nextToken
        }
        id
        messages {
          nextToken
        }
        username
        registered
        email
        email_verified
        firstName
        picture
        pronouns
        bio
        location
        photos
        interests
        loggedIn
        profileComplete
      }
      content
      conversationId
      createdAt
      id
      isSent
      recipient {
        cognitoId
        conversations {
          nextToken
        }
        id
        messages {
          nextToken
        }
        username
        registered
        email
        email_verified
        firstName
        picture
        pronouns
        bio
        location
        photos
        interests
        loggedIn
        profileComplete
      }
      sender
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage($input: UpdateMessageInput!) {
    updateMessage(input: $input) {
      author {
        cognitoId
        conversations {
          nextToken
        }
        id
        messages {
          nextToken
        }
        username
        registered
        email
        email_verified
        firstName
        picture
        pronouns
        bio
        location
        photos
        interests
        loggedIn
        profileComplete
      }
      content
      conversationId
      createdAt
      id
      isSent
      recipient {
        cognitoId
        conversations {
          nextToken
        }
        id
        messages {
          nextToken
        }
        username
        registered
        email
        email_verified
        firstName
        picture
        pronouns
        bio
        location
        photos
        interests
        loggedIn
        profileComplete
      }
      sender
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage($input: DeleteMessageInput!) {
    deleteMessage(input: $input) {
      author {
        cognitoId
        conversations {
          nextToken
        }
        id
        messages {
          nextToken
        }
        username
        registered
        email
        email_verified
        firstName
        picture
        pronouns
        bio
        location
        photos
        interests
        loggedIn
        profileComplete
      }
      content
      conversationId
      createdAt
      id
      isSent
      recipient {
        cognitoId
        conversations {
          nextToken
        }
        id
        messages {
          nextToken
        }
        username
        registered
        email
        email_verified
        firstName
        picture
        pronouns
        bio
        location
        photos
        interests
        loggedIn
        profileComplete
      }
      sender
    }
  }
`;
