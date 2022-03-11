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
import * as ImagePicker from "expo-image-picker";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	ogin: NavigatorScreenParams<LoginParamList> | undefined;
	MyProfile: NavigatorScreenParams<MyProfileList> | undefined;
	Home: undefined;
	Introduction: NavigatorScreenParams<MessageParamList> | undefined;
	MovieSwiping: NavigatorScreenParams<MovieParamsList> | undefined;
	PeopleSwiping: NavigatorScreenParams<MovieParamsList> | undefined;
	Settings: undefined;
	MySettings: NavigatorScreenParams<MovieParamsList> | undefined;
	Messages: NavigatorScreenParams<MessageParamList> | undefined;
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	PersonDetails: NavigatorScreenParams<MessageParamList> | undefined;
	Match: MatchParamList;
	SignUp: NavigatorScreenParams<MessageParamList> | undefined;
	SignIn: NavigatorScreenParams<MessageParamList> | undefined;
	Personalize: PersonalizeParamList;
	MovieDetails: undefined;
	OpenChat: undefined;
	MyDiscoverySettings:
		| NavigatorScreenParams<MyDiscoverySettingsParamList>
		| undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
	TabOne: { id: string };
	TabTwo: undefined;
	Messages: undefined;
	Introduction: undefined;
	MyProfile: undefined;
	MovieSwiping: undefined;
	PeopleSwiping: undefined;
	PersonDetails: undefined;
	MovieDetails: undefined;
	MySettings: undefined;
	Home: undefined;
	Match: MatchParamList;
	SignUp: undefined;
	SignIn: undefined;
	Personalize: { email: string };
	MyDiscoverySettings: undefined;
	OpenChat: undefined;
};

export type LoginParamList = {
	test: string;
};

export type RootParamList = {
	screen: string;
};

export type MyProfileList = {
	test: string;
};

export type MyDiscoverySettingsParamList = {};

export type MovieParamsList = {};
export type IntroductionParamsList = {};
export type MessageParamList = {
	item: PeopleDetailsType;
	navigation: any;
};

export type PersonalizeParamList = {
	email: string;
	password: string;
};

export type PersonDetailsParamsList = {};

export type ImagesSliderParamsList = {
	person: PeopleDetailsType;
};

export type MatchParamList = {
	firstName: string;
	personOneImg: string;
	personTwoImg: string;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;

export type SignUpType = {
	email: string;
	password: string;
};

export type SignInType = {
	email: string;
	password: string;
};

export type ProfileCompleteType = {
	email: string;
	password: string;
	interests: string[];
	firstName: string;
	photos: string[];
	bio: string;
	location: string;
	pronouns: string;
	picture: string;
};
