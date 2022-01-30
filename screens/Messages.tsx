import { Image, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "../components/Themed";
import NewMatchesList from "../components/Messages/NewMatchesList";
import NewMessagesList from "../components/Messages/NewMessagesList";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Messages = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container]}>
      <NewMatchesList />
      <NewMessagesList />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
