/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const allMessage = /* GraphQL */ `
  query AllMessage($after: String, $conversationId: ID!, $first: Int) {
    allMessage(after: $after, conversationId: $conversationId, first: $first) {
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
export const allMessageConnection = /* GraphQL */ `
  query AllMessageConnection(
    $after: String
    $conversationId: ID!
    $first: Int
  ) {
    allMessageConnection(
      after: $after
      conversationId: $conversationId
      first: $first
    ) {
      messages {
        author {
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
        content
        conversationId
        createdAt
        id
        isSent
        recipient {
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
        sender
      }
      nextToken
    }
  }
`;
export const allMessageFrom = /* GraphQL */ `
  query AllMessageFrom(
    $after: String
    $conversationId: ID!
    $first: Int
    $sender: String!
  ) {
    allMessageFrom(
      after: $after
      conversationId: $conversationId
      first: $first
      sender: $sender
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
export const allUser = /* GraphQL */ `
  query AllUser($after: String, $first: Int) {
    allUser(after: $after, first: $first) {
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
export const me = /* GraphQL */ `
  query Me {
    me {
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
