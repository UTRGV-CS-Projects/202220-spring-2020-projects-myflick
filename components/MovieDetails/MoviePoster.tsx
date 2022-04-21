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


export default MoviePoster;