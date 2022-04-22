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
  TextInput,
  Modal,
  Pressable,
  Button,
  Alert,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import Colors, { themeColor, lightThemeColor } from "../constants/Colors";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import { Avatar, Icon, Input } from "react-native-elements";
import SearchBar from "react-native-dynamic-search-bar";
import { Chip } from "react-native-paper";
import { UserActionTypes } from "../store/actions/actionTypes";
import { AuthContext } from "../store/AuthContext";
import { handleProfileComplete } from "../store/actions/userActions";
import { ProfileCompleteType } from "../types";
import * as ImagePicker from "expo-image-picker";
import LottieView from "lottie-react-native";
import { color } from "react-native-reanimated";
import { createPicture } from "../src/graphql/mutations";
import awsExports from "../src/aws-exports";
import { Storage, API, graphqlOperation, Auth } from "aws-amplify";
import { CreatePictureInput } from "../src/API";
import { v4 as uuidv4 } from "uuid";
import RBSheet from "react-native-raw-bottom-sheet";
import axios from "axios";
import { getMoviePoster, searchMovie } from "../apis/movies";
import Card from "../components/MovieCard";
import PropTypes from "prop-types";
import * as Location from "expo-location";

const placeHolderImage = require("../assets/images/placeholder.png");
const propTypes = {
  item: PropTypes.object,
};
const Personalize = ({
  navigation,
  route,
}: RootStackScreenProps<"Personalize">) => {
  const colorScheme = useColorScheme();
  const refRBSheet = useRef<any | null>(null);
  const refRBSheet2 = useRef<any | null>(null);
  const { user, dispatch } = useContext(AuthContext);
  const [authCode, setAuthCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setModalVisible2] = useState(false);
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

  const toggleModal = () => {
    setModalVisible2(!isModalVisible);
  };
  const [images, setImages] = useState<ImagePicker.ImageInfo[]>([]);
  const [imageStatus, requestPermission] =
    ImagePicker.useMediaLibraryPermissions();

  const [interest, setInterest] = useState("");
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState("");

  const [completeProfile, setCompleteProfile] = useState<ProfileCompleteType>({
    email: route.params!.email,
    password: route.params!.password,
    interests: [],
    firstName: "",
    photos: [],
    favorites: [],
    bio: "",
    age: 0,
    location: "",
    pronouns: "",
    picture: "",
  });

  const [posterArray, setPosterArray] = useState([
    "https://i.ytimg.com/vi/T9qcT3RHNzg/hqdefault.jpg",
  ]);

  useEffect(() => {
    const convertIdtoPosterPath = async () => {
      let posterPath = [];
      for (let i = 0; i < completeProfile.favorites.length; ++i) {
        posterPath.push(
          String(await getMoviePoster(completeProfile.favorites[i]))
        );
      }
      setPosterArray(posterPath);
    };

    convertIdtoPosterPath();
  }, [completeProfile.favorites]);

  useEffect(() => {
    if (loading) {
      console.log("loading...");
    } else {
      console.log("not loading");
    }
  }, [loading]);

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

  const addImageToDB = async (image: CreatePictureInput) => {
    try {
      await API.graphql(graphqlOperation(createPicture, { input: image }));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImageFromUri = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };
  const handleImages = async () => {
    try {
      const result = await pickImage();
      if (result?.cancelled) {
        alert("Upload cancelled");
        return;
      } else {
        setLoading(true);
        const img = await fetchImageFromUri(result!.uri);
        const uploadUrl = await uploadImage(uuidv4(), img);
        downloadImages(uploadUrl);
      }
    } catch (error) {
      console.log(error);
      alert("Upload failed");
    }
  };

  const handleProfilePicture = async () => {
    try {
      const result = await pickImage();
      if (result?.cancelled) {
        //alert("Upload cancelled");
        return;
      } else {
        setLoading(true);
        const img = await fetchImageFromUri(result!.uri);
        const uploadUrl = await uploadImage(uuidv4(), img);
        downloadImageProfilePicture(uploadUrl);
      }
    } catch (error) {
      console.log(error);
      alert("Upload failed");
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
        return response.key;
      })
      .catch((error) => {
        console.log(error);
        return error.response;
      });
  };

  const downloadImageProfilePicture = (uri: string) => {
    //console.log("URI_>>>>>>>>>>>>>" + Storage.get(uri));

    Storage.get(uri)
      .then((result) => {
        setCompleteProfile({
          ...completeProfile,
          picture:
            "https://myflick5b148c436f79489cb4ec3f71bd3b647a145327-dev.s3.us-east-2.amazonaws.com/public/" +
            uri,
        });

        //console.log("RESULT>>>>>>>>>>>>>" + result);
      })
      .catch((err) => console.log(err));
  };

  const downloadImages = (uri: string) => {
    Storage.get(uri)
      .then((result) =>
        setCompleteProfile({
          ...completeProfile,
          photos: [
            ...completeProfile.photos,
            "https://myflick5b148c436f79489cb4ec3f71bd3b647a145327-dev.s3.us-east-2.amazonaws.com/public/" +
              uri,
          ],
        })
      )
      .catch((err) => console.log(err));
  };

  const handleAddInterest = () => {
    if (!interest) {
      alert("Please enter an interest");
      return;
    }

    setCompleteProfile({
      ...completeProfile,
      interests: [...completeProfile.interests, interest],
    });
    setModalVisible(!modalVisible);
    setInterest("");
  };

  const handleSaveChanges = async () => {
    handleProfileComplete(dispatch, completeProfile)
      .then((response) => {
        checkRef.current?.play();
      })
      .catch(() => {
        alert("error saving profile");
      });

    console.log(completeProfile);
  };

  useEffect(() => {
    //console.log(authCode);
  }, [authCode]);

  useEffect(() => {
    //console.log(completeProfile);
  }, [completeProfile]);

  useEffect(() => {
    handleLocation();
  }, []);

  const handleLocation = async () => {
    try {
      await CheckIfLocationEnabled();
      await GetCurrentLocation();
    } catch (error) {
      alert("Error handling location services");
    }
  };

  const GetCurrentLocation = async () => {
    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.city}, ${item.region}`;

        setCompleteProfile({ ...completeProfile, location: address });

        if (address.length > 0) {
          setTimeout(() => {
            console.log("Location Retrieved");
          }, 2000);
        }
      }
    }
  };

  const CheckIfLocationEnabled = async () => {
    try {
      let enabled = await Location.hasServicesEnabledAsync();

      if (!enabled) {
        let { status } = await Location.requestBackgroundPermissionsAsync();

        if (status !== "granted") {
          Alert.alert(
            "Permission not granted",
            "Allow the app to use location service.",
            [{ text: "OK" }],
            { cancelable: false }
          );
        }
      } else {
        setLocationServiceEnabled(enabled);
      }
    } catch (error) {
      alert("Error checking location services");
    }
  };

  const checkRef = useRef<LottieView>(null);

  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState<any | null>();
  const [error, setError] = useState(false);

  const handleCallBack = async (data: any) => {
    console.log("DATA");

    setCompleteProfile({
      ...completeProfile,
      favorites: [...completeProfile.favorites, data],
    });
    console.log(data);
  };

  const onSubmit = (query: any) => {
    searchMovie(query)
      .then((data) => {
        setSearchResults(data);
        //console.log(data + "EYELINER");
      })
      .catch(() => {
        setError(true);
      });
    //console.log(query);
  };

  const [stateMovie, setStateMovie] = useState(false);

  const handleFavorites = async () => {
    setLoading(true);
  };

  const downloadMovieImage = (uri: string) => {
    Storage.get(uri)
      .then((result) => {
        setCompleteProfile({
          ...completeProfile,
          favorites: [
            ...completeProfile.favorites,
            "https://image.tmdb.org/t/p/w500" + uri,
          ],
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
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
              source={
                completeProfile.picture
                  ? { uri: completeProfile.picture }
                  : require("../assets/images/defaultProfile.png")
              }
            ></Image>
          </View>
          <View style={styles.add}>
            <TouchableOpacity onPress={handleProfilePicture}>
              <Ionicons
                name="add-circle-sharp"
                size={30}
                color={themeColor}
                style={{ marginTop: 30, marginLeft: 32 }}
              ></Ionicons>
            </TouchableOpacity>
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
            style={[styles.inputName, { color: Colors[colorScheme].opposite }]}
            placeholder="Add your name"
            value={completeProfile.firstName}
            onChangeText={(value) => {
              setCompleteProfile({ ...completeProfile, firstName: value });
            }}
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
            style={[styles.inputName, { color: Colors[colorScheme].opposite }]}
            placeholder="Add your pronouns"
            value={completeProfile.pronouns}
            onChangeText={(value) => {
              setCompleteProfile({ ...completeProfile, pronouns: value });
            }}
          />
        </View>

        <View
          style={[
            styles.container2,
            { backgroundColor: Colors[colorScheme].primary },
          ]}
        >
          <Text style={styles.addName}>Age</Text>
          <TextInput
            style={[styles.inputName, { color: Colors[colorScheme].opposite }]}
            placeholder="Add your age"
            value={
              completeProfile.age == 0 ? "" : completeProfile.age.toString()
            }
            onChangeText={(value) => {
              setCompleteProfile({
                ...completeProfile,
                age: parseInt(value),
              });
            }}
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
            style={[styles.inputName, { color: Colors[colorScheme].opposite }]}
            placeholder="Add your bio"
            value={completeProfile.bio}
            onChangeText={(value) => {
              setCompleteProfile({ ...completeProfile, bio: value });
            }}
          />
        </View>

        <View
          style={[
            styles.container2,
            { backgroundColor: Colors[colorScheme].primary },
          ]}
        >
          <Text style={styles.addName}>Location</Text>

          <Text
            style={[styles.inputName, { color: Colors[colorScheme].opposite }]}
          >
            {completeProfile.location
              ? completeProfile.location
              : "Retrieving..."}
          </Text>
        </View>

        <View></View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={styles.sectionHeader}>Photos</Text>
          <View style={styles.bodyContent}>
            <ScrollView horizontal nestedScrollEnabled={true}>
              <TouchableOpacity onPress={handleImages}>
                <View
                  style={[
                    styles.menuBox,
                    { backgroundColor: Colors[colorScheme].primary },
                  ]}
                >
                  <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}
                  ></Ionicons>
                </View>
              </TouchableOpacity>

              {completeProfile.photos.length > 0 ? (
                <ScrollView>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{}}
                    keyExtractor={(data) => {
                      return data;
                    }}
                    data={completeProfile.photos}
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

        <Text style={styles.sectionHeader}>Favorite Movies</Text>
        <View style={styles.bodyContent}>
          <ScrollView horizontal nestedScrollEnabled={true}>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.open();
              }}
            >
              <View
                style={[
                  styles.menuBox,
                  { backgroundColor: Colors[colorScheme].primary },
                ]}
              >
                <Ionicons
                  name="add"
                  size={60}
                  color={themeColor}
                  style={styles.icon}
                ></Ionicons>
              </View>
            </TouchableOpacity>

            {posterArray.length > 0 ? (
              <ScrollView>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{}}
                  keyExtractor={(data) => {
                    return data;
                  }}
                  data={posterArray}
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

        <View>
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
                height: "100%",
              },
            }}
          >
            <Text style={styles.headerText}>Select a Movie</Text>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 2,
                width: "100%",
                opacity: 0.2,
                marginBottom: 5,
              }}
            ></View>
            <SearchBar
              value={text}
              placeholder="Search Movies"
              onChangeText={setText}
              onSubmitEditing={() => {
                onSubmit(text);
              }}
            />

            <View
              style={[
                styles.searchItems,
                { backgroundColor: Colors[colorScheme].primary },
              ]}
            >
              {searchResults && searchResults.length > 0 && (
                <FlatList
                  showsVerticalScrollIndicator={false}
                  numColumns={3}
                  data={searchResults}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <Card item={item} parentCallBack={handleCallBack} />
                  )}
                />
              )}
            </View>
          </RBSheet>
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
            {completeProfile.interests?.map((item, index) => {
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
                  style={[
                    styles.chipStyle,
                    { backgroundColor: Colors[colorScheme].primary },
                  ]}
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
              style={[
                styles.chipStyle,
                { backgroundColor: Colors[colorScheme].primary },
              ]}
            >
              <Ionicons name="add" size={20} color={themeColor}></Ionicons>
            </Chip>
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
Card.propTypes = propTypes;
export default Personalize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop:10,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#ecf0f1",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
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
    flex: 1,
  },
  menuBox: {
    backgroundColor: "#D3D3D3",
    width: 100,
    height: 140,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
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
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    margin: 12,
    padding: 10,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container2: {
    marginLeft: 11,
    marginRight: 11,
    marginTop: 15,
    borderRadius: 10,
    paddingVertical: 15,
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
  imageSizing: {
    width: 100,
    height: 140,
    borderRadius: 8,
    marginLeft: 10,
    flexDirection: "row",
  },
  imageSizing2: {
    width: 100,
    height: 140,
    borderRadius: 8,
    marginLeft: 10,

    marginTop: 10,
  },
  chipStyle: {
    marginTop: 10,
    marginLeft: 10,
    borderColor: themeColor,
    alignSelf: "center",
  },
  headerText: {
    fontSize: 25,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  results: {
    flex: 1,
    marginTop: 10,
  },
  result: {
    flex: 1,
    width: "100%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    flexWrap: "wrap",
    paddingLeft: 10,
    paddingTop: 10,
  },
  heading2: {
    fontSize: 18,
    //flexWrap: "wrap",
    paddingLeft: 10,
    paddingTop: 10,
  },
  input: {
    borderRadius: 15,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container23: {
    padding: 10,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  form: {
    flexBasis: "auto",
    flexGrow: 1,
  },
  searchItems: {
    padding: 5,
    color: themeColor,
  },
  container4: {
    padding: 5,
    alignItems: "center",
    height: 180,
    marginLeft: 10,
  },
  image4: {
    height: 150,
    width: 110,
    borderRadius: 10,
  },
  movieName: {
    position: "absolute",
    width: "80%",
    textAlign: "center",
    top: 30,
    color: "black",
  },
  movieName2: {
    color: "white",
  },
  favourite: {
    textAlign: "center",
    width: 28,
    top: 4,
    right: 0,
    position: "absolute",
    marginRight: 10,
    opacity: 0.9,
    borderRadius: 5,
    zIndex: 1000,
  },
});
function item(item: any) {
  throw new Error("Function not implemented.");
}
