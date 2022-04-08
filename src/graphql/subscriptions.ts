/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToNewMessage = /* GraphQL */ `
  subscription SubscribeToNewMessage($conversationId: ID!) {
    subscribeToNewMessage(conversationId: $conversationId) {
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
        age
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
        age
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation(
    $createdAt: String
    $id: ID
    $name: String
  ) {
    onCreateConversation(createdAt: $createdAt, id: $id, name: $name) {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation(
    $createdAt: String
    $id: ID
    $name: String
  ) {
    onUpdateConversation(createdAt: $createdAt, id: $id, name: $name) {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation(
    $createdAt: String
    $id: ID
    $name: String
  ) {
    onDeleteConversation(createdAt: $createdAt, id: $id, name: $name) {
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
export const onCreateUserConversations = /* GraphQL */ `
  subscription OnCreateUserConversations($conversationId: ID, $userId: ID) {
    onCreateUserConversations(
      conversationId: $conversationId
      userId: $userId
    ) {
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
          age
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
        age
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
export const onUpdateUserConversations = /* GraphQL */ `
  subscription OnUpdateUserConversations($conversationId: ID, $userId: ID) {
    onUpdateUserConversations(
      conversationId: $conversationId
      userId: $userId
    ) {
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
          age
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
        age
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
export const onDeleteUserConversations = /* GraphQL */ `
  subscription OnDeleteUserConversations($conversationId: ID, $userId: ID) {
    onDeleteUserConversations(
      conversationId: $conversationId
      userId: $userId
    ) {
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
          age
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
        age
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($conversationId: ID) {
    onCreateMessage(conversationId: $conversationId) {
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
        age
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
      id
      createdAt
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
        age
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $content: String
    $conversationId: ID
    $createdAt: String
    $id: ID
    $isSent: Boolean
  ) {
    onUpdateMessage(
      content: $content
      conversationId: $conversationId
      createdAt: $createdAt
      id: $id
      isSent: $isSent
    ) {
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
        age
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
        age
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $content: String
    $conversationId: ID
    $createdAt: String
    $id: ID
    $isSent: Boolean
  ) {
    onDeleteMessage(
      content: $content
      conversationId: $conversationId
      createdAt: $createdAt
      id: $id
      isSent: $isSent
    ) {
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
        age
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
        age
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($owner: String) {
    onCreatePicture(owner: $owner) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($owner: String) {
    onUpdatePicture(owner: $owner) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($owner: String) {
    onDeletePicture(owner: $owner) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $cognitoId: ID
    $id: ID
    $username: String
    $registered: Boolean
    $email: String
  ) {
    onCreateUser(
      cognitoId: $cognitoId
      id: $id
      username: $username
      registered: $registered
      email: $email
    ) {
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
      age
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $cognitoId: ID
    $id: ID
    $username: String
    $registered: Boolean
    $email: String
  ) {
    onUpdateUser(
      cognitoId: $cognitoId
      id: $id
      username: $username
      registered: $registered
      email: $email
    ) {
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
      age
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $cognitoId: ID
    $id: ID
    $username: String
    $registered: Boolean
    $email: String
  ) {
    onDeleteUser(
      cognitoId: $cognitoId
      id: $id
      username: $username
      registered: $registered
      email: $email
    ) {
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
      age
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
