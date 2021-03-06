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
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, TouchableOpacity } from "react-native";

import Colors, { themeColor } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Introduction from "../screens/Introduction";
import Match from "../screens/Match";
import Messages from "../screens/Messages";
import MyProfile from "../screens/MyProfile";
import PersonDetails from "../screens/PersonDetails";
import MySettings from "../screens/MySettings";
import MovieSwiping from "../screens/MovieSwiping";
import PeopleSwiping from "../screens/PeopleSwiping";
import MovieDetails from "../screens/MovieDetails";
import MyDiscoverySettings from "../screens/MyDiscoverySettings";
import SameMovies from "../screens/SameMovies";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import SwipingComponent from "../components/SwipingComponent/SwipingComponent";
import { AuthContext } from "../store/AuthContext";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import { Auth } from "aws-amplify";
import Personalize from "../screens/Personalize";
import OpenChat from "../screens/OpenChat";

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
  const { user, dispatch } = React.useContext(AuthContext);
  const navigation = useNavigation();

  React.useEffect(() => {
    /* if (user.loggedIn && !user.profileComplete) {
      navigation.navigate("Personalize", {
        email: user.email,
        password: user.password,
      });
    } */
    //console.log(user);
    /* if (!user.loggedIn && user.profileComplete) {
      navigation.navigate("Root", { screen: "MyProfile" });
    } */
    //console.log(user);
  }, [user]);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={user.loggedIn ? "Root" : "Introduction"}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="PersonDetails" component={PersonDetails} />
      </Stack.Group>
      <Stack.Screen name="Match" component={Match} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
      <Stack.Screen name="Personalize" component={Personalize} />
      <Stack.Screen name="MySettings" component={MySettings} />
      <Stack.Screen name="OpenChat" component={OpenChat} />
      <Stack.Screen name="SameMovies" component={SameMovies} />
      <Stack.Screen
        name="MyDiscoverySettings"
        component={MyDiscoverySettings}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { user, dispatch } = React.useContext(AuthContext);

  const getAuthUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      //console.log("Auth User", user.attributes);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getAuthUser();
    console.log("State User: ", user);
  }, [user]);

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeColor, //Colors[colorScheme].lightTint,
        tabBarInactiveTintColor: Colors[colorScheme].darkTint,

        tabBarShowLabel: false,
      }}
      initialRouteName="MyProfile"
    >
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
      />

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
    </BottomTab.Navigator>
  );
}
