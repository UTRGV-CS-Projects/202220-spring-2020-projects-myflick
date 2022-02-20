import { Image, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView, Text, View } from "../components/Themed";
import React from "react";
import Swiper from "react-native-deck-swiper";
import { Button } from "react-native-elements";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { MOVIE_CARDS } from "../db/db";
import MoviePoster from "../components/MovieSwiping2/MoviePoster";
import { color } from "react-native-elements/dist/helpers";
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
          return (
            <View
              style={[
                styles.card,
                { backgroundColor: Colors[colorScheme].primary },
              ]}
            >
              <ImageBackground
                style={styles.cardTop}
                imageStyle={{ borderRadius: 20 }}
                source={{ uri: card.image }}
                blurRadius={10}
              >
                <MoviePoster source={card.image} />
              </ImageBackground>

              <View
                style={[
                  styles.cardBottom,
                  { backgroundColor: Colors[colorScheme].primary },
                ]}
              >
                <Text style={styles.title}>{card.title}</Text>
              </View>
            </View>
          );
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
        infinite={true}
        onSwipedLeft={handleSwipeLeft}
        onSwipedRight={handleSwipeRight}
        disableBottomSwipe={true}
        overlayLabels={{
          bottom: {
            title: "BLEAH",
            style: {
              label: {
                backgroundColor: "black",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              },
            },
          },
          left: {
            title: "NOPE",
            style: {
              label: {
                backgroundColor: "black",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
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
                backgroundColor: "black",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
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
                backgroundColor: "black",
                borderColor: "black",
                color: "white",
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
  card: {
    flex: 0.9,
    borderRadius: 20,
    justifyContent: "center",
    flexDirection: "column",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
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
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
