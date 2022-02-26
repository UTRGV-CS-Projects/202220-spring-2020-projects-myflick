import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { Auth } from "aws-amplify";
import React, {
  createContext,
  useReducer,
  useState,
  ReactNode,
  FC,
  Dispatch,
} from "react";
import { UserActionTypes } from "./actions/actionTypes";
import { UserAction } from "./actions/userActions";
const initialState: ProfileType = {
  email: "",
  email_verified: false,
  give_name: "",
  identities: "",
  name: "",
  picture: "",
  sub: "",
  loggedIn: false,
};

export const AuthContext = createContext<{
  user: typeof initialState;
  dispatch: Dispatch<UserAction>;
}>({ user: initialState, dispatch: () => {} });

export type ProfileType = {
  email: string;
  email_verified: boolean;
  give_name: string;
  identities: string;
  name: string;
  picture: string;
  sub: string;
  loggedIn?: boolean;
};

const reducer = (user: ProfileType = initialState, action: UserAction) => {
  const { type, payload } = action;

  switch (action.type) {
    case UserActionTypes.LOG_IN:
      return {
        ...user,
        loggedIn: true,
      };
    case UserActionTypes.LOG_OUT:
      return {
        ...user,
        loggedIn: false,
      };
    case UserActionTypes.SET_USER:
      const newUser = action.payload as ProfileType;
      return {
        ...newUser,
        loggedIn: true,
      };
    default:
      return user;
  }
};

export const AuthContextProvider: FC<ReactNode> = ({
  children,
}: {
  children?: any;
  props?: any;
}) => {
  const [user, dispatch] = useReducer(reducer, initialState);
  const value = { dispatch, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
