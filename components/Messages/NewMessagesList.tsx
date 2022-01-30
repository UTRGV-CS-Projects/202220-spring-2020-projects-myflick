import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "../Themed";
import { NewMatches, PeopleDetailsType } from "../../db/db";
import Message from "./Message";

const NewMessagesList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={NewMatches}
        contentContainerStyle={styles.newMatchesListContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: PeopleDetailsType) => item.id}
        renderItem={({ item }: { item: PeopleDetailsType }) => {
          return <Message item={item} />;
        }}
      />
    </View>
  );
};

export default NewMessagesList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingTop: 15,
  },
  newMatchesListContainer: { flex: 1, paddingHorizontal: 10 },
});
