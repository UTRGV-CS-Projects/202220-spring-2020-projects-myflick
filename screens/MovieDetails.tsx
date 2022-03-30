import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions } from "react-native";
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
import WhitePoster from "../components/MovieDetails/WhitePoster";
import Overview from "../components/MovieDetails/Overview";
import MovieInfo from "../components/MovieDetails/MovieInfo";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const white_image = { uri: "https://wallpaperaccess.com/full/1586320.jpg" };

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
        <WhitePoster />         
        <View style={{ flexDirection: 'row', position: 'absolute', alignSelf: 'flex-end', justifyContent: 'flex-end'}} >
       <Text style={styles.titletext} numberOfLines={4} ellipsizeMode='tail'>{title}</Text>
       </View>
        {/* <Text style={styles.release_year}>{release_date}</Text> */}

        {/* <Text style={styles.rating}>{vote_average}/10</Text> */}
        <MovieInfo />
        <Overview overview={overview}/>

        <View style={styles.morelike}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 25,
            color: `#708090`,
            alignSelf: 'center',
          }}
        >
          More Like This:{" "}
        </Text>
        </View>

        <View style={styles.movies}>      
      <Image source={dark_knight} style={{width: 100, height: 135, borderRadius: 20, marginRight: 5, marginBottom: 10}} />
      <Image source={ozark_poster} style={{width: 100, height: 135, borderRadius: 20, marginRight: 3, marginBottom: 10}} />
      <Image source={marriage_story} style={{width: 100, height: 135, borderRadius: 20, marginRight: 3, marginBottom: 10}} />
      
       </View>
      </ImageBackground>
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  morelike: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: 'red',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // marginTop: '50%',
    paddingTop: '100%',
    position: 'absolute'
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
  movies: {
    flex: 1, 
    position: 'absolute', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: 'red',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0

  },
  titletext: {
    flex: 0.70,
    flexWrap: 'wrap',
    fontSize: 25,
    color: "#4a4a4a",
    // backgroundColor: 'blue',
    bottom: 0,
    right: 0,
    left: 0,
    paddingRight: width * 0.05 ,
    paddingLeft: 30,
    top: height / 2.68

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
});
export default MovieDetails;
