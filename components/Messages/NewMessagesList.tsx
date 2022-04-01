import { FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text } from "../Themed";
import { People, PeopleDetailsType } from "../../db/db";
import Message from "./Message";
import { useScrollToTop } from "@react-navigation/native";
import { fetchUserConversations } from "../../apis/messages";
import { AuthContext } from "../../store/AuthContext";
import { UserConversations } from "../../src/API";
import { MessageUser } from "../../types";

interface NewMessagesListProps {
  navigationProp: any;
  users: MessageUser[];
}
const NewMessagesList = ({ navigationProp, users }: NewMessagesListProps) => {
  const ref = useRef(null);
  useScrollToTop(ref);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={users}
        contentContainerStyle={styles.newMatchesListContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: MessageUser) => item.cognitoId}
        renderItem={({ item }: { item: MessageUser }) => {
          return <Message item={item} navigation={navigationProp} />;
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
