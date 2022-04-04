import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { MovieCardType } from "../../db/db";
import Swiper from "react-native-deck-swiper";
import MovieCard from "./MovieCard";
import { GenresType } from "../../types";
import Colors, { themeColor } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

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

const handleSwipeLeft = () => {};
const handleSwipeRight = () => {};
const handleSwipeTop = () => {};

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
