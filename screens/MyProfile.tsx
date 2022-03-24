import React, { useMemo, useRef, useCallback } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SectionList,
  Button,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import { themeColor, lightThemeColor } from "../constants/Colors";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { Chip } from "react-native-paper";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import "react-native-gesture-handler";
import { handleLogOut } from "../store/actions/userActions";
import { AuthContext } from "../store/AuthContext";
import RBSheet from "react-native-raw-bottom-sheet";
import { MyProfileType } from "../db/db";
import { v4 as uuidv4 } from "uuid";

const ListItem = ({ item }: { item: any }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={{
            uri: item,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
          key={uuidv4()}
        />
      </TouchableOpacity>
    </View>
  );
};

const MyProfile = ({ navigation }: RootStackScreenProps<"MyProfile">) => {
  const colorScheme = useColorScheme();

  const { user, dispatch } = React.useContext(AuthContext);
  const MyProfileSections: MyProfileType[] = [
    {
      title: "Favorites",
      horizontal: true,
      data: [
        "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg",

        "https://images.squarespace-cdn.com/content/v1/5702ab9d746fb9634796c9f9/1570206011880-G7G59JFOV23504NCZMIA/MIDSTHD-04_PayoffKATrimmed_RGB-FIN_R13.jpg",

        "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",

        "https://www.joblo.com/wp-content/uploads/2021/04/luca-disney-pixar-trailer-poster-2021-1.jpg",

        "https://penji.co/wp-content/uploads/2019/09/The_Godfather-iconic-movie-posters.jpg",

        "https://www.filmjabber.com/movie-poster-thumbs/clifford-the-big-read-dog-movie-poster-6695.jpg",

        "https://i5.walmartimages.com/asr/149d1fd0-2254-421f-89d8-fe8d0f879b2d.45ce4ae056c8c0b3b1fce677f437a252.jpeg",

        "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg",

        "https://static01.nyt.com/images/2017/09/15/arts/24movie-posters8/24movie-posters8-superJumbo.jpg",
      ],
    },
    {
      title: "My Photos",
      horizontal: true,
      data: user.photos,
    },
  ];

  /* const handleSettingsMenu = () => {
    navigation.navigate("SettingsMenu");
  }; */
  const handleMyDiscoverySettings = () => {
    navigation.navigate("MyDiscoverySettings");
  };
  const handleMySettings = () => {
    navigation.navigate("MySettings");
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const refRBSheet = useRef<any | null>(null);

  return (
    // <BottomSheetModalProvider>
    <SafeAreaView style={styles.container}>
      {user.loggedIn ? (
        <View>
          <View style={styles.titleBar}>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.open();
              }}
            >
              <Ionicons
                name="settings-outline"
                size={30}
                color={Colors[colorScheme].opposite}
              ></Ionicons>
            </TouchableOpacity>

            <Text style={styles.title}>Profile</Text>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="share-outline"
                size={30}
                color={Colors[colorScheme].opposite}
              ></Ionicons>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignSelf: "center" }}>
              <View style={styles.profileImage}>
                <Image
                  style={styles.image}
                  source={{
                    uri: user.picture,
                  }}
                ></Image>
              </View>
            </View>

            <View style={styles.innerContainer}>
              <View style={styles.nameAndPronouns}>
                <Text style={styles.name}>{user.firstName}</Text>
                <Text style={styles.name}>24</Text>
              </View>

              <View>
                <Text style={styles.pronouns}>{user.pronouns}</Text>
              </View>

              <View style={styles.location}>
                <Ionicons
                  name="location-outline"
                  size={15}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
                <Text>{user.location}</Text>
              </View>

              <View>
                <Text style={styles.bio}>{user.bio}</Text>
              </View>
            </View>

            <View style={styles.container}>
              <SectionList
                contentContainerStyle={styles.sectionList}
                stickySectionHeadersEnabled={false}
                sections={MyProfileSections}
                keyExtractor={(index) => index}
                initialNumToRender={5}
                renderSectionHeader={({ section }) => (
                  <View>
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                    {section.horizontal ? (
                      <FlatList
                        horizontal
                        keyExtractor={(index) => index}
                        data={section.data}
                        renderItem={({ item }) => <ListItem item={item} />}
                        showsHorizontalScrollIndicator={false}
                      />
                    ) : null}
                  </View>
                )}
                renderItem={({ item, section }) => {
                  if (section.horizontal) {
                    return null;
                  }
                  return <ListItem item={item} />;
                }}
              />
            </View>

            <View style={styles.container}>
              <Text style={styles.sectionHeader2}>My Interests</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {user.interests.map((item, index) => {
                  return (
                    <View key={index} style={{ margin: 5 }}>
                      <Chip
                        mode="outlined"
                        textStyle={{
                          color: "white",
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                        style={{
                          backgroundColor: themeColor,
                          //borderColor: "white",
                        }}
                      >
                        {item}
                      </Chip>
                    </View>
                  );
                })}
              </View>
            </View>

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
              <Text style={styles.headerText}>Settings</Text>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  width: "100%",
                  opacity: 0.2,
                }}
              ></View>

              {/* <View style={styles.rows}> */}
              <TouchableOpacity
                onPress={() => {
                  handleMySettings();
                  refRBSheet.current.close();
                }}
                style={styles.clickRow}
              >
                <Ionicons
                  name="person-circle-outline"
                  size={35}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
                <Text style={styles.optionsText}>Edit Profile</Text>
                <Ionicons
                  name="chevron-forward"
                  size={35}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
              </TouchableOpacity>
              {/* </View> */}

              {/* <View style={styles.rows}> */}
              <TouchableOpacity
                onPress={() => {
                  handleMyDiscoverySettings();
                  refRBSheet.current.close();
                }}
                style={styles.clickRow}
              >
                <Ionicons
                  name="person-add-outline"
                  size={35}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
                <Text style={styles.optionsText}>Edit Discovery</Text>
                <Ionicons
                  name="chevron-forward"
                  size={35}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
              </TouchableOpacity>
              {/* </View> */}

              {/* <View style={styles.rows}> */}
              <TouchableOpacity
                onPress={() => {
                  refRBSheet.current.close();
                  handleLogOut(dispatch);
                  navigation.navigate("Introduction");
                }}
                style={styles.clickRow}
              >
                <Ionicons
                  name="log-out-outline"
                  size={35}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
                <Text style={styles.logoutText}>Logout</Text>
                <Ionicons
                  name="chevron-forward"
                  size={35}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
              </TouchableOpacity>
              {/* </View> */}
            </RBSheet>
          </ScrollView>
        </View>
      ) : (
        <ActivityIndicator
          size="large"
          color={themeColor}
          style={{
            flex: 1,
          }}
        />
      )}
    </SafeAreaView>
    // </BottomSheetModalProvider>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
    marginHorizontal: 16,
    marginBottom: 10,
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
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    position: "absolute",
    left: 78,
  },
  bio: {
    textAlign: "center",
    color: themeColor,
    fontSize: 15,
  },
  photosContainer: {
    flex: 1,
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  sectionHeader2: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  item: {
    marginHorizontal: 5,
  },
  itemPhoto: {
    width: 84,
    height: 128,
    borderRadius: 8,
  },
  sectionList: {
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  pronouns: {
    fontSize: 15,
    opacity: 0.7,
  },
  nameAndPronouns: {
    flexDirection: "row",
    justifyContent: "center",
  },
  location: {
    flexDirection: "row",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 25,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  optionsText: {
    //color: '#4a4a4a',
    fontSize: 20,
    paddingLeft: 20,
  },
  logoutText: {
    color: "red",
    fontSize: 20,
    paddingLeft: 20,
  },
  /*  rows: {
    paddingTop: 15,
    paddingLeft: 10,
    backgroundColor: "#202020"
  }, */
  clickRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    marginTop: 10,
  },
});

const myInterests = [
  "Photography",
  "Film Making",
  "Hiking",
  "Foodie",
  "Reading",
  "Wine",
  "Baking",
];
const basicInfo = [
  "5'5''",
  "Single",
  "Spiritual",
  "Voter",
  "Libra",
  "Vaccinated",
  "Mother",
  "Dog Lover",
];
