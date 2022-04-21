import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "../Themed";
import MoviePoster from "./MoviePoster";
import { MovieCardType } from "../../db/db";
import Colors, { themeColor } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Chip } from "react-native-paper";

import { GenresType } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

interface MovieCardProps {
  card: MovieCardType;
  genres: GenresType[];
  cardIndex: number;
  genresMap: any;
}

const MovieCard = ({ card, genres, cardIndex, genresMap }: MovieCardProps) => {
  const colorScheme = useColorScheme();
  const [currentGenres, setCurrentGenres] = useState<string[]>();
  const navigation = useNavigation();
  const getGenres = () => {
    const currentGenres = [];
    let threeCounter = 0;
    if (card.genre_ids) {
      for (const genre of card.genre_ids) {
        for (const genreValue of genres) {
          if (genre === genreValue.id && threeCounter < 3) {
            currentGenres.push(genreValue.name);
            threeCounter++;
          }
        }
      }
    }
    setCurrentGenres(currentGenres);
  };

  const getYear = () => {
    const fullReleaseString: any = card.release_date;
    let yearText = "(";
    for (let i = 0; i < 4; i++) {
      yearText += fullReleaseString.charAt(i);
    }
    yearText += ")";
    return yearText;
  };

  useEffect(() => {
    //console.log(card);
    getGenres();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("MovieDetails", {
          title: card.title,
          overview: card.overview,
          original_title: card.original_title,
          id: card.id,
          vote_average: card.vote_average,
          vote_count: card.vote_count,
          genre_ids: card.genre_ids,
          genres: card.genres,
          image: [],
          poster_path: card.poster_path,
          release_date: card.release_date,
        });
      }}
    >
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
          <Text style={styles.title}>
            {card.title} {getYear()}
          </Text>
          <View
            style={[
              styles.chipsContainer,
              { backgroundColor: Colors[colorScheme].primary },
            ]}
          >
            {card.genre_ids?.map((genre, index) => {
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
                    {genresMap.get(genre)}
                  </Chip>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text
            style={[
              styles.movieDescription,
              { color: Colors[colorScheme].opposite },
            ]}
          >
            {card.title.length < 40 ? card.overview : null}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    maxHeight: 50,
    overflow: "hidden",
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
    paddingBottom: 5,
    textAlign: "center",
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
  movieDescription: {
    zIndex: 1,
    maxHeight: 80,
    maxWidth: "80%",
    overflow: "hidden",
    textAlign: "center",
    fontSize: 16,
    paddingTop: 8,
  },
  descriptionContainer: {
    zIndex: 2,
    position: "absolute",
    alignItems: "center",
    width: "100%",
    height: 180,
    borderRadius: 20,
    bottom: -20,
  },
});
