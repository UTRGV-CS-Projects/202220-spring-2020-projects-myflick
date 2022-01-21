import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types";

const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>You are logged in</Text>
      <Button
        title="Log Out"
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        Log Out
      </Button>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
