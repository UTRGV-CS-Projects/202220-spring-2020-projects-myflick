import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "../Themed";
import { People, PeopleDetailsType } from "../../db/db";
import Message from "./Message";
import { useScrollToTop } from "@react-navigation/native";

const NewMessagesList = () => {
  const ref = React.useRef(null);
  useScrollToTop(ref);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={People}
        contentContainerStyle={styles.newMatchesListContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
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
  newMatchesListContainer: { paddingHorizontal: 10 },
});
