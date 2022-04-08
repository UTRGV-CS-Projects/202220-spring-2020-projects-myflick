import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { View, Text } from "../Themed";
import Colors, { themeColor } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Message, User } from "../../src/API";
import useColorScheme from "../../hooks/useColorScheme";

interface ChatMsgprops {
  currentUserId: string;
  message: Message;
  user: User | undefined;
}

const MessageBubble = (props: ChatMsgprops) => {
  const { message, currentUserId, user } = props; //de-structure props
  const colorScheme = useColorScheme();

  const formatLocalTime = (date: string) => {
    const data = new Date(date);
    return data.toLocaleString();
  };

  function timeSince(date: Date) {
    let seconds = Math.floor((+new Date() - +date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  const renderReceivedMessage = () => {
    return (
      <View style={styles.messageContainer}>
        <View style={styles.messageBubbleRow}>
          <Image
            style={styles.profile}
            source={{
              uri: user?.picture,
            }}
          />
          <View>
            <View>
              <View style={styles.messageBubble}>
                <Text style={styles.messageText}>{message.content}</Text>
              </View>
              <Text
                style={{
                  color: Colors[colorScheme].opposite,
                  alignSelf: "flex-end",
                  marginTop: 10,
                  fontSize: 11,
                }}
              >
                {formatLocalTime(message.createdAt)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderSentMessage = () => {
    return (
      <View style={styles.messageContainer}>
        <View>
          <View>
            <View style={styles.messageSentBubble}>
              <Text style={styles.messageText}>{message.content}</Text>
            </View>
            <Text
              style={{
                fontSize: 11,
                color: Colors[colorScheme].opposite,
                alignSelf: "flex-end",
                marginTop: 10,
              }}
            >
              {formatLocalTime(message.createdAt)}
            </Text>
          </View>
          <View style={styles.messageInfo}>
            <Ionicons
              name="checkmark-done-outline"
              color={"white"}
              size={15}
              style={{ paddingRight: 3 }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      {currentUserId === message.sender
        ? renderSentMessage()
        : renderReceivedMessage()}
    </View>
  );
};

export default MessageBubble;

const styles = StyleSheet.create({
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  messageBubbleRow: {
    flexDirection: "row",
  },
  messageText: {
    color: "white",

    fontSize: 16,
  },

  messageBubble: {
    backgroundColor: "gray",
    padding: 11,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    maxWidth: 290,
  },
  messageSentBubble: {
    backgroundColor: themeColor,
    padding: 11,
    borderRadius: 15,
    borderBottomRightRadius: 0,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    maxWidth: 300,
  },
  messageContainer: {
    flexDirection: "column",
    flex: 0,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  receivedTime: {
    alignSelf: "flex-end",
    fontSize: 10,
    color: "#B6B6B6",
  },
  fairSpacing: {
    padding: 10,
  },
  messageBubbleContainer: {},
  messageInfo: {
    paddingTop: 3,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
