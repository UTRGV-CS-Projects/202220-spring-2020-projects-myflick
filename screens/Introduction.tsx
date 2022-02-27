import React, { Component, useContext, useEffect, useState } from "react";
import {
  Platform,
  Image,
  SafeAreaView,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text } from "../components/Themed";
import { themeColor, lightThemeColor } from "../constants/Colors";
import Swiper from "react-native-swiper";
import Amplify, { Auth, Hub } from "aws-amplify";
import * as WebBrowser from "expo-web-browser";
import awsconfig from "../src/aws-exports";
import { RootStackScreenProps } from "../types";
import {
  handleLogInFaceBook,
  handleLogInGoogle,
} from "../store/actions/userActions";
import { AuthContext } from "../store/AuthContext";
const Introduction = ({ navigation }: RootStackScreenProps<"Introduction">) => {
  const { dispatch } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>MyFlick</Text>
      </SafeAreaView>
      <Swiper
        style={styles.wrapper}
        autoplay={true}
        showsButtons={false}
        activeDotColor={themeColor}
        dotColor={lightThemeColor}
        containerStyle={{
          backgroundColor: "transparent",
          width: "100%",
        }}
      >
        <View style={styles.slide1}>
          <Image
            resizeMode="stretch"
            source={require("../assets/images/Subtract.png")}
          />
          <Text style={styles.caption}>Find Your Match</Text>
          <Text style={styles.subCaption}>
            Find people with similar interests as you that are nearby!
          </Text>
        </View>
        <View style={styles.slide2}>
          <MaterialCommunityIcons
            name="movie-open"
            size={60}
            color={themeColor}
            style={styles.captionIcon}
          />

          <Text style={styles.caption}>Watch Movies</Text>
          <Text style={styles.subCaption}>
            Watch your favorite nearby movies with people you've matched with!
          </Text>
        </View>
        <View style={styles.slide3}>
          <MaterialCommunityIcons
            name="message-text"
            size={60}
            color={themeColor}
            style={styles.captionIcon}
          />
          <Text style={styles.caption}>Chat Anonymously</Text>
          <Text style={styles.subCaption}>
            Chat with people you've matched with anonymously!
          </Text>
        </View>
      </Swiper>
      <View style={styles.buttons}>
        <MaterialCommunityIcons.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={() => {
            handleLogInFaceBook(dispatch);
          }}
        >
          Login with Facebook
        </MaterialCommunityIcons.Button>
        <FontAwesome5.Button
          name="google"
          onPress={() => {
            handleLogInGoogle(dispatch);
          }}
        >
          Login with Google
        </FontAwesome5.Button>
      </View>
      <View style={styles.footer}>
        <Text>By signing in you agree with our</Text>
        <TouchableOpacity>
          <Text style={styles.span}> terms and conditions.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 5,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  caption: {
    fontSize: 30,
    fontWeight: "bold",
  },
  captionIcon: {
    marginBottom: 20,
  },
  subCaption: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    fontSize: 20,
    opacity: 0.5,
    textAlign: "center",
  },
  buttons: {
    width: 200,
    height: 150,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  loginButtons: {},
  footer: {
    paddingHorizontal: 35,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  span: {
    color: themeColor,
  },
});
