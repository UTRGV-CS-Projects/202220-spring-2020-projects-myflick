import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	Animated,
	PanResponder,
	ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
import Icon from "react-native-vector-icons/Ionicons";
import { Chip } from "react-native-paper";
import { Buttonx } from "../components/swipingComponents/Button";

const Users = [
	{
		id: "1",
		mName: "Baby Driver",
		releaseYear: "(2017)",
		category: ["Action", "Crime", "Drama"],
		uri: require("../db/movieAssets/baby.webp"),
	},
	{
		id: "2",
		mName: "1917",
		releaseYear: "(2019)",
		category: ["Action", "Drama", "War"],
		uri: require("../db/movieAssets/1917.webp"),
	},
	{
		id: "3",
		mName: "Joker",
		releaseYear: "(2019)",
		category: ["Crime", "Drama", "Thriller"],
		uri: require("../db/movieAssets/joker.webp"),
	},
	{
		id: "4",
		mName: "Dunkirk",
		releaseYear: "(2017)",
		category: ["Action", "Drama", "History"],
		uri: require("../db/movieAssets/dunkirk.webp"),
	},
];

export default class MovieSwiping extends React.Component {
	constructor() {
		super();

		this.position = new Animated.ValueXY();
		this.state = {
			currentIndex: 0,
		};

		this.rotate = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: ["-10deg", "0deg", "10deg"],
			extrapolate: "clamp",
		});

		this.rotateAndTranslate = {
			transform: [
				{
					rotate: this.rotate,
				},
				...this.position.getTranslateTransform(),
			],
		};

		this.likeOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [0, 0, 1],
			extrapolate: "clamp",
		});
		this.needToWatchOpacity = this.position.y.interpolate({
			inputRange: [-SCREEN_HEIGHT / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0, 1],
			extrapolate: "clamp",
		});
		this.dislikeOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0, 0],
			extrapolate: "clamp",
		});

		this.nextCardOpacity = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0.8, 1],
			extrapolate: "clamp",
		});
		this.nextCardScale = this.position.x.interpolate({
			inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
			outputRange: [1, 0.9, 1],
			extrapolate: "clamp",
		});
	}
	UNSAFE_componentWillMount() {
		this.PanResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderMove: (evt, gestureState) => {
				this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
			},
			onPanResponderRelease: (evt, gestureState) => {
				if (gestureState.dx > 120) {
					Animated.spring(this.position, {
						toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
						useNativeDriver: false,
					}).start(() => {
						this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
							this.position.setValue({ x: 0, y: 0 });
						});
					});
				} else if (gestureState.dx < -120) {
					Animated.spring(this.position, {
						toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
						useNativeDriver: false,
					}).start(() => {
						this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
							this.position.setValue({ x: 0, y: 0 });
						});
					});
				} else if (gestureState.dy < -420) {
					Animated.spring(this.position, {
						toValue: { x: gestureState.dx, y: gestureState.dy - 420 },
						useNativeDriver: false,
					}).start(() => {
						this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
							this.position.setValue({ x: 0, y: 0 });
						});
					});
				} else {
					Animated.spring(this.position, {
						toValue: { x: 0, y: 0 },
						friction: 4,
						useNativeDriver: false,
					}).start();
				}
			},
		});
	}

	renderUsers = () => {
		const delay = (ms) => new Promise((res) => setTimeout(res, ms));
		const reject = async () => {
			console.log("Button clicked");
			{
				{
					//this.setState({ currentIndex: this.state.currentIndex + 1 });

					this.position.setValue({ x: -25, y: 0 });
					await delay(15);
					this.position.setValue({ x: -50, y: 0 });
					await delay(10);
					this.position.setValue({ x: -75, y: 0 });
					await delay(10);
					this.position.setValue({ x: -100, y: 0 });
					await delay(10);
					this.position.setValue({ x: -125, y: 0 });
					await delay(10);
					this.position.setValue({ x: -150, y: 0 });
					await delay(5);
					this.position.setValue({ x: -50, y: 0 });
					this.PanResponder.panHandlers.onResponderRelease(null, this.position);
					this.setState({ currentIndex: this.state.currentIndex + 1 });
				}
			}
		};
		const maybe = async () => {
			console.log("Button clicked");
			{
				{
					//this.setState({ currentIndex: this.state.currentIndex + 1 });

					this.position.setValue({ x: 0, y: -25 });
					await delay(15);
					this.position.setValue({ x: 0, y: -50 });
					await delay(10);
					this.position.setValue({ x: 0, y: -75 });
					await delay(10);
					this.position.setValue({ x: 0, y: -100 });
					await delay(10);
					this.position.setValue({ x: 0, y: -125 });
					await delay(10);
					this.position.setValue({ x: 0, y: -150 });
					await delay(5);
					this.position.setValue({ x: 0, y: -350 });
					await delay(5);
					this.position.setValue({ x: 0, y: -50 });
					this.PanResponder.panHandlers.onResponderRelease(null, this.position);
					this.setState({ currentIndex: this.state.currentIndex + 1 });
				}
			}
		};
		const like = async () => {
			console.log("Button clicked");
			{
				{
					//this.setState({ currentIndex: this.state.currentIndex + 1 });

					this.position.setValue({ x: 25, y: 0 });
					await delay(15);
					this.position.setValue({ x: 50, y: 0 });
					await delay(10);
					this.position.setValue({ x: 75, y: 0 });
					await delay(10);
					this.position.setValue({ x: 100, y: 0 });
					await delay(10);
					this.position.setValue({ x: 125, y: 0 });
					await delay(10);
					this.position.setValue({ x: 150, y: 0 });
					await delay(5);
					this.position.setValue({ x: 50, y: 0 });
					this.PanResponder.panHandlers.onResponderRelease(null, this.position);
					this.setState({ currentIndex: this.state.currentIndex + 1 });
				}
			}
		};

		return Users.map((item, i) => {
			if (i < this.state.currentIndex) {
				return null;
			} else if (i == this.state.currentIndex) {
				return (
					<View key={item.id}>
						<Animated.View
							{...this.PanResponder.panHandlers}
							key={item.id}
							style={[
								this.rotateAndTranslate,
								{
									height: SCREEN_HEIGHT - 150,
									width: SCREEN_WIDTH,
									padding: 10,
									position: "absolute",
								},
							]}
						>
							<LinearGradient
								colors={["transparent", "rgba(0,0,0,1)"]}
								style={styles.linearGrad}
							/>
							<View style={styles.InfoSection}>
								<View style={{ flexDirection: "row", position: "relative" }}>
									<Text style={styles.overlayText}>{item.mName}</Text>
									<Text style={styles.release}>{item.releaseYear}</Text>
								</View>

								<View
									style={{
										flex: 1,
										flexDirection: "row",
										flexWrap: "wrap",
										paddingLeft: 8,
									}}
								>
									{item.category.map((item, index) => {
										return (
											<View key={index} style={{ margin: 5 }}>
												<Chip
													mode="outlined"
													textStyle={{ color: "white", fontSize: 15 }}
													style={{
														backgroundColor: "red",
														borderColor: "white",
													}}
												>
													{item}
												</Chip>
											</View>
										);
									})}
								</View>
							</View>
							<Animated.View
								style={{
									opacity: this.likeOpacity,
									transform: [{ rotate: "-30deg" }],
									position: "absolute",
									top: 50,
									left: 40,
									zIndex: 1000,
								}}
							>
								<Text
									style={{
										borderWidth: 2,
										borderColor: "#1CE108",
										color: "#1CE108",
										fontSize: 32,
										fontWeight: "800",
										padding: 10,
									}}
								>
									LIKE
								</Text>
							</Animated.View>

							<Animated.View
								style={{
									opacity: this.needToWatchOpacity,
									//transform: [{ rotate: "-30deg" }],
									position: "absolute",
									bottom: 50,
									left: 40,
									zIndex: 1000,
								}}
							>
								<Text
									style={{
										borderWidth: 2,
										borderColor: "#00A8FF",
										color: "#00A8FF",
										fontSize: 32,
										fontWeight: "800",
										padding: 10,
									}}
								>
									NEED TO WATCH
								</Text>
							</Animated.View>

							<Animated.View
								style={{
									opacity: this.dislikeOpacity,
									transform: [{ rotate: "30deg" }],
									position: "absolute",
									top: 50,
									right: 40,
									zIndex: 1000,
								}}
							>
								<Text
									style={{
										borderWidth: 2,
										borderColor: "red",
										color: "red",
										fontSize: 32,
										fontWeight: "800",
										padding: 10,
									}}
								>
									NOPE
								</Text>
							</Animated.View>

							<Image
								style={{
									flex: 1,
									height: null,
									width: null,
									resizeMode: "cover",
									borderRadius: 20,
								}}
								source={item.uri}
							/>
						</Animated.View>

						<View style={styles.buttonsRow} key={"button" + item.id}>
							<Buttonx
								key={98}
								imgSrc={require("../components/swipingComponents/Image/red-x.webp")}
								borderColorx="#FF1D1D"
								heightx={35}
								onClick={reject}
								opacityx={1}
							/>
							<Buttonx
								key={29}
								imgSrc={require("../components/swipingComponents/Image/blue-star.webp")}
								borderColorx="#00A8FF"
								heightx={25}
								onClick={maybe}
								opacityx={1}
							/>
							<Buttonx
								key={30}
								imgSrc={require("../components/swipingComponents/Image/green-heart.webp")}
								borderColorx="#4BDE86"
								heightx={35}
								onClick={like}
								opacityx={1}
							/>
						</View>
					</View>
				);
			} else {
				return (
					<View key={item.id}>
						<Animated.View
							key={item.id}
							style={[
								this.nextCardOpacity,
								{
									height: SCREEN_HEIGHT - 150,
									width: SCREEN_WIDTH,
									padding: 10,
									position: "absolute",
								},
							]}
						>
							<LinearGradient
								colors={["transparent", "rgba(0,0,0,1)"]}
								style={styles.linearGrad}
							/>
							<View style={styles.InfoSection}>
								<View style={{ flexDirection: "row", position: "relative" }}>
									<Text style={styles.overlayText}>{item.mName}</Text>
									<Text style={styles.release}>{item.releaseYear}</Text>
								</View>

								<View
									style={{
										flex: 1,
										flexDirection: "row",
										flexWrap: "wrap",
										paddingLeft: 8,
									}}
								>
									{item.category.map((item, index) => {
										return (
											<View key={index} style={{ margin: 5 }}>
												<Chip
													mode="outlined"
													textStyle={{ color: "white", fontSize: 15 }}
													style={{
														backgroundColor: "red",
														borderColor: "white",
													}}
												>
													{item}
												</Chip>
											</View>
										);
									})}
								</View>
							</View>
							<Animated.View
								style={{
									opacity: 0,
									transform: [{ rotate: "-30deg" }],
									position: "absolute",
									top: 50,
									left: 40,
									zIndex: 1000,
								}}
							>
								<Text
									style={{
										borderWidth: 2,
										borderColor: "#1CE108",
										color: "#1CE108",
										fontSize: 32,
										fontWeight: "800",
										padding: 10,
									}}
								>
									LIKE
								</Text>
							</Animated.View>

							<Animated.View
								style={{
									opacity: 0,
									//transform: [{ rotate: "-30deg" }],
									position: "absolute",
									bottom: 50,
									left: 40,
									zIndex: 1000,
								}}
							>
								<Text
									style={{
										borderWidth: 2,
										borderColor: "#00A8FF",
										color: "#00A8FF",
										fontSize: 32,
										fontWeight: "800",
										padding: 10,
									}}
								>
									NEED TO WATCH
								</Text>
							</Animated.View>

							<Animated.View
								style={{
									opacity: 0,
									transform: [{ rotate: "30deg" }],
									position: "absolute",
									top: 50,
									right: 40,
									zIndex: 1000,
								}}
							>
								<Text
									style={{
										borderWidth: 2,
										borderColor: "red",
										color: "red",
										fontSize: 32,
										fontWeight: "800",
										padding: 10,
									}}
								>
									NOPE
								</Text>
							</Animated.View>

							<Image
								style={{
									flex: 1,
									height: null,
									width: null,
									resizeMode: "cover",
									borderRadius: 20,
								}}
								source={item.uri}
							/>
						</Animated.View>

						<View style={styles.buttonsRow} key={"button" + item.id}>
							<Buttonx
								key={98}
								imgSrc={require("../components/swipingComponents/Image/red-x.webp")}
								borderColorx="#FF1D1D"
								heightx={35}
								onClick={reject}
								opacityx={0}
							/>
							<Buttonx
								key={29}
								imgSrc={require("../components/swipingComponents/Image/blue-star.webp")}
								borderColorx="#00A8FF"
								heightx={25}
								onClick={maybe}
								opacityx={0}
							/>
							<Buttonx
								key={30}
								imgSrc={require("../components/swipingComponents/Image/green-heart.webp")}
								borderColorx="#4BDE86"
								heightx={35}
								onClick={like}
								opacityx={0}
							/>
						</View>
					</View>
				);
			}
		}).reverse();
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ height: 60 }}></View>
				<View style={{ flex: 1 }}>{this.renderUsers()}</View>
				<View style={{ height: 60 }}></View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	overlayText: {
		flex: 0,
		position: "relative",
		fontSize: 40,
		color: "white",
		zIndex: 3,
		paddingLeft: 15,
	},

	InfoSection: {
		position: "absolute",
		flex: 1,
		justifyContent: "space-between",
		zIndex: 3,
		left: 10,
		bottom: 100,
	},
	linearGrad: {
		position: "absolute",
		flex: 1,
		zIndex: 2,
		borderRadius: 20,
		left: 10,
		height: SCREEN_HEIGHT - 560,
		width: SCREEN_WIDTH - 20,
		alignContent: "center",
		top: 400,
	},
	release: {
		color: "white",
		fontSize: 25,
		alignSelf: "center",
		paddingLeft: 8,
	},
	buttonsRow: {
		flexDirection: "row",

		justifyContent: "center",

		position: "absolute",
		marginTop: SCREEN_HEIGHT - 245,
		marginLeft: 45,

		alignItems: "center",
		zIndex: 49,
	},
});
