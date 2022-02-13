/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PeopleDetailsType } from "./db/db";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: NavigatorScreenParams<LoginParamList> | undefined;
  MyProfile: NavigatorScreenParams<MyProfileList> | undefined;
  Home: undefined;
  Introduction: NavigatorScreenParams<MessageParamList> | undefined;
  Settings: undefined;
  Messages: NavigatorScreenParams<MessageParamList> | undefined;
  Root: undefined;
  PersonDetails: NavigatorScreenParams<MessageParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: { id: string };
  TabTwo: undefined;
  Messages: undefined;
  Introduction: undefined;
  MyProfile: undefined;
  PersonDetails: undefined;
  Home: undefined;
  MySettings: undefined;
};

export type LoginParamList = {
  test: string;
};

export type MyProfileList = {
  test: string;
};

export type MessageParamList = {
  item: PeopleDetailsType;
};

export type ImagesSliderParamsList = {
  person: PeopleDetailsType;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
