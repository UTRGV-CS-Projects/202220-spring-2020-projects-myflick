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
        registered
        username
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
        registered
        username
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
          registered
          username
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
        registered
        username
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
      registered
      username
    }
  }
`;
