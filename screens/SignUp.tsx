import React, { useContext, useState } from "react";
import { Text, useThemeColor } from "../components/Themed";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  View,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import Colors, { themeColor } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { Auth } from "aws-amplify";
import { RootStackScreenProps, SignUpType } from "../types";
import { AuthContext } from "../store/AuthContext";
import { handleSignUp } from "../store/actions/userActions";

const SignUp = ({ navigation }: RootStackScreenProps<"SignUp">) => {
  const colorScheme = useColorScheme();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, dispatch } = useContext(AuthContext);
  async function signUp() {
    try {
      if (userEmail.length === 0 || password.length === 0) {
        alert("Please enter email and password");
        return;
      }

      const response = await handleSignUp(dispatch, {
        email: userEmail,
        password,
      })
        .then(() => {})
        .catch(() => {
          alert("Error signing up");
        });

      navigation.navigate("Personalize", { email: userEmail, password });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "#222121cc"]}
        style={styles.background}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={[styles.header, { color: Colors[colorScheme].primary }]}>
            Sign Up
          </Text>
          <View
            style={[
              styles.fieldContainer,
              { borderColor: Colors[colorScheme].primary },
            ]}
          >
            <TextInput
            testID="EmailInput"
              label="Email"
              keyboard-type="email-address"
              mode="outlined"
              autoComplete={false}
              multiline={false}
              autoCapitalize="none"
              activeOutlineColor={Colors[colorScheme].secondary}
              style={[styles.textInput]}
              autoCorrect={true}
              onChangeText={(value) => {
                setUserEmail(value.trim());
              }}
              left={<TextInput.Icon name="account" />}
            />
            <TextInput
            testID="PasswordInput"
              label="Password"
              autoComplete={false}
              mode="outlined"
              autoCapitalize="none"
              secureTextEntry={true}
              activeOutlineColor={Colors[colorScheme].secondary}
              onChangeText={(value) => setPassword(value.trim())}
              style={[styles.textInput]}
              left={<TextInput.Icon name="eye" />}
            />
            <TouchableOpacity style={styles.signInButton} onPress={signUp} testID="SignUpButton">
              <Text style={styles.signInText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 500,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
    alignSelf: "flex-start",
  },
  textInput: {
    width: "90%",
    marginBottom: 36,
    borderRadius: 20,
  },
  fieldContainer: {
    height: 400,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    marginTop: 12,
    borderRadius: 8,
  },
  signInButton: {
    paddingVertical: 13,
    paddingHorizontal: 30,
    backgroundColor: themeColor,
    borderRadius: 10,
  },
  signInText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
