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
  firstName: "",
  identities: "",
  password: "",
  name: "",
  picture: "",
  location: "",
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
  identities: string;
  name: string;
  password: string;
  picture: string;
  pronouns: string;
  bio: string;
  location: string;
  photos: string[];
  interests: string[];
  sub: string;
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
        ...user,
        email: action.payload.email,
        password: action.payload.password,
        email_verified: true,
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
      return {
        ...user,
        picture: payload.picture,
        firstName: payload.firstName,
        interests: payload.interests,
        bio: payload.bio,
        location: payload.location,
        email: payload.email,
        pronouns: payload.pronouns,
        photos: payload.photos,
        password: payload.password,
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
