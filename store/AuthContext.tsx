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
import { ProfileCompleteType } from "../types";
import { UserActionTypes } from "./actions/actionTypes";
import { UserAction } from "./actions/userActions";
const initialState: ProfileType = {
  email: "",
  email_verified: false,
  firstName: "",
  password: "",
  name: "",
  picture: "",
  location: "",
  cognitoId: "",
  age: "",
  bio: "",
  sub: "",
  loggedIn: false,
  pronouns: "",
  photos: [],
  interests: [],
  profileComplete: false,
};

export const AuthContext = createContext<{
  user: typeof initialState;
  dispatch: Dispatch<UserAction>;
}>({ user: initialState, dispatch: () => {} });

export type ProfileType = {
  email: string;
  email_verified: boolean;
  firstName: string;
  name: string;
  password: string;
  picture: string;
  pronouns: string;
  bio: string;
  location: string;
  age: string;
  photos: string[];
  interests: string[];
  sub: string;
  cognitoId: string;
  loggedIn?: boolean;
  profileComplete: boolean;
};

const reducer = (user: ProfileType = initialState, action: UserAction) => {
  const { type, payload } = action;

  switch (action.type) {
    case UserActionTypes.SIGN_UP:
      return {
        ...user,
        email: action.payload.email,
        password: action.payload.password,
      };
    case UserActionTypes.LOG_IN:
      return {
        ...action.payload.data.getUser,
        loggedIn: true,
      };
    case UserActionTypes.LOG_OUT:
      return {
        ...initialState,
      };
    case UserActionTypes.SET_USER:
      const newUser = action.payload as ProfileType;
      return {
        ...newUser,
        loggedIn: true,
      };
    case UserActionTypes.PROFILE_COMPLETE:
      const signUpUser: ProfileCompleteType = action.payload;
      return {
        ...user,
        interests: signUpUser.interests,
        firstName: signUpUser.firstName,
        photos: signUpUser.photos,
        bio: signUpUser.bio,
        location: signUpUser.location,
        pronouns: signUpUser.pronouns,
        picture: signUpUser.picture,
        profileComplete: true,
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
