import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { View, Text } from "../components/Themed";
import { RootStackScreenProps } from "../types";
const Login = ({ navigation }: RootStackScreenProps<"Login">) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/signIn.png")}
        resizeMode="cover"
        style={styles.splash}
      >
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splash: { flex: 1, justifyContent: "center", alignItems: "center" },
  signInButton: {
    position: "absolute",
    bottom: 40,
    marginHorizontal: "25%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FF2E63",
    borderRadius: 10,
  },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
