import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { themeColor } from "../constants/Colors";
import Background from "../components/Match/Background";
import LottieView from "lottie-react-native";
import { MatchParamList, RootTabScreenProps } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
      <View>
 <ImageBackground style={styles.whiteimg} source={white_image}>
      <MoviePoster image={poster_path} />
        <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}/>
        <Image style={styles.imagewht} source={white_image}></Image>
     
        <View style={{ flexDirection: 'row', position: 'absolute'}} >
        
       <Text style={styles.titletext} numberOfLines={3} ellipsizeMode='tail'>{title}</Text>
       </View>
        {/* <Text style={styles.release_year}>{release_date}</Text> */}

        {/* <Text style={styles.rating}>{vote_average}/10</Text> */}

        <Text style={styles.list}>Director:</Text>
        <Text style={styles.list1}>Writers:</Text>
        <Text style={styles.list2}>Stars:</Text>
        <View style={{flexDirection: 'row', position: 'absolute'}}>
       <Text style={styles.directorname}>Todd Phillips</Text>
          <Text style={styles.writers}>Todd Phillips, Scott Silver</Text>
       </View>
       <View style={{flexDirection: 'row', position: 'absolute'}} >
       <Text style={styles.stars} numberOfLines={1} ellipsizeMode='tail'>Joaquin Phoenix, Zazie Beets, Robert De Niro</Text>
       </View>
        <View style={{flexDirection: 'row', position: 'absolute',}}>
        <Text style={styles.Description} numberOfLines={7} ellipsizeMode='tail'>
          {overview}
        </Text>
        </View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 25,
            color: `#708090`,
            position: "absolute",
            top: 595,
            left: 40,
          }}
        >
          More Like This:{" "}
        </Text>
        <View style={{position: 'absolute', flexDirection: 'row', top: 45}}>      
      <Image source={dark_knight} style={{width: 100, height: 135,top: 590, left: 40, borderRadius: 20,}}></Image>
      <Image source={ozark_poster} style={{width: 100, height: 135, top: 590, left: 50, borderRadius: 20}}></Image>
      <Image source={marriage_story} style={{width: 100, height: 135, top: 590, left: 60, borderRadius: 20}}></Image>
      
       </View>
      </ImageBackground>
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
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
    right: 0,
    bottom: 225
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
    flex: 0.65,
    flexWrap: 'wrap',
    fontSize: 25,
    top: 290,
    left: 200,
    color: "#4a4a4a"
  },
  release_year: {
    fontSize: 16,
    opacity: 0.8,
    position: "absolute",
    top: 320,
    left: 210,
  },
  rating: {
    fontSize: 16,
    opacity: 0.8,
    position: "absolute",
    top: 340,
    left: 210,
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
    flex: 0.9,
    flexWrap: 'wrap',
    fontSize: 17,
    top: 450,
    left: 39,
    color: "#000000",
  },
  DescContainer: {
    top: 15,
  },
  smallimgs: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  imagewht: {
    height: "200%",
    width: "100%",
    bottom: 420,
    borderRadius: 60,
  },
  list: {
    fontSize: 20,
    position: "absolute",
    top: 360,
    left: 38,
    color: "#deb887",
  },
  list1: {
    fontSize: 20,
    position: "absolute",
    top: 390,
    left: 39,
    color: "#deb887",
  },
  list2: {
    fontSize: 20,
    position: "absolute",
    top: 420,
    left: 39,
    color: "#deb887",
  },
  directorname: {
    fontSize: 17,
    position: "absolute",
    top: 363,
    left: 125,
  },
  writers: {
    fontSize: 17,
    position: "absolute",
    top: 393,
    left: 125,
  },
  stars: {
    flex: 0.8,
    fontSize: 17,
    top: 423,
    left: 110,
    flexWrap: "wrap",
  },
});
export default MovieDetails;
