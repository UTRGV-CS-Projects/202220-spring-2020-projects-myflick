import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { themeColor } from "../constants/Colors";
import Background from "../components/Match/Background";
import LottieView from "lottie-react-native";
import { MatchParamList, RootTabScreenProps } from "../types";

const image = {uri: 'https://wallpaperaccess.com/full/1508305.jpg'}
const white_image = {uri: 'https://wallpaperaccess.com/full/2920271.jpg'}
const poster = {uri: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'}


function MovieDetails({
    navigation,
}: RootTabScreenProps<"MovieDetails">)
{
    
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={image}/>
        <Image style={styles.whiteimg} source={white_image}></Image>
        <Image style={styles.poster} source={poster}></Image>
        <Text style={styles.titletext}>Joker</Text>
        {/* <View style={styles.positioning}>
        <View
    style={[styles.box, { backgroundColor: "green" }]}
  />
  <View
    style={[styles.box, { backgroundColor: "green", left: 10, borderRadius: 70, transform: [{ scaleX: 2 }] }]}
  />
  <View
    style={[styles.box, { backgroundColor: "green", left: 20, borderRadius:30 }]}
  />
        </View> */}
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
       flex: 1,
    },
    box:{
        width: 25,
        height: 25,
    },
    image: {
        height: '50%',
        width: '180%',
        right: 160,

    },
    whiteimg: {
        height: '100%',
        width: '100%',
        top: 255,
        position: 'absolute',
        borderRadius: 60,
    },
    poster: {
        height: 220,
        width: 150,
        borderRadius: 20,
        bottom: 420,
        position: 'absolute',
        left: 40,
    },
    titletext:{
        fontSize: 30,
        fontFamily: "Roboto",
        position: 'absolute',
        top: 265,
        left: 220,
    },
    positioning: {
        flexDirection: 'row',
        left: 220,
        bottom: 450,
        position: 'absolute',      
    }


})
export default MovieDetails;





