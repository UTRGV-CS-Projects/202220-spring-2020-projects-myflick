import React, { useEffect, useState, useRef, useMemo, useContext } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import Colors, { themeColor, lightThemeColor } from "../constants/Colors";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import { Chip } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import SearchBar from "react-native-dynamic-search-bar";
import { AuthContext } from "../store/AuthContext";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { UpdateUserInput } from "../src/API";
import { Auth, Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { handleUpdateUser } from "../store/actions/userActions";

const MySettings = ({ navigation }: RootStackScreenProps<"MySettings">) => {
  const { user, dispatch } = useContext(AuthContext);
  const colorScheme = useColorScheme();
  const [images, setImages] = useState<string[]>([...user.photos]);
  const [imageStatus, requestPermission] =
    ImagePicker.useMediaLibraryPermissions();
  const [loading, setLoading] = useState(false);

  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const refRBSheet = useRef<any | null>(null);
  const refRBSheet2 = useRef<any | null>(null);
  const refRBSheet3 = useRef<any | null>(null);
  const refRBSheet4 = useRef<any | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [interest, setInterest] = useState("");
  const [localImages, setLocalImages] = useState(user.photos);

  const [userData, setUserData] = useState<UpdateUserInput>({
    cognitoId: user.cognitoId,
    firstName: user.firstName,
    interests: user.interests,
    photos: user.photos,
    bio: user.bio,
    location: user.location,
    age: parseInt(user.age),
    pronouns: user.pronouns,
  });

  const [multiSliderValue, setMultiSliderValue] = useState([userData.age!]);

  const fetchImageFromUri = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    try {
      requestPermission();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      //console.log(result);

      return result;
    } catch (error) {
      alert(error);
    }
  };

  const uploadImage = async (fileName: string, image: Blob) => {
    Auth.currentCredentials();

    return Storage.put(fileName, image, {
      contentType: "image/jpg",
      progressCallback(progress) {
        if (progress.loaded === progress.total) {
          setLoading(false);
        }
        //setLoading(progress);
      },
    })
      .then((response) => {
        setUserData({
          ...userData,
          photos: [
            ...userData.photos!,
            "https://myflick5b148c436f79489cb4ec3f71bd3b647a145327-dev.s3.us-east-2.amazonaws.com/public/" +
              response.key,
          ],
        });
        return response.key;
      })
      .catch((error) => {
        console.log(error);
        return error.response;
      });
  };

  const handleSaveChanges = async () => {
    try {
      await handleUpdateUser(dispatch, userData);
      navigation.goBack();
    } catch (error) {
      alert("Error updating user, please try again.");
    }
  };

  const clickedPhoto = () => {
    refRBSheet.current.open();
  };

  const handleImages = async () => {
    try {
      const result = await pickImage();
      refRBSheet.current.close();

      if (result?.cancelled) {
        return;
      } else {
        setLocalImages([...localImages, result!.uri]);
        const img = await fetchImageFromUri(result!.uri);
        const uploadUrl = await uploadImage(uuidv4(), img);
      }
    } catch (error) {
      console.log(error);
      alert("Upload failed");
    }
  };

  useEffect(() => {
    console.log("userData", userData);
  }, [userData]);

  useEffect(() => {
    (async () => {
      const cameraRollStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      if (
        cameraRollStatus.status !== "granted" ||
        cameraStatus.status !== "granted"
      ) {
        alert("Sorry, we need these permissions to make this work!");
      }
    })();
  }, []);

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
    });

    //console.log(result);
  };

  const handleAddInterest = () => {
    if (!interest) {
      alert("Please enter an interest");
      return;
    }

    setUserData({
      ...userData,
      interests: [...userData.interests!, interest],
    });
    setModalVisible(!modalVisible);
    setInterest("");
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  let newDate = date;

  const onChange = (event: any, selectedDate: any) => {
    newDate = selectedDate;
  };

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const setNewDate = () => {
    setShow(false);
    setDate(newDate);
  };

  const multiSliderValuesChange = (values: number[]) =>
    setMultiSliderValue(values);

  useEffect(() => {
    setUserData({ ...userData, age: multiSliderValue[0] });
  }, [multiSliderValue]);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={[styles.container]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            //alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                onChangeText={setInterest}
                value={interest}
                placeholder="Enter interest here"
                multiline={false}
                style={[styles.textInput, { color: Colors[colorScheme].text }]}
                autoCorrect={false}
              />
              <Pressable
                style={[styles.button1, { backgroundColor: themeColor }]}
                onPress={handleAddInterest}
              >
                <Text style={styles.textStyle}>Done</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.titleBar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MyProfile");
            }}
          >
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title1}>Edit Profile</Text>
          <TouchableOpacity onPress={handleSaveChanges}>
            <Text style={styles.saveButton}>Save</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.container, { paddingTop: 0 }]}>
            <View style={styles.photoLine}>
              <Text style={styles.sectionHeader}>Photos</Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent1}>
              <ScrollView horizontal={true}>
                <TouchableOpacity onPress={clickedPhoto}>
                  <View
                    style={[
                      styles.menuBox,
                      { backgroundColor: Colors[colorScheme].primary },
                    ]}
                  >
                    <Ionicons
                      name="add"
                      size={40}
                      color={themeColor}
                      style={styles.icon}
                    ></Ionicons>
                  </View>
                </TouchableOpacity>

                {localImages!.length > 0 ? (
                  <ScrollView>
                    <FlatList
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(data) => {
                        return data;
                      }}
                      data={userData.photos}
                      renderItem={(item) => {
                        return (
                          <Image
                            key={item.index}
                            source={{ uri: item.item }}
                            style={styles.imageSizing}
                          />
                        );
                      }}
                    />
                  </ScrollView>
                ) : null}
              </ScrollView>
            </View>
          </View>

          <View
            style={[
              styles.container2,
              { backgroundColor: Colors[colorScheme].primary },
            ]}
          >
            <Text style={styles.addName}>Name</Text>

            <TextInput
              style={[
                styles.inputName,
                { color: Colors[colorScheme].opposite },
              ]}
              onChangeText={(text) =>
                setUserData({ ...userData, firstName: text })
              }
              value={userData.firstName!}
            />
          </View>

          <View
            style={[
              styles.container2,
              { backgroundColor: Colors[colorScheme].primary },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "transparent",
              }}
            >
              <Text style={styles.addName}>Age</Text>

              {show && (
                <TouchableOpacity onPress={setNewDate}>
                  <Text style={styles.setNewDateOK}>OK</Text>
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity
              onPress={() => {
                show ? setShow(false) : setShow(true); //click once to open (edit) click again to close it (cancel edit)
              }}
            >
              <Text
                style={[
                  styles.inputName,
                  { color: Colors[colorScheme].opposite },
                ]}
              >
                {multiSliderValue[0]}
              </Text>
            </TouchableOpacity>
            <MultiSlider
              values={[multiSliderValue[0]]}
              sliderLength={370}
              onValuesChangeFinish={multiSliderValuesChange}
              min={18}
              max={40}
              markerContainerStyle={{}}
              allowOverlap={false}
              minMarkerOverlapDistance={20}
              selectedStyle={{ backgroundColor: themeColor }}
              unselectedStyle={{ backgroundColor: "white" }}
              trackStyle={{ height: 3.5 }}
              containerStyle={{ marginLeft: 20, marginRight: 20 }}
            />
          </View>

          <View
            style={[
              styles.container2,
              { backgroundColor: Colors[colorScheme].primary },
            ]}
          >
            <Text style={styles.addName}>Pronouns</Text>
            <TextInput
              style={[
                styles.inputName,
                { color: Colors[colorScheme].opposite },
              ]}
              onChangeText={(text) => {
                setUserData({ ...userData, pronouns: text });
              }}
              value={userData.pronouns!}
            />
          </View>

          <View
            style={[
              styles.container2,
              { backgroundColor: Colors[colorScheme].primary },
            ]}
          >
            <Text style={styles.addName}>Location</Text>
            <TextInput
              style={[
                styles.inputName,
                { color: Colors[colorScheme].opposite },
              ]}
              onChangeText={(text) =>
                setUserData({ ...userData, location: text })
              }
              value={userData.location!}
            />
          </View>

          <View
            style={[
              styles.container2,
              { backgroundColor: Colors[colorScheme].primary },
            ]}
          >
            <Text style={styles.addName}>Bio</Text>
            <TextInput
              style={[
                styles.inputName,
                { color: Colors[colorScheme].opposite },
              ]}
              onChangeText={(text) => setUserData({ ...userData, bio: text })}
              value={userData.bio!}
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.sectionHeader}>Interests</Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: 10,
              }}
            >
              {userData.interests!.map((item, index) => {
                return (
                  <Chip
                    key={index}
                    mode="flat"
                    textStyle={{
                      color: Colors[colorScheme].secondary,
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                    onPress={() => {}}
                    style={{
                      marginLeft: 15,
                      borderColor: themeColor,
                      backgroundColor: themeColor,
                      borderRadius: 30,
                    }}
                  >
                    {item}
                  </Chip>
                );
              })}
              <Chip
                mode="flat"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={[styles.chipStyle, { backgroundColor: themeColor }]}
              >
                <Ionicons
                  name="add"
                  size={20}
                  color={Colors[colorScheme].secondary}
                ></Ionicons>
              </Chip>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <RBSheet
              ref={refRBSheet}
              animationType={"slide"}
              closeOnDragDown={true}
              closeOnPressMask={true}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent",
                },
                draggableIcon: {
                  backgroundColor: "grey",
                },
                container: {
                  backgroundColor: Colors[colorScheme].primary,
                  borderRadius: 20,
                },
              }}
            >
              <Text style={styles.headerText}>Upload Photo</Text>
              <Text style={styles.headerSubText}>
                Add Images for Others to See
              </Text>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  width: "100%",
                  opacity: 0.2,
                }}
              ></View>
              <TouchableOpacity
                onPress={takePhoto}
                style={styles.appButtonContainer}
              >
                <Text style={styles.appButtonText}>Take Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleImages}
                style={styles.appButtonContainer}
              >
                <Text style={styles.appButtonText}>Choose from Library</Text>
              </TouchableOpacity>
            </RBSheet>

            <RBSheet
              ref={refRBSheet2}
              animationType={"slide"}
              closeOnDragDown={true}
              closeOnPressMask={true}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent",
                },
                draggableIcon: {
                  backgroundColor: "grey",
                },
                container: {
                  backgroundColor: Colors[colorScheme].primary,
                  borderRadius: 20,
                },
              }}
            >
              <Text style={styles.headerText}>Select a Film</Text>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  width: "100%",
                  opacity: 0.2,
                  marginBottom: 5,
                }}
              ></View>
              <SearchBar
                placeholder="Search here"
                //onPress={() => alert("onPress")}
                onChangeText={(text) => console.log(text)}
              />
            </RBSheet>

            <RBSheet
              ref={refRBSheet3}
              animationType={"slide"}
              closeOnDragDown={true}
              closeOnPressMask={true}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent",
                },
                draggableIcon: {
                  backgroundColor: "grey",
                },
                container: {
                  backgroundColor: Colors[colorScheme].primary,
                  borderRadius: 20,
                },
              }}
            >
              <Text style={styles.headerText}>Basic Info</Text>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  width: "100%",
                  opacity: 0.2,
                  marginBottom: 5,
                }}
              ></View>

              <SearchBar
                placeholder="Search here"
                //onPress={() => alert("onPress")}
                onChangeText={(text) => console.log(text)}
              />
            </RBSheet>

            <RBSheet
              ref={refRBSheet4}
              animationType={"slide"}
              closeOnDragDown={true}
              closeOnPressMask={true}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent",
                },
                draggableIcon: {
                  backgroundColor: "grey",
                },
                container: {
                  backgroundColor: Colors[colorScheme].primary,
                  borderRadius: 20,
                },
              }}
            >
              <Text style={styles.headerText}>Hobbies & Interests</Text>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  width: "100%",
                  opacity: 0.2,
                  marginBottom: 5,
                }}
              ></View>

              <SearchBar
                placeholder="Search here"
                //onPress={() => alert("onPress")}
                onChangeText={(text) => console.log(text)}
              />
            </RBSheet>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default MySettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginRight: 12
    //marginTop:10,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
    marginHorizontal: 10,
    marginBottom: 15,
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
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 25,
  },
  body: {
    flex: 1,
    padding: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  bodyContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bodyContent1: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  menuBox: {
    //backgroundColor: "#d0d0d0",
    width: 100,
    height: 140,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  icon: {
    width: 35,
    height: 50,
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  icon1: {
    width: 55,
    height: 65,
    fontWeight: "bold",
  },
  chipStyle: {
    marginTop: 10,
    marginLeft: 10,
    borderColor: themeColor,
    alignSelf: "center",
  },
  containerEA: {
    alignItems: "center",
    marginTop: -65,
  },
  photoLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: themeColor,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    //marginBottom: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  headerText: {
    fontSize: 25,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerSubText: {
    textAlign: "center",
    opacity: 0.6,
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 5,
  },
  imageSizing: {
    width: 100,
    height: 140,
    borderRadius: 8,
    marginLeft: 5,
    flexDirection: "row",
  },
  container2: {
    marginLeft: 20,
    marginRight: 11,
    marginTop: 15,
    borderRadius: 10,
    paddingVertical: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 250,
    height: 200,
    justifyContent: "center",
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  addName: {
    fontSize: 17,
    color: themeColor,
    fontWeight: "bold",
    marginLeft: 10,
  },
  inputName: {
    height: 40,
    padding: 10,
    fontSize: 17,
    opacity: 0.6,
    color: "grey",
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: "black",
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  itemStyle: {
    padding: 10,
  },
  setNewDateOK: {
    color: themeColor,
    marginRight: 30,
    fontSize: 20,
  },

  fairSpacing: {
    paddingTop: 10,
  },
});

const basicInfo = [
  "Single",
  "Spiritual",
  "Voter",
  "Libra",
  "Vaccinated",
  "Mother",
  "Dog Lover",
  "ADD +",
];

const myInterests = [
  "Photography",
  "Modeling",
  "Hiking",
  "Foodie",
  "Reading",
  "Wine",
  "Baking",
  "ADD +",
];
