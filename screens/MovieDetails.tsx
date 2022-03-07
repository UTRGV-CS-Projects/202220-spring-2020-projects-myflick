import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { themeColor } from "../constants/Colors";
import Background from "../components/Match/Background";
import LottieView from "lottie-react-native";
import { MatchParamList, RootTabScreenProps } from "../types";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { BackgroundImage } from "react-native-elements/dist/config";
import MoviePoster from "../components/MovieDetails/MoviePoster";
import { useFonts } from "expo-font";
import { color } from "react-native-elements/dist/helpers";


const white_image = { uri: "https://wallpaperaccess.com/full/1586320.jpg" };

const image = { uri: "https://wallpaperaccess.com/full/1508305.jpg" };

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

const [loaded] = useFonts({
  Fredoka: require('../assets/fonts/Fredoka-Regular.ttf'),
  NotoSans: require('../assets/fonts/NotoSans-Regular.ttf'),
  Mulish: require('../assets/fonts/Mulish-Medium.ttf'),
  Mulishbold: require('../assets/fonts/Mulish-Bold.ttf')
})
if (!loaded) {
  return null;
}

  return (
    <View style={styles.container}>
     <ImageBackground style={styles.whiteimg} source={white_image}>
       <Image style={styles.image} source={image}></Image> 
       <Image style={styles.imagewht} source={white_image}></Image>
       <MoviePoster />
       <Text style={styles.titletext}>Joker</Text>
       <Text style={styles.list}>Director:</Text>
       <Text style={styles.list1}>Writers:</Text>
       <Text style={styles.list2}>Stars:</Text>
          <Text style={styles.directorname}>Todd Phillips</Text>
          <Text style={styles.writers}>Todd Phillips, Scott Silver</Text>
          <Text style={styles.stars}>Joaquin Phoenix, Zazie Beetz, Robert De Niro</Text>
          <Text style= {styles.Description} numberOfLines={5}>
            An original standalone origin story of the iconic villian not seen before on the big screen, it's a gritty character study of Arthur Fleck, a man disregarded by society, and a broder cautionary tale.
          </Text>
          <Text style={{ fontFamily: 'Mulishbold', fontWeight: '700',fontSize: 25,color: `#708090` ,position: "absolute", top : 553, left: 40}}>More Like This: </Text>
       <View style={{position: 'absolute', flexDirection: 'row'}}>      
      <Image source={dark_knight} style={{width: 100, height: 135,top: 590, left: 40, borderRadius: 20,}}></Image>
      <Image source={ozark_poster} style={{width: 100, height: 135, top: 590, left: 50, borderRadius: 20}}></Image>
      <Image source={marriage_story} style={{width: 100, height: 135, top: 590, left: 60, borderRadius: 20}}></Image>
       </View>
     </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
    height: "60%",
    width: "175%",
    right: 130,
    bottom: 50
  },
  whiteimg: {
    height: "100%",
    width: "100%",
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
    fontFamily: 'Fredoka',  
    fontSize: 25,
    position: "absolute",
    top: 250,
    left: 210 
   
  },
  positioning: {
    flexDirection: "row",
    left: 220,
    bottom: 450,
    position: "absolute",
  },
  Description: {
    // flexDirection: 'row',
    // top: -50,
    fontFamily: 'Mulish',  
    fontSize: 17,
    position: "absolute",
    top: 445,
    left: 39, 
    color: '#000000'
  },
  DescContainer: {
    top: 15
  },
  smallimgs: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  imagewht : {
    height: "200%",
    width: "100%",
    bottom: 205,
    borderRadius: 60,

  },
  list: {
    fontFamily: 'NotoSans',  
    fontSize: 20,
    position: "absolute",
    top: 355,
    left: 38, 
    color: '#deb887'
  },
  list1: {
    fontFamily: 'NotoSans',  
    fontSize: 20,
    position: "absolute",
    top: 385,
    left: 39, 
    color: '#deb887'
  },
  list2: {
    fontFamily: 'NotoSans',  
    fontSize: 20,
    position: "absolute",
    top: 415,
    left: 39, 
    color: '#deb887'
  },
  directorname : {
    fontFamily: 'Mulish',
    fontSize: 17,
    position: "absolute",
    top: 358,
    left: 125, 
  },
  writers: {
    fontFamily: 'Mulish',  
    fontSize: 17,
    position: "absolute",
    top: 388,
    left: 125, 
  },
  stars: {
    fontFamily: 'Mulish',  
    fontSize: 17,
    position: "absolute",
    top: 415,
    left: 110, 
    flexWrap: 'wrap'
  }
});
export default MovieDetails;
