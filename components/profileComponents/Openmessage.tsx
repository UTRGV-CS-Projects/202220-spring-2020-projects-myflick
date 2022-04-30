import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { View, Text } from "../Themed";
import { ErrorTypes, MessageParamList } from "../../types";
const Message = ({ item, navigation }: MessageParamList) => {
  const MAX_MESSAGE_LENGTH = 25;

  const handleOpenMessage = () => {
    navigation.navigate("OpenChat", {
      id: item.conversationId,
      name: item.user?.cognitoId,
      person: item.user,
    });
  };

  const formatMessage = (message: string): string => {
    const trimmedMessage = item.lastMessage.trim();
    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      return message.slice(0, MAX_MESSAGE_LENGTH).concat("...");
    } else {
      return message;
    }
  };

  //const messageStyle = item.opened ? styles.opened : styles.unOpened;

  return (
    <View style={styles.messageContainer}>
      <TouchableOpacity testID="openmessage" onPress={handleOpenMessage}>
        <Image
          style={styles.profile}
          source={{ uri: item?.user?.picture }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.innerMessageContainer}
        onPress={handleOpenMessage}
      >
        <View style={styles.innerMessage}>
          <Text style={styles.name}>{item?.user?.firstName}</Text>
          <Text>
            {/*  style={
              item.lastMessage === ErrorTypes.START_CONVERSATING
                ? styles.startConversation
                : null
            }
          
            {formatMessage(item.lastMessage)}  */}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  profile: {
    width: 57,
    height: 57,
    borderRadius: 50,
    marginRight: 10,
  },
  startConversation: {
    opacity: 0.6,
  },

  messageContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  innerMessageContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  innerMessage: { flex: 1, justifyContent: "center", alignItems: "flex-start" },
  name: {
    fontWeight: "bold",
  },
  unOpened: {
    fontWeight: "bold",
  },
  opened: { opacity: 0.6 },
});
