import React, {
  useEffect,
  useState,
  Component,
  useContext,
  useRef,
} from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import { themeColor, lightThemeColor } from "../constants/Colors";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import { Avatar, Input } from "react-native-elements";
import { Chip } from "react-native-paper";
import { UserActionTypes } from "../store/actions/actionTypes";
import { AuthContext } from "../store/AuthContext";
import { handleProfileComplete } from "../store/actions/userActions";
import { ProfileCompleteType } from "../types";
import * as ImagePicker from "expo-image-picker";
import LottieView from "lottie-react-native";

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
    handleProfileComplete(dispatch, completeProfile)
      .then((response) => {
        checkRef.current?.play();
      })
      .catch(() => {
        alert("error saving profile");
      });
  };

  useEffect(() => {
    console.log(authCode);
  }, [authCode]);

  useEffect(() => {
    console.log(completeProfile);
  }, [completeProfile]);

  const checkRef = useRef<LottieView>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleBar}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title1}>Create Profile</Text>
          <TouchableOpacity onPress={handleSaveChanges}>
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
        </View>

        <View></View>

        <View>
          <Text style={styles.sectionHeader}>Photos</Text>
          <View style={styles.bodyContent}>
            {completeProfile.photos.length > 0 ? (
              <FlatList
                horizontal={true}
                keyExtractor={(data) => {
                  return data;
                }}
                data={completeProfile.photos}
                renderItem={(item) => {
                  return (
                    <Image
                      key={item.index}
                      source={{ uri: item.item }}
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
            {user.interests?.map((item, index) => {
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
        <LottieView
          loop={false}
          autoPlay={false}
          ref={checkRef}
          onAnimationFinish={() => {
            navigation.navigate("Introduction");
          }}
          source={require("../assets/lotties/checkmark.json")}
          style={styles.check}
        />
      </ScrollView>
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
  check: {
    width: 150,
    height: 150,
    alignSelf: "center",
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
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  icon: {
    width: 55,
    height: 65,
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
    marginVertical: 10,
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
