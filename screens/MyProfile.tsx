import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
  SectionList,
  Alert,
  VirtualizedList,
} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import { themeColor, lightThemeColor } from "../constants/Colors";
import { MyProfileSections } from "../db/db";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { Chip } from "react-native-paper";

const ListItem = ({ item }: { item: any }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
          key={item.id}
        />
      </TouchableOpacity>
    </View>
  );
};

const MyProfile = ({ navigation }: RootStackScreenProps<"MyProfile">) => {
  const [timesPressed, setTimesPressed] = useState(0);
  const colorScheme = useColorScheme();

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => {
            
          }}>
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

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              style={styles.image}
              source={{
                uri: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0ODI5MTZ8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
              }}
            ></Image>
          </View>
        </View>

        <View>
          <Text style={styles.name}>Ashley Nicole</Text>
          <Text style={styles.bio}>Quantico, VA | 23 | Film Maker</Text>
        </View>

        <View style={styles.container}>
          <SectionList
            contentContainerStyle={styles.sectionList}
            stickySectionHeadersEnabled={false}
            sections={MyProfileSections}
            keyExtractor={(item, index) => item.key + index}
            initialNumToRender={5}
            renderSectionHeader={({ section }) => (
              <View>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    keyExtractor={(item:any, index) => item.key + index}
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
          <Text style={styles.sectionHeader2}>Basic Info</Text>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            {basicInfo.map((item, index) => {
              return (
                <View key={index} style={{ margin: 5 }}>
                  <Chip
                    mode="outlined"
                    textStyle={{ color: "white", fontSize: 15 }}
                    style={{
                      backgroundColor: themeColor,
                      borderColor: "white",
                    }}
                  >
                    {item}
                  </Chip>
                </View>
              );
            })}
          </View>

          <Text style={styles.sectionHeader2}>My Interests</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {myInterests.map((item, index) => {
              return (
                <View key={index} style={{ margin: 5 }}>
                  <Chip
                    mode="outlined"
                    textStyle={{ color: "white", fontSize: 15 }}
                    style={{
                      backgroundColor: themeColor,
                      borderColor: "white",
                    }}
                  >
                    {item}
                  </Chip>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
    marginHorizontal: 16,
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
  //add: {
    //position: "absolute",
   // bottom: 0,
    //right: 0,
   //width: 60,
   // height: 60,
   // borderRadius: 30,
    //alignItems: "center",
    //justifyContent: "center",
    //backgroundColor: "transparent",
  //},
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
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
    marginTop: 10,
    textAlign: "center",
    color: themeColor,
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
