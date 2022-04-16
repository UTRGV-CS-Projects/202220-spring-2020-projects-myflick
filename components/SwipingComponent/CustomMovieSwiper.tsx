import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MovieCardType } from "../../db/db";
import Swiper from "react-native-deck-swiper";
import MovieCard from "./MovieCard";
import { GenresType } from "../../types";
import Colors, { themeColor } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { AuthContext } from "../../store/AuthContext";
import {
	createMovieLikedList,
	fetchLikedMovies,
	updateLikedMoviesCall,
} from "../../apis/messages";

let currentCardUser = [{ id: "0" }];

interface CustomSwiperProps {
	movies: MovieCardType[];
	handleSwiped: (index: number) => void;
	globalGenres: GenresType[];
	index: number;
	btnTriggerLeft: boolean;
	btnTriggerTop: boolean;
	btnTriggerRight: boolean;
	genresMap: any;
}

const CustomMovieSwiper = ({
	movies,
	handleSwiped,
	globalGenres,
	index,
	btnTriggerLeft,
	btnTriggerTop,
	btnTriggerRight,
	genresMap,
}: CustomSwiperProps) => {
	const useSwiper = useRef<Swiper<MovieCardType>>(null);
	const colorScheme = useColorScheme();
	const { user, dispatch } = useContext(AuthContext);

	const handleSwipeLeft = () => {};
	const handleSwipeRight = async () => {
		let matches = await fetchLikedMovies(user.cognitoId);
		//console.log(currentCardUser[currentCardUser.length - 4]);
		let currentUserDisplayed = currentCardUser[currentCardUser.length - 4].id;
		let alreadySwiped = false;

		//if there doesn't exists a match field for the current logged in user
		if (matches == null) {
			createMovieLikedList(user.cognitoId, [
				//create a new field with the new match
				currentUserDisplayed,
			]);
		} else {
			console.log("--------------------------------");
			console.log(matches);
			console.log(currentCardUser[currentCardUser.length - 4].id);
			//check if the field's match list already has the match
			for (let i = 0; i < matches.likedMovies.length; ++i) {
				if (
					matches.likedMovies[i] ==
					currentCardUser[currentCardUser.length - 4].id
				) {
					console.log("already matched");
					alreadySwiped = true;
					break;
				}

				//if not, update and add new swiped user to the already existent list
			}

			if (!alreadySwiped) {
				//first, add that user to the retrieved user matches list
				matches.likedMovies.push(currentUserDisplayed);
				//then update the graphql list to this new one
				updateLikedMoviesCall(user.cognitoId, matches.likedMovies);
			}
		}
	};
	const handleSwipeTop = async () => {
		await handleSwipeRight();
	};

	const checkforBtnTriggers = () => {
		btnTriggerLeft ? useSwiper.current?.swipeLeft() : {};
		btnTriggerTop ? useSwiper.current?.swipeTop() : {};
		btnTriggerRight ? useSwiper.current?.swipeRight() : {};
	};

	useEffect(() => {
		checkforBtnTriggers();
	}, [btnTriggerLeft, btnTriggerTop, btnTriggerRight]);

	return (
		<Swiper
			ref={useSwiper}
			cards={movies}
			key={movies.length}
			keyExtractor={(item) => item.id}
			renderCard={(card) => {
				currentCardUser.push(card);
				return (
					<MovieCard
						card={card}
						genres={globalGenres}
						cardIndex={index}
						key={index}
						genresMap={genresMap}
					/>
				);
			}}
			onSwiped={handleSwiped}
			onSwipedAll={() => {}}
			cardIndex={index}
			backgroundColor={Colors[colorScheme].secondary}
			stackSize={2}
			showSecondCard={true}
			horizontalThreshold={100}
			stackSeparation={-20}
			animateCardOpacity={true}
			animateOverlayLabelsOpacity={true}
			infinite={false}
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
					title: "MUST WATCH",
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
	);
};

export default CustomMovieSwiper;

const styles = StyleSheet.create({});
