import { FlatList, Image, StyleSheet, ListRenderItem } from "react-native";
import { View, Text } from "../Themed";
import React from "react";
import { NewMatches } from "../../db/db";
import { NewMatchesType } from "../../db/db";
const ChatList = () => {
  return (
    <View style={styles.newMatchesList}>
      <FlatList
        data={NewMatches}
        horizontal={true}
        keyExtractor={(item: NewMatchesType) => item.id}
        renderItem={({ item }: { item: NewMatchesType }) => {
          return (
            <Image style={styles.profile} source={{ uri: item.image }}></Image>
          );
        }}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  newMatchesList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },

  profile: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
