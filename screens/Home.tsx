import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types";

const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
  const handleDetailsPress = () => {
    navigation.navigate("PersonDetails");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text onPress={handleDetailsPress}>Sara Banks</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
