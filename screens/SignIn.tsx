import React, { useContext, useState } from "react";
import { Text, useThemeColor, View } from "../components/Themed";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import Colors, { themeColor } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { Auth } from "aws-amplify";
import { RootStackScreenProps, SignInType, SignUpType } from "../types";
import { AuthContext } from "../store/AuthContext";
import { handleSignIn, handleSignUp } from "../store/actions/userActions";

const SignIn = ({ navigation }: RootStackScreenProps<"SignIn">) => {
  const colorScheme = useColorScheme();
  const [userEmail, setUserEmail] = useState("");
  const [authCode, setAuthCode] = useState("");

  const [password, setPassword] = useState("");
  const { user, dispatch } = useContext(AuthContext);

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(userEmail);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }

  const handleConfirmUser = async () => {
    try {
      await Auth.confirmSignUp(userEmail, authCode);
      console.log("user confirmed successfully");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  };

  async function signIn() {
    try {
      if (userEmail.length === 0 || password.length === 0) {
        alert("Please enter email and password");
        return;
      }
      if (authCode.length > 0) {
        await handleConfirmUser();
      }
      const user = await Auth.signIn({
        username: userEmail,
        password,
      }).then((response) => {
        //console.log("response", response);
        //console.log("response.sub", response.attributes.sub);
        dispatchSignIn(response.attributes.sub, userEmail);
        //console.log("signed in user: ", response);
      });

      navigation.replace("Root", { screen: "MyProfile" });
    } catch (error) {
      alert(error);
    }
  }
  const dispatchSignIn = async (username: string, email: string) => {
    handleSignIn(dispatch, username, email);
  };
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
            Sign In
          </Text>
          <View
            style={[
              styles.fieldContainer,
              { borderColor: Colors[colorScheme].primary },
            ]}
          >
            <TextInput
              label="Email"
              keyboard-type="email-address"
              mode="outlined"
              autoComplete={false}
              multiline={false}
              autoCapitalize="none"
              activeOutlineColor={Colors[colorScheme].opposite}
              style={[styles.textInput]}
              autoCorrect={true}
              onSubmitEditing={(value) => {
                setUserEmail(value.nativeEvent.text.trim());
              }}
              left={<TextInput.Icon name="account" />}
            />
            <TextInput
              label="Password"
              autoComplete={false}
              mode="outlined"
              autoCapitalize="none"
              secureTextEntry={true}
              activeOutlineColor={Colors[colorScheme].opposite}
              onSubmitEditing={(value) =>
                setPassword(value.nativeEvent.text.trim())
              }
              style={[styles.textInput]}
              left={<TextInput.Icon name="eye" />}
            />

            <TextInput
              label="Auth Code (optional)"
              autoComplete={false}
              mode="outlined"
              autoCapitalize="none"
              secureTextEntry={true}
              activeOutlineColor={Colors[colorScheme].opposite}
              onSubmitEditing={(value) =>
                setAuthCode(value.nativeEvent.text.trim())
              }
              style={[styles.textInput]}
              left={<TextInput.Icon name="eye" />}
            />
            <TouchableOpacity
              style={styles.authCode}
              onPress={resendConfirmationCode}
            >
              <Text style={styles.authCodeText}>Resend Authorization Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInButton} onPress={signIn}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

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
  authCode: {
    marginTop: 5,
    marginBottom: 25,
  },
  authCodeText: {
    color: "white",
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
