import React from "react";
import { StyleSheet, Text } from "react-native";

// import Text from "../Text";
interface Props {
    error ?: any,
    visible?: any
}
function ErrorMessage({ error, visible }: Props) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default ErrorMessage;
