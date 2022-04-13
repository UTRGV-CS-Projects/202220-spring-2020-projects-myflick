/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";
//add host/domain names here later
const prefix = Linking.createURL("/");
console.log(prefix);
const linking: LinkingOptions<RootStackParamList> = {
	prefixes: [prefix],
	config: {
		screens: {
			Home: {
				path: "home",
				screens: {
					Profile: "profile",
				},
			},
			Settings: "settings",
		},
	},
};

export default linking;
