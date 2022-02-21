import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "../../components/Themed";
import MoviePoster from "./MoviePoster";
import { MovieCardType } from "../../db/db";
import Colors, { themeColor } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Chip } from "react-native-paper";
import LottieView from "lottie-react-native";
import { EvilIcons } from "@expo/vector-icons";
interface MovieCardProps {
  card: MovieCardType;
}

const MovieCard = ({ card }: MovieCardProps) => {
  const colorScheme = useColorScheme();
  const heart = useRef<LottieView>(null);
  const star = useRef<LottieView>(null);

  const isLikeFirstRun = useRef(true);
  const isSuperLikeFirstRun = useRef(true);

  const [isLiked, setIsLiked] = useState(false);
  const [isSuperLiked, setIsSuperLiked] = useState(false);

  const handleFavorite = () => {
    setIsLiked(!isLiked);
  };
  const handleDislike = () => {};
  const handleSuperLike = () => {
    setIsSuperLiked(!isSuperLiked);
  };

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

  return (
    <View
      style={[styles.card, { backgroundColor: Colors[colorScheme].primary }]}
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleDislike}>
            <View
              style={[
                styles.bubble,
                { backgroundColor: Colors[colorScheme].secondary },
              ]}
            >
              <EvilIcons
                name="close"
                size={45}
                color={themeColor}
                style={styles.cross}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFavorite}>
            <View
              style={[
                styles.bubble,
                { backgroundColor: Colors[colorScheme].secondary },
              ]}
            >
              <LottieView
                ref={heart}
                loop={false}
                source={require("../../assets/lotties/favorite.json")}
                style={styles.heart}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSuperLike}>
            <View
              style={[
                styles.bubble,
                { backgroundColor: Colors[colorScheme].secondary },
              ]}
            >
              <LottieView
                ref={star}
                loop={false}
                source={require("../../assets/lotties/star.json")}
                style={styles.star}
              />
            </View>
          </TouchableOpacity>
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
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    alignContent: "center",
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
  bubble: {
    position: "relative",
    width: 80,
    height: 80,
    borderRadius: 40,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
