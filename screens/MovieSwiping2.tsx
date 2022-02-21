import { Image, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView, Text, View } from "../components/Themed";
import React from "react";
import Swiper from "react-native-deck-swiper";
import { Button } from "react-native-elements";
import Colors, { themeColor } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { MOVIE_CARDS } from "../db/db";
import MoviePoster from "../components/MovieSwiping2/MoviePoster";
import MovieCard from "../components/MovieSwiping2/MovieCard";

const MovieSwiping2 = () => {
  const colorScheme = useColorScheme();

  const handleSwipeLeft = () => {};
  const handleSwipeRight = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        cards={MOVIE_CARDS}
        keyExtractor={(item) => item.id}
        renderCard={(card) => {
          return <MovieCard card={card} />;
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        cardIndex={0}
        backgroundColor={Colors[colorScheme].secondary}
        stackSize={3}
        showSecondCard={true}
        horizontalThreshold={200}
        stackSeparation={-20}
        animateCardOpacity={true}
        animateOverlayLabelsOpacity
        infinite={true}
        onSwipedLeft={handleSwipeLeft}
        onSwipedRight={handleSwipeRight}
        disableBottomSwipe={true}
        overlayLabels={{
          left: {
            title: "NOPE",
            style: {
              label: {
                backgroundColor: Colors[colorScheme].primary,
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
                backgroundColor: Colors[colorScheme].primary,
                borderColor: "green",
                color: "green",
                borderWidth: 3,
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
            title: "SUPER LIKE",
            style: {
              label: {
                backgroundColor: Colors[colorScheme].primary,
                borderColor: themeColor,
                color: themeColor,
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              },
            },
          },
        }}
      ></Swiper>
    </SafeAreaView>
  );
};

export default MovieSwiping2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
