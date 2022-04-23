import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors, { themeColor } from "../constants/Colors";
import Background from "../components/Match/Background";
import LottieView from "lottie-react-native";
import { MatchParamList, RootTabScreenProps } from "../types";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BackgroundImage } from "react-native-elements/dist/config";
import MoviePoster from "../components/MovieDetails/MoviePoster";
import { useFonts } from "expo-font";
import { color } from "react-native-elements/dist/helpers";
import WhitePoster from "../components/MovieDetails/DetailsBackground";
import Overview from "../components/MovieDetails/Overview";
import MovieInfo from "../components/MovieDetails/MovieInfo";
import DetailsPoster from "../components/MovieDetails/DetailsBackground";
import ImageTapModal from "../components/ImageTapModalFile/ImageTapModal";
import { Text } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import FastImage from 'react-native-fast-image';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


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

const bohoraps = {
  uri: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/bohemian-rhapsody-web.jpg",
};

function MovieDetails({
  navigation,
  route,
}: RootTabScreenProps<"MovieDetails">) {
  const { title, poster_path, release_date, overview, vote_average, genres } =
    route.params;
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.whiteimg} source={white_image}>
        <MoviePoster image={poster_path} />

        <Image
          style={styles.image}
          blurRadius={4}
          source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
        />

        <DetailsPoster />

        <Text
          style={[styles.titletext, { color: Colors[colorScheme].text }]}
          numberOfLines={2}
        >
          {title}
        </Text>
        <View style={styles.detailsSection}>
          {/* <View style={{flexDirection: "row", flexWrap: 'wrap'}}>  */}
          <Ionicons
            name="calendar-sharp"
            size={15}
            color={Colors[colorScheme].opposite}
            style={{ marginTop: 330, marginLeft: 35, opacity: 0.6 }}
          ></Ionicons>
          <Text
            style={[
              styles.release_year,
              { color: Colors[colorScheme].opposite },
            ]}
          >
            {release_date}
          </Text>

          <Ionicons
            name="star"
            size={15}
            color={Colors[colorScheme].opposite}
            style={{ marginTop: 330, marginLeft: 100, opacity: 0.6 }}
          ></Ionicons>
          <Text
            style={[styles.rating, { color: Colors[colorScheme].opposite }]}
          >
            {vote_average}/10
          </Text>
          {/* </View> */}
        </View>

        <MovieInfo />

        <Text
          style={{
            marginTop: 450,
            marginLeft: 10,
            fontSize: 25,
            position: "absolute",
            color: Colors[colorScheme].text,
            fontWeight: "700",
          }}
        >
          Description
        </Text>
        <Overview overview={overview} />

        <View style={styles.morelike}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 25,
              color: Colors[colorScheme].text,
              marginLeft: 10,
              marginTop: 680,
            }}
          >
            More Like This
          </Text>
        </View>

        <View style={styles.movies}>
          <Image
            source={dark_knight}
            style={{
              width: 90,
              height: 135,
              borderRadius: 10,
              marginRight: 9,
              marginBottom: 10,
            }}
          />
          <Image
            source={ozark_poster}
            style={{
              width: 90,
              height: 135,
              borderRadius: 10,
              marginRight: 9,
              marginBottom: 10,
            }}
          />
          <Image
            source={marriage_story}
            style={{
              width: 90,
              height: 135,
              borderRadius: 10,
              marginRight: 9,
              marginBottom: 10,
            }}
          />
          <Image
            source={bohoraps}
            style={{
              width: 90,
              height: 135,
              borderRadius: 10,
              marginRight: 9,
              marginBottom: 10,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  morelike: {
    flex: 1,
    flexDirection: "row",
    //justifyContent: 'center',
    alignItems: "flex-end",
    // backgroundColor: 'red',
    // marginTop: '50%',
    //paddingTop: '100%',
    position: "absolute",
  },
  image: {
    height: "60%",
    width: "100%",

    bottom: 225,
  },
  whiteimg: {
    height: "100%",
    width: "100%",
  },
  movies: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    marginTop: 720,
    marginLeft: 10,
    // backgroundColor: 'red',
  },
  titletext: {
    //flex: 0.70,
    //flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 25,
    //backgroundColor: 'blue',
    fontWeight: "700",
    //paddingRight: width * 0.05 ,
    //paddingLeft: 30,
    //paddingRight: 10,
    marginRight: 5,
    marginLeft: 170,
    paddingLeft: 5,
    top: height / 2.58,
    position: "absolute",
  },
  release_year: {
    fontSize: 16,
    position: "absolute",
    top: 330,
    left: 60,
    opacity: 0.6,
  },
  rating: {
    fontSize: 16,
    position: "absolute",
    top: 330,
    left: 175,
    opacity: 0.6,
  },
  detailsSection: {
    marginLeft: 135,
    paddingLeft: 5,
    marginTop: 70,
    paddingRight: 10,
    position: "absolute",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor: "red"
  },
});
export default MovieDetails;
