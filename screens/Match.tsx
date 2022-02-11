import { StyleSheet } from "react-native";
import React from "react";
import { View, Text, SafeAreaView } from "../components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { themeColor } from "../constants/Colors";
import { MatchParamList, RootTabScreenProps } from "../types";
import Background from "../components/Match/Background";

const MatchScreen = ({ navigation, route }: RootTabScreenProps<"Match">) => {
  const { firstName } = route.params;
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "#222121cc"]}
        style={styles.background}
      />
      <Background />
      <Text style={styles.header}>It's a Match!</Text>
      <Text style={styles.subheader}>You and {firstName} liked each other</Text>
    </View>
  );
};

export default MatchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themeColor,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 500,
  },
  header: {
    color: "whitesmoke",
    fontWeight: "bold",
    fontSize: 30,
  },
  subheader: {
    color: "whitesmoke",
    fontSize: 20,
  },
});
