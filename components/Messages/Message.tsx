import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { View, Text } from "../Themed";
import { MessageParamList } from "../../types";
const Message = ({ item }: MessageParamList) => {
  const MAX_MESSAGE_LENGTH = 25;

  const formatMessage = (message: string): string => {
    const trimmedMessage = item.lastMessage.trim();
    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      return message.slice(0, MAX_MESSAGE_LENGTH).concat("...");
    } else {
      return message;
    }
  };

  const messageStyle = item.opened ? styles.opened : styles.unOpened;

  return (
    <View style={styles.messageContainer}>
      <TouchableOpacity>
        <Image style={styles.profile} source={{ uri: item.image }}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.innerMessageContainer}>
        <View style={styles.innerMessage}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={messageStyle}>{formatMessage(item.lastMessage)}</Text>
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
