/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
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
import SettingsMenu from "../screens/SettingsMenu";
import { UserActionTypes } from "../store/actions/actionTypes";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import MovieSwiping2 from "../screens/MovieSwiping2";
import { Auth, Hub } from "aws-amplify";
import { AuthContext } from "../store/AuthContext";
import { setUser } from "../store/actions/userActions";

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
  const { user, dispatch } = useContext(AuthContext);

  useEffect(() => {
    console.log("UserState: ", user);
  }, [user]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user.loggedIn ? (
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      ) : (
        <Stack.Screen name="Introduction" component={Introduction} />
      )}
      <Stack.Group screenOptions={{ presentation: "modal"}}>
        <Stack.Screen name="PersonDetails" component={PersonDetails} />
      </Stack.Group>
      <Stack.Screen name="Match" component={Match} />

      <Stack.Group screenOptions={{presentation: "modal"}}>
      <Stack.Screen name ="SettingsMenu" component={SettingsMenu} />
      </Stack.Group>
      <Stack.Screen name="MySettings" component={MySettings} />
        
    </Stack.Navigator>
  );
}



const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { user, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          console.log("user signed in");
          setUser(dispatch);
          break;
        case "signUp":
          console.log("user signed up");
          break;
        case "signOut":
          console.log("user signed out");
          break;
        case "signIn_failure":
          console.log("user sign in failed");
          break;
        case "tokenRefresh":
          console.log("token refresh succeeded");
          break;
        case "tokenRefresh_failure":
          console.log("token refresh failed");
          break;
        case "configured":
          console.log("the Auth module is configured");
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    console.log("UserState: ", user);
  }, [user]);

  return (
    <BottomTab.Navigator
      initialRouteName="MyProfile"
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

      <BottomTab.Screen
        name="MovieSwiping2"
        component={MovieSwiping2}
        options={({ navigation }: RootTabScreenProps<"MovieSwiping2">) => ({
          title: "",
          tabBarAccessibilityLabel: "MovieSwiping2",
          tabBarTestID: "MovieSwipingTab",
          tabBarIcon: ({ color }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MovieSwiping2");
              }}
              accessibilityRole="button"
            >
              <Ionicons name="film" size={30} color={color} />
            </TouchableOpacity>
          ),
        })}
      />

      {/* <BottomTab.Screen
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
      /> */}
    </BottomTab.Navigator>
  );
}
