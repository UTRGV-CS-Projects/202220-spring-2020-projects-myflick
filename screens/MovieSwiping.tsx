import {
	ActivityIndicator,
	Button,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { GenresType, RootStackScreenProps } from "../types";
import { View, Text, SafeAreaView } from "../components/Themed";
import Swiper from "react-native-deck-swiper";
import LottieView from "lottie-react-native";
import useColorScheme from "../hooks/useColorScheme";
import { MovieCardType, PeopleDetailsType } from "../db/db";
import PeopleCard from "../components/SwipingComponent/PeopleCard";
import Colors, { themeColor } from "../constants/Colors";
import { EvilIcons } from "@expo/vector-icons";
import MovieCard from "../components/SwipingComponent/MovieCard";
import { fetchDiscovery, fetchGenres } from "../apis/movies";
import CustomerSwiper from "../components/SwipingComponent/CustomMovieSwiper";
import CustomMovieSwiper from "../components/SwipingComponent/CustomMovieSwiper";

const MovieSwiping = () => {
	const colorScheme = useColorScheme();
	const heart = useRef<LottieView>(null);
	const star = useRef<LottieView>(null);
	const useSwiper = useRef<Swiper<MovieCardType>>(null);
	const isLikeFirstRun = useRef(true);
	const isSuperLikeFirstRun = useRef(true);

	const [isLiked, setIsLiked] = useState(false);
	const [isSuperLiked, setIsSuperLiked] = useState(false);
	const [showOverlayLabel, setShowOverlayLabel] = useState(false);
	const [OverlayLabelColor, setOverlayLabelColor] = useState("transparent");
	const [OverlayLabelText, setOverlayLabelText] = useState("Change This");
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState<MovieCardType[]>([]);
	const [globalGenres, setGlobalGenres] = useState<GenresType[]>([]);
	const [page, setPage] = useState(1);
	const [customSwiperProps, setCustomSwiperProps] = useState({ cards: movies });

	const index = useRef(0);
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

	useEffect(() => {
		fetchMovieGenres();
		fetchMoviesDiscovery(page);
	}, []);

	const overlayTrigger = (
		setShow: boolean,
		setColor: string,
		setText: string
	) => {
		setShowOverlayLabel(setShow);
		setOverlayLabelColor(setColor);
		setOverlayLabelText(setText);
	};

	const fetchMoviesDiscovery = async (page: number) => {
		const response = await fetchDiscovery(page);
		const newMovies: MovieCardType[] = response.results;
		/* or (const movie of movies) {
		if(movie.poster_path!=null)
		{
			
		}
	} */
		setMovies(movies.concat(newMovies));
		// setCustomSwiperProps({ cards: movies.concat(newMovies) });
		index.current = index.current + 1;

		setPage(page + 1);
		// console.log(movies);
	};

	const handleSwiped = (cardIndex: number) => {
		console.log(cardIndex);
		console.log(movies.length);
		if (cardIndex / movies.length > 0.8) {
			//call api
			setLoading(true);
			fetchMoviesDiscovery(page);
		}

		index.current = cardIndex;
	};

	useEffect(() => {
		if (movies.length > 1) {
			setLoading(false);
		}

		//console.log("movies", movies);
	}, [movies]);

	const fetchMovieGenres = async () => {
		const response = await fetchGenres();
		//console.log("genres", response.genres);
		setGlobalGenres(response.genres);
	};

	return (
		<SafeAreaView style={styles.container}>
			{!loading ? (
				<>
					<CustomMovieSwiper
						movies={movies}
						handleSwiped={handleSwiped}
						globalGenres={globalGenres}
						index={index.current}
					/>

					<View style={styles.buttonContainer}>
						<TouchableOpacity onPress={() => {}}>
							<View style={[styles.bubble, { borderColor: "#FD484E" }]}>
								<EvilIcons
									name="close"
									size={45}
									color={themeColor}
									style={styles.cross}
								/>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => {}}>
							<View style={[styles.bubble, { borderColor: "#35C3E7" }]}>
								<LottieView
									ref={star}
									loop={false}
									source={require("../assets/lotties/star.json")}
									style={styles.star}
								/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => {}}>
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

export default MovieSwiping;

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
