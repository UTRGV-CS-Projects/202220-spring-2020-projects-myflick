import { Auth } from "aws-amplify";
import { UserActionTypes } from "./actionTypes";
import { Dispatch, useContext } from "react";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { AuthContext, ProfileType } from "../AuthContext";

export interface UserAction {
  type: UserActionTypes;
  payload?: any;
}
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

export const setUser = async (dispatch: Dispatch<UserAction>) => {
  try {
    let userInfo = await Auth.currentAuthenticatedUser();
    const { attributes } = userInfo;
    dispatch({ type: UserActionTypes.SET_USER, payload: attributes });
  } catch (error) {
    console.log(error);
  }
};
