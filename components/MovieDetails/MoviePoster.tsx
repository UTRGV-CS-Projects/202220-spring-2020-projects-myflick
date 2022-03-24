import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ImageTapModal from "../ImageTapModalFile/ImageTapModal";

interface MoviePosterProps {
  image: string;
}
function MoviePoster({ image }: MoviePosterProps) {
 const imageposter = { uri: `https://image.tmdb.org/t/p/w500${image}` };
  return (
    // <Image
    //   source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
    // ></Image>
    <ImageTapModal image={imageposter} />
  );
}

const styles = StyleSheet.create({
  container: {
      
  },
  poster: {
      height: 220,
      width: 150,
      borderRadius: 25,
      bottom: 375,
      position: "absolute",
      left: 40,
    },
})
export default MoviePoster;
