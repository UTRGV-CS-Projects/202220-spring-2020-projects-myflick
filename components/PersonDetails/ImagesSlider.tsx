import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { lightThemeColor, themeColor } from "../../constants/Colors";
import { ImagesSliderParamsList } from "../../types";
import { PeopleDetailsType } from "../../db/db";

const ImagesSlider = ({ person }: ImagesSliderParamsList) => {
  return (
    <Swiper
      style={styles.wrapper}
      autoplay={true}
      showsButtons={false}
      activeDotColor={themeColor}
      dotColor={lightThemeColor}
      containerStyle={{
        backgroundColor: "transparent",
        width: "100%",
      }}
    >
      {person.images!.length > 0 ? (
        person.images!.map((image, index) => {
          return (
            <Image
              key={index}
              style={styles.profilePicture}
              resizeMode="cover"
              source={{ uri: image }}
            ></Image>
          );
        })
      ) : (
        <Image
          style={styles.profilePicture}
          resizeMode="cover"
          source={{ uri: person.profileImage }}
        ></Image>
      )}
    </Swiper>
  );
};

export default ImagesSlider;

const styles = StyleSheet.create({
  wrapper: {},
  profilePicture: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
});
