import { FlatList, RefreshControl, StyleSheet } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text } from "../Themed";
import { People, PeopleDetailsType } from "../../db/db";
import Message from "./Message";
import { useScrollToTop } from "@react-navigation/native";
import { fetchUserConversations } from "../../apis/messages";
import { AuthContext } from "../../store/AuthContext";
import { Message as MessageType, UserConversations } from "../../src/API";
import { ConversationType, MessageUser } from "../../types";
import { themeColor } from "../../constants/Colors";

interface NewMessagesListProps {
  navigationProp: any;
  conversations: ConversationType[];
  setLoading: (loading: boolean) => void;
}
const NewMessagesList = ({
  navigationProp,
  conversations,
  setLoading,
}: NewMessagesListProps) => {
  const ref = useRef(null);
  useScrollToTop(ref);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {}, []);

  /*  */

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={[themeColor]}
            tintColor={themeColor}
            onRefresh={() => {
              setLoading(true);
            }}
          />
        }
        data={conversations}
        contentContainerStyle={styles.newMatchesListContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: ConversationType) => item.conversationId}
        renderItem={({ item }: { item: ConversationType }) => {
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
