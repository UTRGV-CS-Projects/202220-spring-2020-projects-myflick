import { Auth } from "aws-amplify";
import { UserActionTypes } from "./actionTypes";
import { Dispatch, useContext } from "react";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { AuthContext, ProfileType } from "../AuthContext";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createUser } from "../../src/graphql/mutations";
import { CreateUserInput, UpdateUserInput } from "../../src/API";
export interface UserAction {
  type: UserActionTypes;
  payload?: any;
}
import { ProfileCompleteType, SignInType, SignUpType } from "../../types";
import { User } from "../../src/API";
import { getUser } from "../../src/graphql/queries";
import { createMovieLikedList } from "../../apis/messages";
import { updateUser } from "../../apis/users";
export const handleLogInGoogle = async (dispatch: Dispatch<UserAction>) => {
  try {
    const data = await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
    //console.log(data);
    //dispatch({ type: UserActionTypes.LOG_IN });
  } catch (error) {
    console.log(error);
  }
};

export const handleLogInFaceBook = async (dispatch: Dispatch<UserAction>) => {
  try {
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook,
    });
    dispatch({ type: UserActionTypes.LOG_IN });
  } catch (error) {
    console.log(error);
  }
};

export const handleSignUp = async (
  dispatch: Dispatch<UserAction>,
  data: SignUpType
) => {
  try {
    //let userInfo = await Auth.currentAuthenticatedUser();
    //console.log("userInfo: ", userInfo);
    dispatch({ type: UserActionTypes.SIGN_UP, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const handleSignIn = async (
  dispatch: Dispatch<UserAction>,
  username: string,
  email: string
) => {
  try {
    //returns email, email_verified, and sub (cognitoId)
    //const user = await Auth.currentAuthenticatedUser();
    //console.log("username", username);
    const info = await API.graphql(
      graphqlOperation(getUser, {
        cognitoId: username,
        email,
      })
    );

    //console.log("infooo", info);

    //let userInfo = await Auth.currentAuthenticatedUser();
    //console.log("userInfo: ", userInfo);
    dispatch({ type: UserActionTypes.LOG_IN, payload: info });
  } catch (error) {
    console.log(error);
  }
};

export const handleLogOut = async (dispatch: Dispatch<UserAction>) => {
  try {
    await Auth.signOut();
    // console.log("user logged out");
    dispatch({ type: UserActionTypes.LOG_OUT });
  } catch (error) {
    console.log(error);
  }
};

export const handleUpdateUser = async (
  dispatch: Dispatch<UserAction>,
  data: UpdateUserInput
) => {
  try {
    console.log("data received", data);
    const info = await updateUser(data);
    console.log("update user info: ", info);

    // console.log("user logged out");
    dispatch({ type: UserActionTypes.UPDATE_USER, payload: info });
  } catch (error) {
    console.log(error);
  }
};

export const handleProfileComplete = async (
  dispatch: Dispatch<UserAction>,
  data: ProfileCompleteType
) => {
  try {
    const { userSub } = await Auth.signUp({
      username: data.email,
      password: data.password,
    });

    // console.log("data", data);

    //  console.log("userSub", userSub);
    const inputData: CreateUserInput = {
      cognitoId: userSub,
      id: userSub,
      email: data.email,
      username: userSub,
      firstName: data.firstName,
      email_verified: false,
      picture: data.picture,
      pronouns: data.pronouns,
      bio: data.bio,
      age: data.age,
      location: data.location,
      photos: data.photos,
      interests: data.interests,
      loggedIn: false,
      profileComplete: true,
    };
    const info = await API.graphql(
      graphqlOperation(createUser, {
        input: inputData,
      })
    );

    //console.log("signed up", info);
    createMovieLikedList(
      userSub,
      //create a new field with the new match
      data.favorites
    );

    dispatch({ type: UserActionTypes.PROFILE_COMPLETE, payload: data });
  } catch (error) {
    console.log("Error in handleProfileComplete: ");
    console.log(error);
  }
};
