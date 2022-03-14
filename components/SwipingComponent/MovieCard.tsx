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
import { GenresType } from "../../types";

interface MovieCardProps {
  card: MovieCardType;
  genres: GenresType[];
  cardIndex: number;
}

const MovieCard = ({ card, genres, cardIndex }: MovieCardProps) => {
  const colorScheme = useColorScheme();
  const [currentGenres, setCurrentGenres] = useState<string[]>();

  const getGenres = () => {
    const currentGenres = [];
    if (card.genre_ids) {
      for (const genre of card.genre_ids) {
        for (const genreValue of genres) {
          if (genre === genreValue.id) {
            currentGenres.push(genreValue.name);
          }
        }
      }
    }
    setCurrentGenres(currentGenres);
  };

  useEffect(() => {
    console.log(card);
    getGenres();
  }, []);

  return (
    <View
      style={[styles.card, { backgroundColor: Colors[colorScheme].primary }]}
    >
      <ImageBackground
        style={styles.cardTop}
        imageStyle={{ borderRadius: 20 }}
        source={{ uri: `https://image.tmdb.org/t/p/w500${card.poster_path}` }}
        blurRadius={10}
      >
        <MoviePoster
          source={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
        />
      </ImageBackground>

      <View
        style={[
          styles.cardBottom,
          { backgroundColor: Colors[colorScheme].primary },
        ]}
      >
        <Text style={styles.title}>{card.title}</Text>
        <View
          style={[
            styles.chipsContainer,
            { backgroundColor: Colors[colorScheme].primary },
          ]}
        >
          {currentGenres?.map((genre, index) => {
            return (
              <TouchableOpacity key={index}>
                <Chip
                  mode="flat"
                  textStyle={{ color: "white", fontSize: 15 }}
                  style={{
                    backgroundColor: themeColor,
                    margin: 5,
                  }}
                >
                  {genre}
                </Chip>
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
    flexWrap: "wrap",
  },
  chip: {
    alignSelf: "flex-start",
    padding: 8,
    paddingHorizontal: 13,
    borderRadius: 20,
    margin: 5,
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
