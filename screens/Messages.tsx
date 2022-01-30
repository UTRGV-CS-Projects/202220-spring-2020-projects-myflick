import { Image, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "../components/Themed";
import NewMatchesList from "../components/Messages/NewMatchesList";

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NewMatchesList />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
