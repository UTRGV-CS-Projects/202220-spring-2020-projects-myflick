import {
	FlatList,
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "../Themed";
import MoviePoster from "./MoviePoster";
import { MovieCardType } from "../../db/db";
import Colors, { themeColor } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Chip } from "react-native-paper";
import LottieView from "lottie-react-native";
import { EvilIcons } from "@expo/vector-icons";

import AnimatedDotsCarousel from "react-native-animated-dots-carousel";

interface MovieCardProps {
	card: MovieCardType;
}

const MovieCard = ({ card }: MovieCardProps) => {
	const colorScheme = useColorScheme();
	const [index, setIndex] = useState(0);

	const nextPicture = () => {
		//prevent out of bounds index
		if (card.image.length - 1 > index) setIndex(index + 1);
	};
	const previousPicture = () => {
		//prevent negative index
		if (index > 0) setIndex(index - 1);
	};

	const openDetails = () => {};

	return (
		<View
			style={[styles.card, { backgroundColor: Colors[colorScheme].primary }]}
		>
			{card.image.length > 1 ? (
				<View style={styles.dotsCarouselContainer}>
					<AnimatedDotsCarousel
						length={card.image.length}
						currentIndex={index}
						maxIndicators={card.image.length}
						activeIndicatorConfig={{
							color: themeColor,
							margin: 3,
							opacity: 1,
							size: 8,
						}}
						inactiveIndicatorConfig={{
							color: "white",
							margin: 3,
							opacity: 0.5,
							size: 8,
						}}
						decreasingDots={[
							{
								config: { color: "white", margin: 3, opacity: 0.5, size: 5 },
								quantity: 1,
							},
							{
								config: { color: "white", margin: 3, opacity: 0.5, size: 6 },
								quantity: 1,
							},
						]}
					/>
				</View>
			) : (
				<></>
			)}
			<TouchableOpacity style={styles.nextPictureClick} onPress={nextPicture} />
			<TouchableOpacity
				style={styles.previousPictureClick}
				onPress={previousPicture}
			/>
			<TouchableOpacity style={styles.openDetailsClick} onPress={openDetails} />
			<ImageBackground
				style={styles.cardTop}
				imageStyle={{ borderRadius: 20 }}
				source={{ uri: card.image[index] }}
				blurRadius={10}
			>
				<MoviePoster source={card.image[index]} />
			</ImageBackground>

			<View
				style={[
					styles.cardBottom,
					{ backgroundColor: Colors[colorScheme].primary },
				]}
			>
				<Text style={styles.title}>{card.title}</Text>
				<View style={styles.chipsContainer}>
					{card.genres.map((genre) => {
						return (
							<TouchableOpacity style={styles.chip} key={genre}>
								<View>
									<Text style={styles.chipText}>{genre}</Text>
								</View>
							</TouchableOpacity>
						);
					})}
				</View>
			</View>
		</View>
	);
};

export default MovieCard;

const styles = StyleSheet.create({
	card: {
		flex: 0.9,
		paddingBottom: 20,
		borderRadius: 20,
		justifyContent: "center",
		flexDirection: "column",
		elevation: 5,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
	chipsContainer: {
		width: "80%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "nowrap",
	},
	chip: {
		alignSelf: "flex-start",
		padding: 8,
		paddingHorizontal: 13,
		borderRadius: 20,
		marginHorizontal: 10,
		backgroundColor: themeColor,
	},
	chipText: {
		fontWeight: "bold",
		color: "white",
	},
	cross: {
		paddingLeft: 18,
		paddingTop: 22,
	},
	cardTop: {
		borderRadius: 20,
		flex: 0.7,
		justifyContent: "center",
		alignItems: "center",
	},
	cardBottom: {
		borderRadius: 20,
		flex: 0.3,
		justifyContent: "flex-start",
		flexDirection: "column",
		alignItems: "center",
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
		padding: 15,
	},
	nextPictureClick: {
		backgroundColor: "rgba(0, 0, 0, 0)",
		height: 500,
		width: 187,
		position: "absolute",
		zIndex: 4,
		right: 0,
		top: 0,
	},
	previousPictureClick: {
		backgroundColor: "rgba(0, 0, 0, 0)",
		height: 500,
		width: 187,
		position: "absolute",
		zIndex: 4,
		left: 0,
		top: 0,
	},

	openDetailsClick: {
		backgroundColor: "rgba(0, 0, 0, 0)",
		height: 700,
		width: 370,
		position: "absolute",
		zIndex: 3,
		top: 0,
	},
	dotsCarouselContainer: {
		position: "absolute",
		zIndex: 3,
		top: 450,
		paddingLeft: 15,
		width: 370,
		alignItems: "center",
	},
});
