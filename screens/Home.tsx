import { StyleSheet } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";
import { View, Text, SafeAreaView } from "../components/Themed";
import Movies from "../components/Movies";
const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
  const handleDetailsPress = () => {
    navigation.navigate("PersonDetails");
  };

  const handleMatch = () => {
    navigation.navigate("Match", {
      firstName: "John",
      personOneImg:
        "https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg",
      personTwoImg:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2861&q=80",
    });
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
