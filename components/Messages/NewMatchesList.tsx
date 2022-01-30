import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import React from "react";
import { NewMatches, PeopleDetailsType } from "../../db/db";

const ChatList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={NewMatches}
        horizontal={true}
        contentContainerStyle={styles.newMatchesListContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: PeopleDetailsType) => item.id}
        renderItem={({ item }: { item: PeopleDetailsType }) => {
          return (
            <TouchableOpacity>
              <Image
                style={styles.profile}
                source={{ uri: item.image }}
              ></Image>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  newMatchesListContainer: { paddingHorizontal: 10 },

  profile: {
    width: 57,
    height: 57,
    borderRadius: 50,
    margin: 10,
  },
});
