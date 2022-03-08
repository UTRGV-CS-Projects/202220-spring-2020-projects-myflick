import { Auth } from "aws-amplify";
import { UserActionTypes } from "./actionTypes";
import { Dispatch, useContext } from "react";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { AuthContext, ProfileType } from "../AuthContext";
export interface UserAction {
  type: UserActionTypes;
  payload?: any;
}
import { ProfileCompleteType, SignUpType } from "../../types";
export const handleLogInGoogle = async (dispatch: Dispatch<UserAction>) => {
  try {
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
    dispatch({ type: UserActionTypes.LOG_IN });
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
  data: ProfileCompleteType
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
  data: SignUpType
) => {
  try {
    //let userInfo = await Auth.currentAuthenticatedUser();
    //console.log("userInfo: ", userInfo);
    dispatch({ type: UserActionTypes.LOG_IN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const handleLogOut = async (dispatch: Dispatch<UserAction>) => {
  try {
    await Auth.signOut();
    console.log("user logged out");
    dispatch({ type: UserActionTypes.LOG_OUT });
  } catch (error) {
    console.log(error);
  }
};

export const handleProfileComplete = async (
  dispatch: Dispatch<UserAction>,
  data: ProfileCompleteType
) => {
  try {
    dispatch({ type: UserActionTypes.PROFILE_COMPLETE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
