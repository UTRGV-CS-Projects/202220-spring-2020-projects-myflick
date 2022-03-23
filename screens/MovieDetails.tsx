import React from "react";
import {View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors, { themeColor } from "../constants/Colors";
import Background from "../components/Match/Background";
import LottieView from "lottie-react-native";
import { MatchParamList, RootTabScreenProps } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BackgroundImage } from "react-native-elements/dist/config";
import MoviePoster from "../components/MovieDetails/MoviePoster";
import { useFonts } from "expo-font";
import { color } from "react-native-elements/dist/helpers";
//import { View, Text, SafeAreaView } from "../components/Themed";
const white_image = { uri: "https://wallpaperaccess.com/full/1586320.jpg" };

const image = { uri: "https://wallpaperaccess.com/full/1508305.jpg" };

const poster = {
  uri: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
};
const ozark_poster = {
  uri: "https://m.media-amazon.com/images/M/MV5BNGY3MmUzNjktZWEzNi00ODdiLTk4ZDItZjBhMjZlYzI0NTJjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
};

const dark_knight = {
  uri: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
};

const marriage_story = {
  uri: "https://soleposter.com/image/cache/catalog/poster/9587/9587-550x550h.jpg",
};


function MovieDetails({
  navigation,
  route,
}: RootTabScreenProps<"MovieDetails">) {
  const { title, poster_path, release_date, overview, vote_average } =
    route.params;

  return (
    <View style={styles.container}>
       <ImageBackground style={styles.whiteimg} source={white_image}>
        <Image
          style={styles.image}
          source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
        ></Image>
        <Image style={styles.imagewht} source={white_image}></Image>
        <MoviePoster image={poster_path} />

        
        <Text style={styles.titletext}>{title}</Text>
        <Text style={styles.release_year}>{release_date}</Text>
        <Text style={styles.rating}>{vote_average}/10</Text>
       

        <Text style={styles.list}>Director:</Text>
        <Text style={styles.list2}>Cast:</Text>
        <Text style={styles.list3}>Genre:</Text>
        {/* <Text style={styles.directorname}>Todd Phillips</Text>
        <Text style={styles.stars}>
          Joaquin Phoenix, Zazie Beetz, Robert De Niro
        </Text> */}
        <Text style={styles.Description} numberOfLines={7}>
          {overview}
        </Text>
        
       <Text style={styles.morelikethis}>More Like This</Text>
        <View style={styles.recommendations}>
          <Image
            source={dark_knight}
            style={{
              width: 100,
              height: 135,
              top: 590,
              left: 40,
              borderRadius: 20,
            }}
          ></Image>
          <Image
            source={ozark_poster}
            style={{
              width: 100,
              height: 135,
              top: 590,
              left: 50,
              borderRadius: 20,
            }}
          ></Image>
          <Image
            source={marriage_story}
            style={{
              width: 100,
              height: 135,
              top: 590,
              left: 60,
              borderRadius: 20,
            }}
          ></Image>
        </View>
       </ImageBackground> 
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "white",
  },
  box: {
    width: 25,
    height: 25,
    flexDirection: "row",
    top: 210,
    left: 22,
    justifyContent: "space-between",
  },
  image: {
    height: "60%",
    width: "100%",
    top: 0,
  },
  whiteimg: {
    height: "100%",
    width: "100%",
  }, 
  /* poster: {
    height: 220,
    width: 150,
    borderRadius: 20,
    paddingLeft: 10,
    //bottom: 400,
    position: "absolute",
    //left: 30,
  }, */
  titletext: {
    fontSize: 25,
    position: "absolute",
    top: 270,
    left: 170,
    paddingTop: 70, 
    paddingRight: 10,
    flexWrap: "wrap",
    color: "#4a4a4a"
  },
  release_year: {
    fontSize: 16,
    opacity: 0.8,
    position: "absolute",
    top: 365,
    left: 170,
    color: "#4a4a4a"
  },
  rating: {
    fontSize: 16,
    opacity: 0.8,
    position: "absolute",
    top: 365,
    left: 290,
    color: "#4a4a4a"
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
    fontSize: 17,
    position: "absolute",
    top: 500,
    left: 10,
    right: 10,
    color: "#4a4a4a"
    
  },
 /*  DescContainer: {
    //top: 15,
  }, */
 /*  smallimgs: {
    //width: 50,
    //height: 50,
    resizeMode: "contain",
  }, */
  imagewht: {
    height: "200%",
    width: "100%",
    bottom: 205,
    borderRadius: 40,
  },
  list: {
    fontSize: 20,
    position: "absolute",
    top: 400,
    left: 170,
    color: themeColor,
  },
  list2: {
    fontSize: 20,
    position: "absolute",
    top: 425,
    left: 170,
    color: themeColor,
  },
  list3: {
    fontSize: 20,
    position: "absolute",
    top: 450,
    left: 170,
    color: themeColor,
  },
  directorname: {
    fontSize: 17,
    position: "absolute",
    top: 385,
    left: 325,
  },
  stars: {
    fontSize: 12,
    position: "absolute",
    top: 455,
    left: 180,
    flexWrap: "wrap",
  },
  recommendations: {
    flexDirection: "row", 
    position: "absolute", 
    paddingTop: 120
  },
  morelikethis: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 670,
    left: 10,
    color: "#4a4a4a"
  }
});
export default MovieDetails;
