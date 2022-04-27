import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, Text, View } from "../Themed";
import React, { useRef, useState, useEffect } from "react";
import Swiper from "react-native-deck-swiper";
import { Button } from "react-native-elements";
import Colors, { themeColor } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { EvilIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import MovieCard from "./MovieCard";
import { overlay } from "react-native-paper";
import { MovieCardType, PeopleDetailsType } from "../../db/db";
import PeopleCard from "./PeopleCard";
import { People } from "../../db/db";
import { fetchDiscovery, fetchGenres } from "../../apis/movies";
import { GenresType } from "../../types";

interface props {
  useMovie: boolean;
  usePerson: boolean;
}

const SwipingComponent = ({ useMovie, usePerson }: props) => {
  useEffect(() => {
    if (useMovie) {
      fetchMovieGenres();
      fetchMoviesDiscovery();
    } else {
    }
  }, []);

  const fetchMoviesDiscovery = async () => {
    const response = await fetchDiscovery();
    const movies: MovieCardType[] = response.results;
    /* or (const movie of movies) {
		if(movie.poster_path!=null)
		{
			
		}
	} */
    setMovies(movies);
    // console.log(movies);
  };

  const fetchMovieGenres = async () => {
    const response = await fetchGenres();
    //console.log("genres", response.genres);
    setGlobalGenres(response.genres);
  };

  const Peoplex = People;

  const colorScheme = useColorScheme();
  const heart = useRef<LottieView>(null);
  const star = useRef<LottieView>(null);
  const useSwiper = useRef<Swiper<MovieCardType>>(null);
  const useSwiperPeople = useRef<Swiper<PeopleDetailsType>>(null);
  const isLikeFirstRun = useRef(true);
  const isSuperLikeFirstRun = useRef(true);

  const [isLiked, setIsLiked] = useState(false);
  const [isSuperLiked, setIsSuperLiked] = useState(false);
  const [showOverlayLabel, setShowOverlayLabel] = useState(false);
  const [OverlayLabelColor, setOverlayLabelColor] = useState("transparent");
  const [OverlayLabelText, setOverlayLabelText] = useState("Change This");
  const [movies, setMovies] = useState<MovieCardType[]>([]);
  const [globalGenres, setGlobalGenres] = useState<GenresType[]>([]);
  const [loading, setLoading] = useState(true);

  const overlayTrigger = (
    setShow: boolean,
    setColor: string,
    setText: string
  ) => {
    setShowOverlayLabel(setShow);
    setOverlayLabelColor(setColor);
    setOverlayLabelText(setText);
  };

  const delay = (ms: number | undefined) =>
    new Promise((res) => setTimeout(res, ms));

  const handleSwipeLeft = () => {};
  const handleSwipeRight = () => {};
  const handleSwipeTop = () => {};

  useEffect(() => {
    if (isLikeFirstRun.current) {
      if (isLiked) {
        heart.current?.play(75, 75);
      } else {
        heart.current?.play(0, 0);
      }
      isLikeFirstRun.current = false;
    } else if (isLiked) {
      heart.current?.play(0, 75);
    } else {
      heart.current?.play(10, 0);
    }
  }, [isLiked]);

  useEffect(() => {
    if (isSuperLikeFirstRun.current) {
      if (isSuperLiked) {
        star.current?.play(120, 120);
      } else {
        star.current?.play(0, 0);
      }
      isSuperLikeFirstRun.current = false;
    } else if (isSuperLiked) {
      star.current?.play(40, 120);
    } else {
      star.current?.play(10, 0);
    }
  }, [isSuperLiked]);

  const btnSwipeLeft = async () => {
    let useSwiperPtr;
    if (useMovie) useSwiperPtr = useSwiper;
    else useSwiperPtr = useSwiperPeople;

    if (useSwiperPtr.current) {
      //let useSwiperPtr = console.log(useSwiper.current);
      setShowOverlayLabel(true);
      setOverlayLabelColor("red");
      setOverlayLabelText("NOPE");
      overlayTrigger(true, "red", "NOPE");

      await delay(800);

      setShowOverlayLabel(false);
      setOverlayLabelColor("transparent");

      useSwiperPtr.current.swipeLeft();
    }
  };

  const btnSwipeRight = async () => {
    let useSwiperPtr;
    if (useMovie) useSwiperPtr = useSwiper;
    else useSwiperPtr = useSwiperPeople;

    if (useSwiperPtr.current) {
      overlayTrigger(true, "#2FEB5D", "LIKE");

      await delay(800);

      setShowOverlayLabel(false);
      setOverlayLabelColor("transparent");

      useSwiperPtr.current.swipeRight();
      setIsLiked(false);
    }
  };

  const btnSwipeTop = async () => {
    let useSwiperPtr;
    if (useMovie) useSwiperPtr = useSwiper;
    else useSwiperPtr = useSwiperPeople;

    if (useSwiperPtr.current) {
      overlayTrigger(true, "#35C3E7", "MUST WATCH");
      if (!useMovie) overlayTrigger(true, "#35C3E7", "SUPER LIKE");
      await delay(800);

      setShowOverlayLabel(false);
      setOverlayLabelColor("transparent");

      useSwiperPtr.current.swipeTop();
      setIsSuperLiked(false);
    }
  };

  useEffect(() => {
    if (movies.length > 1) {
      setLoading(false);
    }
  }, [movies]);

  const renderMovieSwiper = () => {
    return !loading ? (
      <Swiper
        ref={useSwiper}
        cards={movies}
        keyExtractor={(item) => item.id}
        renderCard={(card) => {
          return <MovieCard card={card} genres={globalGenres} />;
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
          if (cardIndex == 10) {
            //call api
          }
        }}
        onSwipedAll={() => {}}
        cardIndex={0}
        backgroundColor={Colors[colorScheme].secondary}
        stackSize={2}
        showSecondCard={true}
        horizontalThreshold={100}
        stackSeparation={-20}
        animateCardOpacity={true}
        animateOverlayLabelsOpacity={true}
        infinite={false}
        onSwipedLeft={handleSwipeLeft}
        onSwipedRight={handleSwipeRight}
        onSwipedTop={handleSwipeTop}
        disableBottomSwipe={true}
        overlayLabels={{
          left: {
            title: "NOPE",
            style: {
              label: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "red",
                color: "red",
                borderWidth: 3,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: -30,
              },
            },
          },
          right: {
            title: "LIKE",
            style: {
              label: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "#2FEB5D",
                color: "#2FEB5D",
                borderWidth: 2.5,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: 30,
              },
            },
          },
          top: {
            title: "MUST WATCH",
            style: {
              label: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "#35C3E7",
                color: "#35C3E7",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 560,
                marginLeft: 30,
              },
            },
          },
        }}
      />
    ) : null;
  };

  const renderPeopleSwiper = () => {
    return (
      <Swiper
        ref={useSwiperPeople}
        cards={Peoplex}
        keyExtractor={(item) => item.id}
        renderCard={(card) => {
          return <PeopleCard card={card} />;
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        cardIndex={0}
        backgroundColor={Colors[colorScheme].secondary}
        stackSize={2}
        showSecondCard={true}
        horizontalThreshold={100}
        stackSeparation={-20}
        animateCardOpacity={true}
        animateOverlayLabelsOpacity={true}
        infinite={true}
        onSwipedLeft={handleSwipeLeft}
        onSwipedRight={handleSwipeRight}
        onSwipedTop={handleSwipeTop}
        disableBottomSwipe={true}
        overlayLabels={{
          left: {
            title: "NOPE",
            style: {
              label: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "red",
                color: "red",
                borderWidth: 3,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: -30,
              },
            },
          },
          right: {
            title: "LIKE",
            style: {
              label: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "#2FEB5D",
                color: "#2FEB5D",
                borderWidth: 2.5,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: 30,
              },
            },
          },
          top: {
            title: "NEED TO WATCH",
            style: {
              label: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "#35C3E7",
                color: "#35C3E7",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 560,
                marginLeft: 30,
              },
            },
          },
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {useMovie && !loading
        ? renderMovieSwiper()
        : usePerson && !loading
        ? renderPeopleSwiper()
        : null}
      {showOverlayLabel ? (
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            paddingTop: 100,
            marginLeft: -100,
            position: "absolute",
            backgroundColor: "transparent",
            zIndex: 0,
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 45,
              fontWeight: "bold",
              borderRadius: 10,
              padding: 10,
              overflow: "hidden",
              backgroundColor: "rgba(0, 0, 0, 0)",
              borderColor: OverlayLabelColor,
              color: OverlayLabelColor,
              borderWidth: 3,
              opacity: 1,
            }}
          >
            {OverlayLabelText}
          </Text>
        </View>
      ) : (
        <></>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity testID="left" onPress={btnSwipeLeft}>
          <View style={[styles.bubble, { borderColor: "#FD484E" }]}>
            <EvilIcons
              name="close"
              size={45}
              color={themeColor}
              style={styles.cross}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity testID="middle" onPress={btnSwipeTop}>
          <View style={[styles.bubble, { borderColor: "#35C3E7" }]}>
            <LottieView
              ref={star}
              loop={false}
              source={require("../../assets/lotties/star.json")}
              style={styles.star}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity testID="right" onPress={btnSwipeRight}>
          <View style={[styles.bubble, { borderColor: "#2FEB5D" /*#FD484E*/ }]}>
            <LottieView
              ref={heart}
              loop={false}
              source={require("../../assets/lotties/heart.json")}
              style={styles.heart}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SwipingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    alignContent: "center",
    top: 660,
  },
  bubble: {
    position: "relative",
    width: 80,
    height: 80,
    borderRadius: 40,
    //shadowColor: "red",

    borderWidth: 0.8,
    backgroundColor: "rgba(0, 0, 0, 0)",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  heart: { width: 70, height: 70, paddingLeft: 2, paddingTop: 3 },
  star: {
    position: "absolute",
    alignSelf: "center",
    bottom: "-11%",
    width: 160,
    height: 160,
    paddingLeft: 2,
    paddingTop: 3,
    padding: 1,
  },
  cross: {
    paddingLeft: 18,
    paddingTop: 22,
  },
});
