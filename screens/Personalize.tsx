import React, { useEffect, useState, Component, useContext } from "react";
import {
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
  SectionList,
  Alert,
  VirtualizedList,
  TextInput,
  TextInputProps,
  Touchable,
  Button,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import { themeColor, lightThemeColor } from "../constants/Colors";
import { MyProfileSections } from "../db/db";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import { Avatar, Input } from "react-native-elements";
import { Chip } from "react-native-paper";
import { UserActionTypes } from "../store/actions/actionTypes";
import { AuthContext } from "../store/AuthContext";
import { Auth } from "aws-amplify";
import {
  handleLogOut,
  handleProfileComplete,
  handleSignUp,
} from "../store/actions/userActions";
import { ProfileCompleteType } from "../types";
import * as ImagePicker from "expo-image-picker";
import { transferKeyToUpperCase } from "@aws-amplify/core";
const Personalize = ({
  navigation,
  route,
}: RootStackScreenProps<"Personalize">) => {
  const colorScheme = useColorScheme();

  const { user, dispatch } = useContext(AuthContext);
  const [authCode, setAuthCode] = useState("");
  const [images, setImages] = useState<ImagePicker.ImageInfo[]>([]);
  const [imageStatus, requestPermission] =
    ImagePicker.useMediaLibraryPermissions();

  const [completeProfile, setCompleteProfile] = useState<ProfileCompleteType>({
    email: route.params.email,
    password: route.params.password,
    interests: ["eating", "chewing"],
    firstName: "",
    photos: [],
    bio: "",
    location: "",
    pronouns: "",
    picture: "https://www.booksie.com/files/profiles/22/mr-anonymous.png",
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    requestPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setCompleteProfile({
        ...completeProfile,
        photos: [...completeProfile.photos, result.uri],
      });
    }
  };

  const handleSaveChanges = async () => {
    /* if (!user.email_verified) {
      console.log("user email: ", user.email);
      console.log("auth code: ", authCode);
      try {
        await Auth.confirmSignUp(user.email, authCode);
      } catch (error) {
        console.log("error confirming sign up", error);
      }
    }
 */

    handleProfileComplete(dispatch, completeProfile);

    navigation.navigate("Introduction");
  };

  const logOut = () => {
    handleLogOut(dispatch);
    navigation.navigate("Introduction");
  };

  useEffect(() => {
    console.log(authCode);
  }, [authCode]);

  useEffect(() => {
    console.log(completeProfile);
  }, [completeProfile]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title1}>Edit Profile</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.saveButton}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              style={styles.image}
              source={{ uri: completeProfile.picture }}
            ></Image>
          </View>
          <View style={styles.add}>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="add-circle-sharp"
                size={30}
                color={themeColor}
                style={{ marginTop: 30, marginLeft: 32 }}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.viewKs}>
            <Input
              placeholder="Name"
              value={completeProfile.firstName}
              onChangeText={(value) => {
                setCompleteProfile({ ...completeProfile, firstName: value });
              }}
            />
          </View>

          <View style={styles.viewKs}>
            <Input
              value={completeProfile.pronouns}
              onChangeText={(value) => {
                setCompleteProfile({ ...completeProfile, pronouns: value });
              }}
              placeholder="Pronouns"
            />
          </View>

          <View style={styles.viewKs}>
            <Input
              value={completeProfile.bio}
              onChangeText={(value) => {
                setCompleteProfile({ ...completeProfile, bio: value });
              }}
              placeholder="Bio"
              multiline={true}
            />
          </View>

          <View style={styles.viewKs}>
            <Input
              value={completeProfile.location}
              onChangeText={(value) => {
                setCompleteProfile({ ...completeProfile, location: value });
              }}
              placeholder="Location"
            />
          </View>

          {/* <View style={styles.line}>
          <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width:"100%" 
                }}></View>
                 </View> */}
        </View>

        <View></View>

        <View>
          <Text style={styles.sectionHeader}>Photos</Text>
          <View style={styles.bodyContent}>
            {completeProfile.photos.length > 0 ? (
              <FlatList
                horizontal={true}
                keyExtractor={(data) => {
                  return data.uri;
                }}
                data={images}
                renderItem={(item) => {
                  return (
                    <Image
                      key={item.index}
                      source={{ uri: item.item.uri }}
                      style={{ width: 150, height: 150 }}
                    />
                  );
                }}
              />
            ) : null}
            <TouchableOpacity onPress={pickImage}>
              <View style={styles.menuBox}>
                <Ionicons
                  name="add"
                  size={60}
                  color={themeColor}
                  style={styles.icon}
                ></Ionicons>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.chipQuestion}>Interests</Text>
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              padding: 0,
            }}
          >
            {user.interests.map((item, index) => {
              return (
                <Chip
                  mode="flat"
                  key={index}
                  textStyle={{
                    color: themeColor,
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                  onPress={() => {}}
                  style={{
                    margin: 5,
                    borderColor: themeColor,
                  }}
                >
                  {item}
                </Chip>
              );
            })}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            handleSaveChanges();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logOut();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Personalize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 12,
    //marginTop:10,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
    marginHorizontal: 10,
  },
  title1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cancelButton: {
    fontSize: 18,
  },
  saveButton: {
    fontSize: 18,
    color: themeColor,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 15,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  add: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
  body: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  bodyContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  menuBox: {
    backgroundColor: "#D3D3D3",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 10,
  },
  icon: {
    width: 55,
    height: 65,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  containerEA: {
    alignItems: "center",
    marginTop: -65,
  },
  viewKs: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  profileInput: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 42,
  },

  photoLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: themeColor,
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
  },
  chipQuestion: {
    fontSize: 15,
    color: themeColor,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
});
