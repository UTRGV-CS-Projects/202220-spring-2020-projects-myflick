import { FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import React, { useEffect, useRef } from "react";
import { People, PeopleDetailsType } from "../../db/db";
import { useScrollToTop } from "@react-navigation/native";

const ChatList = () => {
  const ref = React.useRef(null);
  useScrollToTop(ref);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={People}
        horizontal={true}
        contentContainerStyle={styles.newMatchesListContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: PeopleDetailsType) => item.id}
        renderItem={({ item }: { item: PeopleDetailsType }) => {
          return (
            <TouchableOpacity>
              <Image
                style={styles.profile}
                source={{ uri: item.profileImage }}
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
