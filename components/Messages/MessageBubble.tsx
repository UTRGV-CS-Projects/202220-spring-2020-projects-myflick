import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { View, Text } from "../Themed";
import Colors, { themeColor } from "../../constants/Colors";

interface props {
	received: boolean;
	sent: boolean;
}

const MessageBubble = ({ received, sent }: props) => {
	const renderReceivedMessage = () => {
		return (
			<View style={styles.messageContainer}>
				<View style={styles.messageBubbleRow}>
					<Image
						style={styles.profile}
						source={{
							uri: "https://i.pinimg.com/originals/9b/65/89/9b6589897ea022400280d26dcfd3efce.jpg",
						}}
					/>
					<View style={styles.messageBubbleContainer}>
						<View style={styles.messageBubble}>
							<Text style={styles.messageText}>Down bad bro</Text>
						</View>
						<Text style={styles.receivedTime}>11:59 pm</Text>
					</View>
				</View>
			</View>
		);
	};

	const renderSentMessage = () => {
		return (
			<View style={styles.messageContainer}>
				<View>
					<View style={styles.messageSentBubble}>
						<Text style={styles.messageText}>Sorry :(</Text>
					</View>
					<Text style={styles.receivedTime}>11:59 pm</Text>
				</View>
			</View>
		);
	};

	return (
		<View>{received ? renderReceivedMessage() : renderSentMessage()}</View>
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

		fontSize: 17,
	},
	messageBubble: {
		backgroundColor: themeColor,
		padding: 11,
		borderRadius: 15,
		borderBottomLeftRadius: 0,
		alignContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	messageSentBubble: {
		backgroundColor: "#B6B6B6",
		padding: 12,
		borderRadius: 15,
		borderBottomRightRadius: 0,
		alignContent: "center",
		alignItems: "center",
		alignSelf: "flex-end",
	},
	messageContainer: {
		flexDirection: "column",
		flex: 0,
		paddingHorizontal: 10,
	},

	receivedTime: {
		alignSelf: "flex-end",
		fontSize: 10,
		padding: 2,
		color: "#B6B6B6",
	},
	fairSpacing: {
		padding: 10,
	},
	messageBubbleContainer: {},
});
