import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const image = { uri: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" };


function MoviePoster() {
    return ( <Image style={styles.poster} source={image}></Image>);
}

const styles = StyleSheet.create({
    container: {
        
    },
    poster: {
        height: 220,
        width: 150,
        borderRadius: 25,
        bottom: 400,
        position: "absolute",
        left: 40,
      },
})

export default MoviePoster;