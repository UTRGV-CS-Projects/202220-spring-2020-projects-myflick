import { Button, StyleSheet } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";
import { View, Text, SafeAreaView } from "../components/Themed";
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
