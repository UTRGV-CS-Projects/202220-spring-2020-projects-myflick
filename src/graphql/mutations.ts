/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLikedTableEfficient = `

mutation MyMutation2($input: CreateLikedTableEfficientInput! ) {
  createLikedTableEfficient(input: $input) {
    cognitoId
    peopleLikedList
  }
}`;

export const createLikedMoviesTable = `mutation MyMutation3($input: CreateLikedMovieTableInput! ) {
	createLikedMovieTable(input: $input) {
	  cognitoId
	  likedMovies
	}
  }`;

export const updateLikedTableEfficient = `

mutation MyMutation2($input: UpdateLikedTableEfficientInput! ) {
  updateLikedTableEfficient(input: $input) {
    cognitoId
    peopleLikedList
  }
}`;

export const updateLikedMovies = `

mutation MyMutation23($input: UpdateLikedMovieTableInput! ) {
  updateLikedMovieTable(input: $input) {
    cognitoId
    likedMovies
  }
}`;

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
			name1
			name2
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
					name1
					name2
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
				name1
				name2
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
export const createPicture = /* GraphQL */ `
	mutation CreatePicture(
		$input: CreatePictureInput!
		$condition: ModelPictureConditionInput
	) {
		createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
	mutation UpdatePicture(
		$input: UpdatePictureInput!
		$condition: ModelPictureConditionInput
	) {
		updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
	mutation DeletePicture(
		$input: DeletePictureInput!
		$condition: ModelPictureConditionInput
	) {
		deletePicture(input: $input, condition: $condition) {
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
