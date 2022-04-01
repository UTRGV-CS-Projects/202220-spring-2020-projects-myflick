import { ActivityIndicator, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import NewMatchesList from "../components/Messages/NewMatchesList";
import NewMessagesList from "../components/Messages/NewMessagesList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MessageUser, RootStackScreenProps } from "../types";
import { SafeAreaView } from "../components/Themed";
import {
  fetchConversations,
  fetchUserConversations,
  listMessage,
} from "../apis/messages";
import { AuthContext } from "../store/AuthContext";
import { UserConversations } from "../src/API";
import { listConversations } from "../src/graphql/queries";
import { fetchUserDataMessage } from "../apis/users";
import { themeColor } from "../constants/Colors";
const Messages = ({ navigation }: RootStackScreenProps<"Messages">) => {
  const insets = useSafeAreaInsets();
  const { user, dispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<MessageUser[]>([]);

  useEffect(() => {
    /*  fetchUserConversations(user.cognitoId).then((res) => {
      const userConversations = res?.data?.listUserConversations
        ?.items as UserConversations[];
      userConversations.map((conversation) => {
        fetchConversations(conversation?.conversationId).then((res) => {
          res?.data?.listConversations?.items?.map((conversation) => {
            fetchUserDataMessage(conversation!.name).then((res) => {
              const data = res?.data?.getUser as MessageUser;
              setUsers([...users, data]);
            });
          });
        });
      });
      setLoading(false);
    }); */
  }, []);

  useEffect(() => {
    console.log("messaged users", users);
  }, [users]);

  return (
    <SafeAreaView style={[styles.container]}>
      {loading ? (
        <ActivityIndicator
          animating={loading}
          color={themeColor}
          size={"large"}
        />
      ) : (
        <>
          <NewMatchesList navigationProp={navigation} users={users} />
          <NewMessagesList navigationProp={navigation} users={users} />
        </>
      )}
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
