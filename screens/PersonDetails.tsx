import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, View } from "../components/Themed";
import { Chip } from "react-native-paper";
//import { lightThemeColor, themeColor } from "../constants/Colors";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import LottieView from "lottie-react-native";
import ImagesSlider from "../components/PersonDetails/ImagesSlider";
import { createConversations, createUserConversation } from "../apis/messages";
import { AuthContext } from "../store/AuthContext";
import { v4 as uuidv4 } from "uuid";
import Colors, { themeColor, lightThemeColor } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
const PersonDetails = ({
	navigation,
	route,
}: RootStackScreenProps<"PersonDetails">) => {
	const [person, setPerson] = useState(route.params?.person);
	const heart = useRef<LottieView>(null);
	const isFirstRun = useRef(true);
	const [isLiked, setIsLiked] = useState(false);
	const { user, dispatch } = useContext(AuthContext);
	const colorScheme = useColorScheme();
	const handleFavorite = () => {
		setIsLiked(!isLiked);
	};
	const handleDislike = () => {
		navigation.goBack();
	};
	useEffect(() => {
		if (isFirstRun.current) {
			if (isLiked) {
				heart.current?.play(75, 75);
			} else {
				heart.current?.play(0, 0);
			}
			isFirstRun.current = false;
		} else if (isLiked) {
			heart.current?.play(0, 75);
		} else {
			heart.current?.play(10, 0);
		}
	}, [isLiked]);

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
			<View style={styles.upperContainer}>
				<View style={styles.backBubbleContainer}>
					<TouchableOpacity
						onPress={() => {
							navigation.goBack();
						}}
					>
						<View style={styles.backBubble}>
							<EvilIcons
								name="chevron-left"
								size={50}
								color={themeColor}
								style={styles.back}
							/>
						</View>
					</TouchableOpacity>
				</View>

				<ImagesSlider person={person} />

				{/* <View style={styles.bubbleContainer}>
					<TouchableOpacity onPress={handleDislike}>
						<View style={styles.bubble}>
							<EvilIcons
								name="close"
								size={45}
								color={themeColor}
								style={styles.cross}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={handleMessage}>
						<View style={styles.bubble}>
							<Ionicons
								name="chatbubble-outline"
								size={45}
								color={themeColor}
								style={styles.chatBubble}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={handleFavorite}>
						<View style={styles.bubble}>
							<LottieView
								ref={heart}
								loop={false}
								source={require("../assets/lotties/favorite.json")}
								style={styles.heart}
							/>
						</View>
					</TouchableOpacity>
				</View> */}
			</View>
			<View style={styles.lowerContainer}>
				<View style={styles.nameAndAge}>
					<Text style={styles.name}>
						{person?.firstName},
					</Text>
					<Text style={styles.age}>
						{person?.age}
					</Text>
					</View>
					<View style={styles.locationRow}>
						<Ionicons
                  name="location-outline"
                  size={15}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
					<Text style={styles.location}>{person?.location}</Text>
					</View>

					<View style={styles.locationRow}>
						<Ionicons
                  name="ios-male-female-outline"
                  size={15}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
					<Text style={styles.location}>{person?.pronouns}</Text>
					</View>
					
				

				<View>
					<Text style={styles.header}>About {person?.firstName}</Text>

					<Text style={styles.bio}>{person?.bio}</Text>
				</View>

				<View>
					<Text style={styles.header}>Interests</Text>
					<View style={styles.chipsContainer}>
						{person?.interests?.map((interest, index) => {
							return (
								<Chip
									style={styles.chip}
									key={index}
									textStyle={styles.chipText}
									onPress={() => {}}
									mode="flat"
								>
									{interest}
								</Chip>
							);
						})}
					</View>
				</View>

 <View style={styles.bubbleContainer}>
					<TouchableOpacity onPress={handleDislike}>
						<View style={styles.bubble}>
							<EvilIcons
								name="close"
								size={45}
								color={themeColor}
								style={styles.cross}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={handleMessage}>
						<View style={styles.bubble}>
							<Ionicons
								name="chatbubble-outline"
								size={45}
								color={themeColor}
								style={styles.chatBubble}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={handleFavorite}>
						<View style={styles.bubble}>
							<LottieView
								ref={heart}
								loop={false}
								source={require("../assets/lotties/favorite.json")}
								style={styles.heart}
							/>
						</View>
					</TouchableOpacity>
				</View> 




			</View>
		</View>
	);
};

export default PersonDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	upperContainer: {
		flex: 0.5,
		position: "relative",
		zIndex: 1,
	},
	back: {
		paddingLeft: 3,
		paddingTop: 7,
	},
	backBubbleContainer: {
		position: "absolute",
		width: "100%",
		backgroundColor: "transparent",
		top: 20,
		paddingLeft: 20,
		zIndex: 2,
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	bubbleContainer: {
		position: "absolute",
		width: "100%",
		backgroundColor: "transparent",
		bottom: 30,
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
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
	backBubble: {
		backgroundColor: "white",
		width: 55,
		height: 55,
		borderRadius: 40,
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	iconContainer: {
		backgroundColor: "transparent",
		justifyContent: "center",
		alignItems: "center",
	},
	cross: {
		paddingLeft: 18,
		paddingTop: 22,
	},
	chatBubble: {
		paddingLeft: 18,
		paddingTop: 15,
	},
	heart: { width: 70, height: 70, paddingLeft: 2, paddingTop: 3 },
	lowerContainer: {
		flex: 0.5,
		//justifyContent: "space-evenly",
		alignItems: "flex-start",
		paddingHorizontal: 20,
		paddingTop: 20
	},

	name: {
		fontSize: 28,
		fontWeight: "bold",
		paddingRight: 5
	},
	age:{
		fontSize: 28
	},
	nameAndAge:{
		flexDirection: "row",
	},
	locationRow:{
		flexDirection: "row",
		opacity: 0.6
	},
	location: {
		fontSize: 18,
		fontWeight: "500",
		paddingLeft: 5,
	},
	chip: {
		marginRight: 10,
		backgroundColor: themeColor,
	},
	chipText: {
		fontWeight: "bold",
		color: "white",
		paddingTop: 1,
	},
	bio: {
		fontSize: 16,
	},
	header: {
		fontSize: 21,
		fontWeight: "bold",
		marginBottom: 10,
		marginTop: 20
	},
	wrapper: {},
	chipsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		flexWrap: "wrap",
	},
});
