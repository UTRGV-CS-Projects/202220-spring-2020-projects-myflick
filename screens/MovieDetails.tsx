import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { themeColor } from "../constants/Colors";
import Background from "../components/Match/Background";
import LottieView from "lottie-react-native";
import { MatchParamList, RootTabScreenProps } from "../types";
import {MaterialCommunityIcons} from '@expo/vector-icons';

const image = { uri: "https://wallpaperaccess.com/full/1508305.jpg" };
const white_image = { uri: "https://wallpaperaccess.com/full/2920271.jpg" };
const poster = {
  uri: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
};
const ozark_poster = {
  uri: 'https://m.media-amazon.com/images/M/MV5BNGY3MmUzNjktZWEzNi00ODdiLTk4ZDItZjBhMjZlYzI0NTJjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg'
}

const dark_knight = {
  uri: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'
}

const marriage_story = {
  uri: 'https://soleposter.com/image/cache/catalog/poster/9587/9587-550x550h.jpg'
}

function MovieDetails({ navigation }: RootTabScreenProps<"MovieDetails">) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Image style={styles.whiteimg} source={white_image}></Image>
      <Image style={styles.poster} source={poster}></Image>
      <Text style={styles.titletext}>Joker</Text>
      <View style={styles.box}>
      <Image source={dark_knight} style={{width: 100, height: 135, borderRadius: 20}}></Image>
      <Image source={ozark_poster} style={{width: 100, height: 135, borderRadius: 20, left: 30}}></Image>
      <Image source={marriage_story} style={{width: 100, height: 135, borderRadius: 20, left: 55}}></Image>
      </View>
      {/* <MaterialCommunityIcons name="trash-can-outline" color="white" size={100}/> */}
      <View style={styles.DescContainer}>
      <View style={{alignItems: 'center', justifyContent:'space-evenly'}}>
      <View style ={{top: -50, right: 15, alignItems:'baseline',}}>
        <Text>Director: Todd Phillips</Text>
        <Text>Writers: Todd Phillips, Scott Silver</Text>
        <Text>Stars: Jaoquin Phoenix, Zazle Beetz, Robert De Niro</Text>
        </View>
      </View>
        <View style={styles.Description}>
          <View style={{flex: 1, alignItems: 'center',}}>
          <Text style={{textAlign: 'justify',color:'#000', margin: 20, left: -2}}>
            An Original Standalone Origin Story Of the Iconic Villian Not Seen Before On The Big Screen, 
            It's A Gritty Character Study Of Arthur Fleck, A Man Disregarded By Society, 
            And A Broader Cautionary Tale.</Text>
          </View>
        </View>
      </View>
      <Text style={{top: -25, left: 22}}>More Like This</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  box: {
    width: 25,
    height: 25,
    flexDirection: 'row',
    top: 210,
    left: 22,
    justifyContent: 'space-between'
  },
  image: {
    height: "50%",
    width: "180%",
    right: 160,
    bottom: 50
  },
  whiteimg: {
    height: "100%",
    width: "100%",
    top: 190,
    position: "absolute",
    borderRadius: 60,
  },
  poster: {
    height: 220,
    width: 150,
    borderRadius: 20,
    bottom: 400,
    position: "absolute",
    left: 50,
  },
  titletext: {
    fontSize: 30,
    position: "absolute",
    top: 200,
    left: 220,
  },
  positioning: {
    flexDirection: "row",
    left: 220,
    bottom: 450,
    position: "absolute",
  },
  Description: {
    flexDirection: 'row',
    top: -50,
  },
  DescContainer: {
    top: 15
  },
  smallimgs: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
});
export default MovieDetails;
