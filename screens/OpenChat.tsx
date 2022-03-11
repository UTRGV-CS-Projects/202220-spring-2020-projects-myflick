import {
	StyleSheet,
	Text,
	Image,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import React from "react";
import NewMatchesList from "../components/Messages/NewMatchesList";
import NewMessagesList from "../components/Messages/NewMessagesList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types";
import { SafeAreaView, View } from "../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import MessageBubble from "../components/Messages/MessageBubble";
import { TextInput } from "react-native-paper";

import useColorScheme from "../hooks/useColorScheme";

import Colors, { themeColor } from "../constants/Colors";

const OpenChat = ({ navigation }: RootStackScreenProps<"Messages">) => {
	const insets = useSafeAreaInsets();
	const colorScheme = useColorScheme();

	const handleGoBack = () => {
		navigation.navigate("Messages");
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<SafeAreaView style={[styles.container]}>
				<View style={styles.topBar}>
					<TouchableOpacity style={styles.backBtn} onPress={handleGoBack}>
						<Ionicons name="chevron-back-outline" size={30} color={"white"} />
					</TouchableOpacity>

					<Text style={styles.name}>Ashley</Text>

					<TouchableOpacity style={styles.ellipsis}>
						<Ionicons
							name="ellipsis-vertical-outline"
							size={30}
							color={"white"}
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.fairSpacing} />
				<MessageBubble received={true} sent={false} />

				<View style={styles.fairSpacing} />
				<MessageBubble received={false} sent={true} />

				<View style={styles.bottomBarContainer}>
					<View style={styles.bottomBar}>
						<TextInput
							label=""
							autoComplete={false}
							mode="outlined"
							autoCapitalize="none"
							secureTextEntry={false}
							activeOutlineColor={Colors[colorScheme].opposite}
							onSubmitEditing={(value) => console.log(value)}
							style={[styles.textInput]}
						/>
						<TouchableOpacity style={styles.signInButton}>
							<Text style={styles.signInText}>Send</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
};

export default OpenChat;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		//backgroundColor: "red", //to delete this line once finished
		paddingTop: 5,
		height: 50,
		borderBottomWidth: 0.3,
		borderBottomColor: "#3F3F3F",
	},
	backBtn: {
		paddingLeft: 5,
	},
	ellipsis: {
		paddingRight: 5,
	},
	name: {
		fontSize: 23,
		color: "white",
	},
	profile: {
		width: 52,
		height: 52,
		borderRadius: 50,
		marginRight: 10,
	},
	messageBubbleRow: {
		flexDirection: "row",
	},
	messageText: {
		color: "white",

		fontSize: 18,
	},
	messageBubble: {
		backgroundColor: "red",
		padding: 12,
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
	bottomBar: {
		flexDirection: "row",
		paddingHorizontal: 10,
		alignItems: "center",
	},
	signInButton: {
		paddingVertical: 11,
		paddingHorizontal: 25,
		backgroundColor: themeColor,
		borderRadius: 10,
	},
	signInText: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	textInput: {
		width: "75%",
		height: 39,
		marginBottom: 3,
		borderRadius: 20,
		marginRight: 10,
	},
	bottomBarContainer: { flex: 1, justifyContent: "flex-end", marginBottom: 5 },
});
