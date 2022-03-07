/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/Home";
import Introduction from "../screens/Introduction";
import Login from "../screens/Login";
import Match from "../screens/Match";
import Messages from "../screens/Messages";
import MyProfile from "../screens/MyProfile";
import PersonDetails from "../screens/PersonDetails";
import MySettings from "../screens/MySettings";
import MovieSwiping from "../screens/MovieSwiping";
import PeopleSwiping from "../screens/PeopleSwiping";
import MovieDetails from "../screens/MovieDetails";

import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import SwipingComponent from "../components/SwipingComponent/SwipingComponent";

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Root" component={BottomTabNavigator} />
			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen name="PersonDetails" component={PersonDetails} />
			</Stack.Group>
			<Stack.Screen name="Match" component={Match} />
		</Stack.Navigator>
	);
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors[colorScheme].lightTint,
				tabBarInactiveTintColor: Colors[colorScheme].darkTint,
				tabBarShowLabel: false,
			}}
		>
			<BottomTab.Screen
				name="Messages"
				component={Messages}
				options={({ navigation }: RootTabScreenProps<"Messages">) => ({
					title: "",
					tabBarAccessibilityLabel: "Messages",
					tabBarTestID: "MessagesTab",
					tabBarIcon: ({ color }) => (
						<Ionicons name="chatbubbles-outline" size={30} color={color} />
					),
					//We can use this to add a badge to the top part later on if we want
					/* headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Home")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Ionicons
                name="chatbubbles-outline"
                size={24}
                color="red"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ), */
				})}
			/>
			<BottomTab.Screen
				name="Introduction"
				component={Introduction}
				options={({ navigation }: RootTabScreenProps<"Introduction">) => ({
					title: "",
					tabBarAccessibilityLabel: "Introduction",
					tabBarTestID: "IntroductionTab",
					tabBarIcon: ({ color }) => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("Introduction");
							}}
							accessibilityRole="button"
						>
							<Ionicons name="logo-ionic" size={30} color={color} />
						</TouchableOpacity>
					),
				})}
			/>

			<BottomTab.Screen
				name="Home"
				component={Home}
				options={({ navigation }: RootTabScreenProps<"Home">) => ({
					title: "",
					tabBarAccessibilityLabel: "Home",
					tabBarTestID: "HomeTab",
					tabBarIcon: ({ color }) => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("Home");
							}}
							accessibilityRole="button"
						>
							<Ionicons name="logo-ionic" size={30} color={color} />
						</TouchableOpacity>
					),
				})}
			/>
      <BottomTab.Screen
        name="MyProfile"
        component={MyProfile}
        options={({ navigation }: RootTabScreenProps<"MyProfile">) => ({
          title: "",
          tabBarAccessibilityLabel: "MyProfile",
          tabBarTestID: "MyProfileTab",
          tabBarIcon: ({ color }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MyProfile");
              }}
              accessibilityRole="button"
            >
              <Ionicons name="person-outline" size={30} color={color} />
            </TouchableOpacity>
          ),
        })}
      />

      <BottomTab.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={({ navigation }: RootTabScreenProps<"MovieDetails">) => ({
          title: "",
          tabBarAccessibilityLabel: "MovieDetails",
          tabBarTestID: "MovieDetails",
          tabBarIcon: ({ color }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MovieDetails");
              }}
              accessibilityRole="button"
            >
              <Ionicons name="person-outline" size={30} color={color} />
            </TouchableOpacity>
          ),
        })}
      />

      <BottomTab.Screen
        name="MySettings"
        component={MySettings}
        options={({ navigation }: RootTabScreenProps<"MySettings">) => ({
          title: "",
          tabBarAccessibilityLabel: "MySettings",
          tabBarTestID: "MySettingsTab",
          tabBarIcon: ({ color }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MySettings");
              }}
              accessibilityRole="button"
            >
              <Ionicons name="settings-outline" size={30} color={color} />
            </TouchableOpacity>
          ),
        })}
      />

			<BottomTab.Screen
				name="MyProfile"
				component={MyProfile}
				options={({ navigation }: RootTabScreenProps<"MyProfile">) => ({
					title: "",
					tabBarAccessibilityLabel: "MyProfile",
					tabBarTestID: "MyProfileTab",
					tabBarIcon: ({ color }) => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("MyProfile");
							}}
							accessibilityRole="button"
						>
							<Ionicons name="person-outline" size={30} color={color} />
						</TouchableOpacity>
					),
				})}
			/>

			<BottomTab.Screen
				name="MovieSwiping"
				component={MovieSwiping}
				options={({ navigation }: RootTabScreenProps<"MovieSwiping">) => ({
					title: "",
					tabBarAccessibilityLabel: "MovieSwiping",
					tabBarTestID: "MovieSwipingTab",
					tabBarIcon: ({ color }) => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("MovieSwiping");
							}}
							accessibilityRole="button"
						>
							<Ionicons name="film" size={30} color={color} />
						</TouchableOpacity>
					),
				})}
			/>

			{/* <BottomTab.Screen
				name="PeopleSwiping"
				component={PeopleSwiping}
				options={({ navigation }: RootTabScreenProps<"PeopleSwiping">) => ({
					title: "",
					tabBarAccessibilityLabel: "PeopleSwiping",
					tabBarTestID: "PeopleSwipingTab",
					tabBarIcon: ({ color }) => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("PeopleSwiping");
							}}
							accessibilityRole="button"
						>
							<Ionicons name="flame" size={30} color={color} />
						</TouchableOpacity>
					),
				})}
			/> */}

			<BottomTab.Screen
				name="MySettings"
				component={MySettings}
				options={({ navigation }: RootTabScreenProps<"MySettings">) => ({
					title: "",
					tabBarAccessibilityLabel: "MySettings",
					tabBarTestID: "MySettingsTab",
					tabBarIcon: ({ color }) => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("MySettings");
							}}
							accessibilityRole="button"
						>
							<Ionicons name="settings-outline" size={30} color={color} />
						</TouchableOpacity>
					),
				})}
			/>
		</BottomTab.Navigator>
	);

}
