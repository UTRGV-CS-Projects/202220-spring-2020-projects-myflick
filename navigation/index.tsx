/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
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
import Messages from "../screens/Messages";
import MyProfile from "../screens/MyProfile";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

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
      {/*       <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} /> */}
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
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
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
        name="MyProfile"
        component = {MyProfile}
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
              <Ionicons name="logo-ionic" size={30} color={color} />
            </TouchableOpacity>
          ),

        })}
      />
      
    </BottomTab.Navigator>
  );
}
