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
export const subscribeToNewUCs = /* GraphQL */ `
  subscription SubscribeToNewUCs($userId: ID!) {
    subscribeToNewUCs(userId: $userId) {
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
export const subscribeToNewUsers = /* GraphQL */ `
  subscription SubscribeToNewUsers {
    subscribeToNewUsers {
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
        messages {
          content
          conversationId
          createdAt
          id
          isSent
          sender
        }
        nextToken
      }
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
