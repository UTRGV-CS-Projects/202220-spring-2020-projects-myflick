import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "../Themed";
import MoviePoster from "./MoviePoster";
import Colors, { themeColor } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { Chip } from "react-native-paper";
import LottieView from "lottie-react-native";
import { EvilIcons } from "@expo/vector-icons";

import AnimatedDotsCarousel from "react-native-animated-dots-carousel";
import { User } from "../../src/API";

interface PeopleCardProps {
  card: User;
}

const PeopleCard = ({ card }: PeopleCardProps) => {
  const colorScheme = useColorScheme();
  const [index, setIndex] = useState(0);

  console.log(card);

  const nextPicture = () => {
    //prevent out of bounds index
    if (card.photos) {
      if (card.photos.length - 1 > index) setIndex(index + 1);
    }
  };
  const previousPicture = () => {
    //prevent negative index
    if (index > 0) setIndex(index - 1);
  };

  const openDetails = () => {};

  const renderImages = () => {
    if (card.photos) {
      return (
        <ImageBackground
          style={styles.cardTop}
          imageStyle={{ borderRadius: 20 }}
          source={{ uri: card.photos[index] }}
          blurRadius={10}
        >
          <MoviePoster source={card.photos[index]} />
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          style={styles.cardTop}
          imageStyle={{ borderRadius: 20 }}
          source={{
            uri: "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg",
          }}
          blurRadius={10}
        >
          <MoviePoster
            source={
              "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg"
            }
          />
        </ImageBackground>
      );
    }
  };

  return (
    <View style={[styles.card]}>
      {card.photos ? (
        card.photos.length > 1 ? (
          <View style={styles.dotsCarouselContainer}>
            <AnimatedDotsCarousel
              length={card.photos.length}
              currentIndex={index}
              maxIndicators={card.photos.length}
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
                  config: { color: "white", margin: 3, opacity: 0.5, size: 3 },
                  quantity: 1,
                },
              ]}
            />
          </View>
        ) : null
      ) : null}
      <TouchableOpacity style={styles.nextPictureClick} onPress={nextPicture} />
      <TouchableOpacity
        style={styles.previousPictureClick}
        onPress={previousPicture}
      />
      <TouchableOpacity style={styles.openDetailsClick} onPress={openDetails} />
      {renderImages()}
      <View style={[styles.cardBottom]}>
        <View style={styles.InfoContainer}>
          <Text style={styles.title}>{card.firstName}</Text>
        </View>

        <View style={styles.chipsContainer}>
          {card.interests ? (
            card.interests.map((interest, index) => {
              return (
                <Chip
                  key={index}
                  mode="flat"
                  textStyle={{ color: "white", fontSize: 15 }}
                  style={{
                    backgroundColor: themeColor,
                    margin: 5,
                  }}
                >
                  {interest}
                </Chip>
              );
            })
          ) : (
            <></>
          )}
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.bio}>{card.bio}</Text>
        </View>
      </View>
    </View>
  );
};

export default PeopleCard;

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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginHorizontal: 20,
    marginBottom: 10,
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
    alignItems: "flex-start",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    paddingRight: 12,
    alignSelf: "center",
  },
  age: {
    fontSize: 25,
    paddingTop: 7,
    alignSelf: "center",
  },
  bio: { fontSize: 16 },
  InfoContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 20,
  },
  bioContainer: {
    marginHorizontal: 20,
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
