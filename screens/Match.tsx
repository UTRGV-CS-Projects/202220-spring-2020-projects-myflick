import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { View, Text } from "../components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { themeColor } from "../constants/Colors";
import { RootTabScreenProps } from "../types";
import Background from "../components/Match/Background";
import LottieView from "lottie-react-native";
import { v4 as uuidv4 } from "uuid";
import { createConversations, createUserConversation } from "../apis/messages";
import { AuthContext } from "../store/AuthContext";

const MatchScreen = ({ navigation, route }: RootTabScreenProps<"Match">) => {
	const { firstName, personOneImg, personTwoImg, person } = route.params;
	const { user, dispatch } = useContext(AuthContext);
	console.log("************************&*&***************************");
	console.log(person);
	console.log("************************&*&***************************");

	const handleMessage = () => {
		const id = uuidv4();
		const promise1 = createUserConversation(user.cognitoId, id);
		const promise2 = createUserConversation(person!.cognitoId, id);

		const promise3 = createConversations(user.cognitoId, person!.cognitoId, id);

		Promise.all([promise1, promise2, promise3]).then((res) => {
			console.log("data created", res);
			navigation.goBack();

			navigation.navigate("OpenChat", {
				id: res[2]?.data?.createConversation?.id,
				name: res[2]?.data?.createConversation?.name1,
				person: person!,
			});
		});
	};
	return (
		<View style={styles.container}>
			<LinearGradient
				// Background Linear Gradient
				colors={["transparent", "#222121cc"]}
				style={styles.background}
			/>
			<Background />
			<Text style={styles.header}>It's a Match!</Text>
			<Text style={styles.subheader}>
				You and {firstName} liked each other.
			</Text>
			<View style={styles.imageContainer}>
				<Image source={{ uri: personOneImg }} style={styles.person} />
				<View style={styles.bubble}>
					<LottieView
						autoPlay
						loop={false}
						source={require("../assets/lotties/favorite.json")}
						style={styles.heart}
					/>
				</View>
				<Image source={{ uri: personTwoImg }} style={styles.person} />
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button1} onPress={handleMessage}>
					<View style={{ backgroundColor: "transparent" }}>
						<Text style={styles.button1Text}>Message</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.button2}>
						<Text style={styles.button2Text}>Keep Swiping</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MatchScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: themeColor,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 500,
	},
	header: {
		color: "whitesmoke",
		fontWeight: "bold",
		fontSize: 30,
	},
	bubble: {
		backgroundColor: "white",
		width: 80,
		height: 80,
		borderRadius: 40,
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	subheader: {
		marginTop: 10,
		color: "whitesmoke",
		fontSize: 20,
	},
	imageContainer: {
		marginTop: 40,
		width: "100%",
		backgroundColor: "transparent",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	heart: { width: 70, height: 70, paddingLeft: 2, paddingTop: 3 },

	person: { borderRadius: 100, width: 120, height: 120 },
	buttonContainer: {
		position: "absolute",
		bottom: 50,
		left: 0,
		right: 0,
		width: "100%",
		backgroundColor: "transparent",
		justifyContent: "center",
		alignItems: "center",
	},
	button1: {
		borderRadius: 50,
		width: "40%",
		marginBottom: 20,
		padding: 11,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "whitesmoke",
	},
	button2: {
		backgroundColor: "transparent",
	},
	button1Text: {
		color: themeColor,
		fontWeight: "bold",
		fontSize: 20,
	},
	button2Text: {
		fontWeight: "bold",
		color: "whitesmoke",

		fontSize: 15,
	},
});
