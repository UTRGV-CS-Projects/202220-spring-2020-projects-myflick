import {
	ActivityIndicator,
	Button,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { GenresType, RootStackScreenProps } from "../types";
import { View, Text, SafeAreaView } from "../components/Themed";
import Swiper from "react-native-deck-swiper";
import LottieView from "lottie-react-native";
import useColorScheme from "../hooks/useColorScheme";
import { MovieCardType } from "../db/db";
import PeopleCard from "../components/SwipingComponent/PeopleCard";
import Colors, { themeColor } from "../constants/Colors";
import { EvilIcons } from "@expo/vector-icons";
import { fetchUsers } from "../apis/users";
import { User } from "../src/API";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../store/AuthContext";

const delay = (ms: number | undefined) =>
	new Promise((res) => setTimeout(res, ms));

const PeopleSwiping = () => {
	const { user, dispatch } = useContext(AuthContext);

	const colorScheme = useColorScheme();
	const heart = useRef<LottieView>(null);
	const star = useRef<LottieView>(null);
	const useSwiper = useRef<Swiper<MovieCardType>>(null);
	const useSwiperPeople = useRef<Swiper<User>>(null);
	const isLikeFirstRun = useRef(true);
	const isSuperLikeFirstRun = useRef(true);

	const handleSwipeLeft = () => {};
	const handleSwipeRight = () => {};
	const handleSwipeTop = () => {};

	const [isLiked, setIsLiked] = useState(false);
	const [isSuperLiked, setIsSuperLiked] = useState(false);
	const [showOverlayLabel, setShowOverlayLabel] = useState(false);
	const [OverlayLabelColor, setOverlayLabelColor] = useState("transparent");
	const [OverlayLabelText, setOverlayLabelText] = useState("Change This");
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState<User[]>([]);

	const overlayTrigger = (
		setShow: boolean,
		setColor: string,
		setText: string
	) => {
		setShowOverlayLabel(setShow);
		setOverlayLabelColor(setColor);
		setOverlayLabelText(setText);
	};

	useEffect(() => {
		setUsersData();
	}, []);

	const setUsersData = async () => {
		try {
			setLoading(true);

			const response = await fetchUsers();
			const usersResponse = response?.data?.listUsers?.items as User[];

			const filteredUsers = usersResponse.filter((indexUser) => {
				return indexUser.cognitoId !== user.cognitoId;
			});

			setUsers(filteredUsers);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (users?.length > 0) {
			setLoading(false);
		}
	}, [users]);

	useEffect(() => {
		if (isLikeFirstRun.current) {
			if (isLiked) {
				heart.current?.play(75, 75);
			} else {
				heart.current?.play(0, 0);
			}
			isLikeFirstRun.current = false;
		} else if (isLiked) {
			heart.current?.play(0, 75);
		} else {
			heart.current?.play(10, 0);
		}
	}, [isLiked]);

	useEffect(() => {
		if (isSuperLikeFirstRun.current) {
			if (isSuperLiked) {
				star.current?.play(120, 120);
			} else {
				star.current?.play(0, 0);
			}
			isSuperLikeFirstRun.current = false;
		} else if (isSuperLiked) {
			star.current?.play(40, 120);
		} else {
			star.current?.play(10, 0);
		}
	}, [isSuperLiked]);

	const btnSwipeLeft = async () => {
		let useSwiperPtr;
		useSwiperPtr = useSwiperPeople;

		if (useSwiperPtr.current) {
			overlayTrigger(true, "red", "NOPE");
			await delay(800);
			setShowOverlayLabel(false);
			setOverlayLabelColor("transparent");
			useSwiperPtr.current.swipeLeft();
		}
	};

	const btnSwipeRight = async () => {
		let useSwiperPtr;
		useSwiperPtr = useSwiperPeople;

		if (useSwiperPtr.current) {
			overlayTrigger(true, "#2FEB5D", "LIKE");
			setIsLiked(true);

			await delay(800);

			setShowOverlayLabel(false);
			setOverlayLabelColor("transparent");

			useSwiperPtr.current.swipeRight();
			setIsLiked(false);
		}
	};

	const btnSwipeTop = async () => {
		let useSwiperPtr;
		useSwiperPtr = useSwiperPeople;

		if (useSwiperPtr.current) {
			overlayTrigger(true, "#35C3E7", "SUPER LIKE");
			setIsSuperLiked(true);
			await delay(800);

			setShowOverlayLabel(false);
			setOverlayLabelColor("transparent");

			useSwiperPtr.current.swipeTop();
			setIsSuperLiked(false);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			{!loading ? (
				<>
					{showOverlayLabel && (
						<View
							style={{
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								position: "absolute",
								top: 100,
								backgroundColor: "rgba(0, 0, 0, 0)",
								zIndex: 5,
								flex: 1,
								width: 370,
								height: 150,
							}}
						>
							<Text
								style={{
									fontSize: 45,
									fontWeight: "bold",
									borderRadius: 10,
									padding: 10,
									overflow: "hidden",
									backgroundColor: "rgba(0, 0, 0, 0)",
									borderColor: OverlayLabelColor,
									color: OverlayLabelColor,
									borderWidth: 3,
									opacity: 1,
								}}
							>
								{OverlayLabelText}
							</Text>
						</View>
					)}
					<Swiper
						ref={useSwiperPeople}
						cards={users!}
						keyExtractor={(item) => item.id}
						renderCard={(card) => {
							return <PeopleCard key={card.cognitoId} card={card} />;
						}}
						onSwiped={(cardIndex) => {
							console.log(cardIndex);
						}}
						onSwipedAll={() => {
							console.log("onSwipedAll");
						}}
						cardIndex={0}
						backgroundColor={Colors[colorScheme].secondary}
						stackSize={2}
						showSecondCard={true}
						horizontalThreshold={100}
						stackSeparation={-20}
						animateCardOpacity={true}
						animateOverlayLabelsOpacity={true}
						infinite={true}
						onSwipedLeft={handleSwipeLeft}
						onSwipedRight={handleSwipeRight}
						onSwipedTop={handleSwipeTop}
						disableBottomSwipe={true}
						overlayLabels={{
							left: {
								title: "NOPE",
								style: {
									label: {
										backgroundColor: "rgba(0, 0, 0, 0)",
										borderColor: "red",
										color: "red",
										borderWidth: 3,
									},
									wrapper: {
										flexDirection: "column",
										alignItems: "flex-end",
										justifyContent: "flex-start",
										marginTop: 30,
										marginLeft: -30,
									},
								},
							},
							right: {
								title: "LIKE",
								style: {
									label: {
										backgroundColor: "rgba(0, 0, 0, 0)",
										borderColor: "#2FEB5D",
										color: "#2FEB5D",
										borderWidth: 2.5,
									},
									wrapper: {
										flexDirection: "column",
										alignItems: "flex-start",
										justifyContent: "flex-start",
										marginTop: 30,
										marginLeft: 30,
									},
								},
							},
							top: {
								title: "NEED TO WATCH",
								style: {
									label: {
										backgroundColor: "rgba(0, 0, 0, 0)",
										borderColor: "#35C3E7",
										color: "#35C3E7",
										borderWidth: 1,
									},
									wrapper: {
										flexDirection: "column",
										alignItems: "flex-start",
										justifyContent: "flex-start",
										marginTop: 560,
										marginLeft: 30,
									},
								},
							},
						}}
					/>
					<View style={styles.buttonContainer}>
						<TouchableOpacity onPress={btnSwipeLeft}>
							<View style={[styles.bubble, { borderColor: "#FD484E" }]}>
								<EvilIcons
									name="close"
									size={45}
									color={themeColor}
									style={styles.cross}
								/>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={btnSwipeTop}>
							<View style={[styles.bubble, { borderColor: "#35C3E7" }]}>
								<LottieView
									ref={star}
									loop={false}
									source={require("../assets/lotties/star.json")}
									style={styles.star}
								/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={btnSwipeRight}>
							<View
								style={[styles.bubble, { borderColor: "#2FEB5D" /*#FD484E*/ }]}
							>
								<LottieView
									ref={heart}
									loop={false}
									source={require("../assets/lotties/heart.json")}
									style={styles.heart}
								/>
							</View>
						</TouchableOpacity>
					</View>
				</>
			) : (
				<ActivityIndicator
					size="large"
					color={themeColor}
					animating={loading}
				/>
			)}
		</SafeAreaView>
	);
};

export default PeopleSwiping;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-evenly",
		backgroundColor: "transparent",
		alignContent: "center",
		position: "absolute",
		bottom: 20,
	},
	bubble: {
		position: "relative",
		width: 80,
		height: 80,
		borderRadius: 40,
		//shadowColor: "red",

		borderWidth: 0.8,
		backgroundColor: "rgba(0, 0, 0, 0)",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	heart: { width: 70, height: 70, paddingLeft: 2, paddingTop: 3 },
	star: {
		position: "absolute",
		alignSelf: "center",
		bottom: "-11%",
		width: 160,
		height: 160,
		paddingLeft: 2,
		paddingTop: 3,
		padding: 1,
	},
	cross: {
		paddingLeft: 18,
		paddingTop: 22,
	},
});
