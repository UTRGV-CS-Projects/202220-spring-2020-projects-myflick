import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
  Modal,
  Alert,
} from "react-native";
import PropTypes from "prop-types";
import Colors, { themeColor } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { AntDesign } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const placeHolderImage = require("../assets/images/placeholder.png");
const propTypes = {
  item: PropTypes.object,
};

const Card = (props: { item: any; parentCallBack: any }) => {
  const { item, parentCallBack } = props;
  const [state, setState] = useState(false);
  const colorScheme = useColorScheme();

  const getFavorites = () => {
    if (!state) {
      const movieString = item.id;
      console.log(movieString);
      props.parentCallBack(movieString);
    }
    setState(!state);
  };
  return (
    <View style={styles.container}>
      {state ? (
        <View
          style={[
            styles.favourite,
            { backgroundColor: Colors[colorScheme].primary },
          ]}
        >
          <AntDesign name="heart" size={24} color={themeColor} />
        </View>
      ) : (
        <View
          style={[
            styles.favourite,
            { backgroundColor: Colors[colorScheme].opposite },
          ]}
        >
          <AntDesign name="hearto" size={24} color={themeColor} />
        </View>
      )}
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item.poster_path
            ? { uri: "https://image.tmdb.org/t/p/w500" + item.poster_path }
            : placeHolderImage
        }
      />

      {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 180,
    marginLeft: 10,
  },
  image: {
    height: 150,
    width: 110,
    borderRadius: 10,
  },
  movieName: {
    position: "absolute",
    width: "80%",
    textAlign: "center",
    top: 30,
    color: "black",
  },
  movieName2: {
    color: "white",
  },
  favourite: {
    textAlign: "center",
    width: 28,
    top: 0,
    right: 0,
    position: "absolute",
    opacity: 1,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    zIndex: 1000,
  },
});

Card.propTypes = propTypes;

export default Card;
