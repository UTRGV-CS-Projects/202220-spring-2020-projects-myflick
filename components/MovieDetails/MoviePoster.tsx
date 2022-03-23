import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface MoviePosterProps {
  image: string;
}
function MoviePoster({ image }: MoviePosterProps) {
  return (
    <Image
      style={styles.poster}
      source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
    ></Image>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poster: {
    height: 220,
    width: 150,
    borderRadius: 25,
    bottom: 400,
    position: "absolute",
    left: 10,
  },
});

export default MoviePoster;
