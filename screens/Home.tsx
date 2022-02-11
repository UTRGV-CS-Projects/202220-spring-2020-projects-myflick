import { Button, StyleSheet } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";
import { View, Text, SafeAreaView } from "../components/Themed";
const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
  const handleDetailsPress = () => {
    navigation.navigate("PersonDetails");
  };

  const handleMatch = () => {
    navigation.navigate("Match", { firstName: "John" });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text onPress={handleDetailsPress}>Sara Banks</Text>
      <Text onPress={handleMatch}>Match</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
