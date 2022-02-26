import React, {
  createContext,
  useReducer,
  useState,
  ReactNode,
  FC,
} from "react";

const initialState: ProfileType = {};

export const AuthContext = createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<UserAction>;
}>({ state: initialState, dispatch: () => {} });

type ProfileType = {
  loggedIn?: boolean;
};

export enum UserActionTypes {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
}

interface UserAction {
  type: UserActionTypes;
  payload?: any;
}
const reducer = (state: ProfileType = initialState, action: UserAction) => {
  const { type, payload } = action;

  switch (action.type) {
    case UserActionTypes.LOG_IN:
      return {
        ...state,
        loggedIn: true,
      };
    case UserActionTypes.LOG_OUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export const AuthContextProvider: FC<ReactNode> = ({
  children,
}: {
  children?: any;
  props?: any;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
