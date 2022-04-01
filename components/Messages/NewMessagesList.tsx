import { FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text } from "../Themed";
import { People, PeopleDetailsType } from "../../db/db";
import Message from "./Message";
import { useScrollToTop } from "@react-navigation/native";
import { fetchUserConversations } from "../../apis/messages";
import { AuthContext } from "../../store/AuthContext";
import { UserConversations } from "../../src/API";
const NewMessagesList = ({ navigationProp }: any) => {
  const ref = useRef(null);
  useScrollToTop(ref);

  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<UserConversations[]>([]);

  const { user, dispatch } = useContext(AuthContext);

  const fetchUserConversation = async () => {
    const data = await fetchUserConversations(user.cognitoId);
    if (data?.data?.listUserConversations?.items) {
      const conversations = data.data.listUserConversations
        .items as UserConversations[];
      setConversations(conversations);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchUserConversation();
  }, []);

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
