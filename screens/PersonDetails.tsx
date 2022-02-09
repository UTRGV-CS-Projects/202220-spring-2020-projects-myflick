import { StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView, Text, View } from "../components/Themed";
import { People } from "../db/db";
import { Chip } from "react-native-paper";
import { themeColor } from "../constants/Colors";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";

const PersonDetails = ({
  navigation,
}: RootStackScreenProps<"PersonDetails">) => {
  const person = People[0];

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.backBubbleContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={styles.backBubble}>
              <EvilIcons
                name="chevron-left"
                size={50}
                color={themeColor}
                style={styles.back}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.profilePicture}
          resizeMode="cover"
          source={{ uri: person.profileImage }}
        ></Image>
        <View style={styles.bubbleContainer}>
          <TouchableOpacity>
            <View style={styles.bubble}>
              <EvilIcons
                name="close"
                size={45}
                color={themeColor}
                style={styles.cross}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bubble}>
              <Ionicons
                name="heart"
                size={45}
                color={themeColor}
                style={styles.heart}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View>
          <Text style={styles.name}>
            {person.firstName} {person.lastName}, {person.age}
          </Text>
          <Text style={styles.location}>
            {person.city} {person.state}
          </Text>
        </View>

        <View>
          <Text style={styles.header}>About me</Text>

          <Text style={styles.bio}>{person.bio}</Text>
        </View>

        <View>
          <Text style={styles.header}>Interests</Text>
          <View style={styles.chipsContainer}>
            {person.interests?.map((interest, index) => {
              return (
                <Chip
                  style={styles.chip}
                  key={index}
                  textStyle={styles.chipText}
                  onPress={() => {}}
                  mode="flat"
                >
                  {interest}
                </Chip>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 0.5,
    position: "relative",
    zIndex: 1,
  },
  back: {
    paddingLeft: 3,
    paddingTop: 7,
  },
  backBubbleContainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: "transparent",
    top: 20,
    paddingLeft: 20,
    zIndex: 2,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bubbleContainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: "transparent",
    bottom: -30,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bubble: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 40,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  backBubble: {
    backgroundColor: "white",
    width: 55,
    height: 55,
    borderRadius: 40,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  iconContainer: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  cross: {
    paddingLeft: 18,
    paddingTop: 22,
  },
  heart: { paddingLeft: 18, paddingTop: 18 },
  lowerContainer: {
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  profilePicture: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
  },
  location: {
    fontSize: 18,
    fontWeight: "500",
  },
  chip: { marginRight: 10, backgroundColor: themeColor },
  chipText: {
    fontWeight: "bold",
    color: "white",
  },
  bio: {
    fontSize: 16,
  },
  header: {
    fontSize: 21,
    fontWeight: "bold",
  },
  chipsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
});
