import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import useImageAspectRatio from "../../hooks/useImageAspectRatio";

interface MoviePosterProps {
	source: string;
}

const MoviePoster = ({ source }: MoviePosterProps) => {
	const aspectRatio = useImageAspectRatio(source);

	return (
		<Image
			source={{ uri: source }}
			style={{
				width: "100%",
				height: "100%",
				resizeMode: "contain",
			}}
		/>
	);
};

export default MoviePoster;

const styles = StyleSheet.create({});
