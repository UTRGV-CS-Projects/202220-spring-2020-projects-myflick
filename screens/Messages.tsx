import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import NewMatchesList from "../components/Messages/NewMatchesList";
import NewMessagesList from "../components/Messages/NewMessagesList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ConversationType, MessageUser, RootStackScreenProps } from "../types";
import { SafeAreaView, Text, View } from "../components/Themed";
import {
  fetchConversations,
  fetchUserConversations,
  listMessage,
} from "../apis/messages";
import { AuthContext } from "../store/AuthContext";
import { Message, UserConversations } from "../src/API";
import { listConversations } from "../src/graphql/queries";
import { fetchUserDataMessage } from "../apis/users";
import { themeColor } from "../constants/Colors";
const Messages = ({ navigation }: RootStackScreenProps<"Messages">) => {
  const insets = useSafeAreaInsets();
  const { user, dispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState<ConversationType[]>([]);
  //const [messages, setMessages] = useState<Message[][]>([]);
  const getData = async () => {
    console.log("getting data");
    fetchUserConversations(user.cognitoId).then((res) => {
      const userConversations = res?.data?.listUserConversations
        ?.items as UserConversations[];
      userConversations.forEach((userConversation) => {
        let lastMessage = "";
        let conversationMessages: Message[] = [];
        let messageUser: MessageUser;
        let messages: Message[];

        listMessage(userConversation.conversationId).then((res) => {
          messages = res?.data?.listMessages?.items as Message[];
          //setMessages([...messages, data]);
        });
        fetchConversations(userConversation?.conversationId).then((res) => {
          res?.data?.listConversations?.items?.map((conversation) => {
            fetchUserDataMessage(conversation!.name)
              .then((res) => {
                messageUser = res?.data?.getUser as MessageUser;
                lastMessage = messages[0].content;

                return res;
              })

              .then(() => {
                setConversations([
                  ...conversations,
                  {
                    conversationId: userConversation!.conversationId,
                    user: messageUser,
                    lastMessage,
                    messages,
                  },
                ]);
              });
          });
        });
      });
      setLoading(false);
    });
  };
  useEffect(() => {
    console.log("messages mounted");
  }, []);

  useEffect(() => {
    console.log("conversations", conversations);
  }, [conversations]);

  useEffect(() => {
    if (loading) {
      getData();
    }
  }, [loading]);

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
          <NewMatchesList
            navigationProp={navigation}
            conversations={conversations}
          />
          <NewMessagesList
            navigationProp={navigation}
            conversations={conversations}
            setLoading={setLoading}
          />
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
  noMessages: {
    color: themeColor,
    fontSize: 22,
  },
  button: {
    backgroundColor: themeColor,
    padding: 12,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
  },
});
