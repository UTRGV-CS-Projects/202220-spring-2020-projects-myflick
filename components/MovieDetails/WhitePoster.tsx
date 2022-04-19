import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Colors, { themeColor, lightThemeColor } from "../../constants/Colors";

import useColorScheme from '../../hooks/useColorScheme';


const white_image = { uri: "https://wallpaperaccess.com/full/1586320.jpg" };


function WhitePoster() {
    const colorScheme = useColorScheme();
    return (
        <View style={[styles.imagewht, {backgroundColor: Colors[colorScheme].primary}]}></View>
    );
}

const styles = StyleSheet.create({
    imagewht: {
        height: "100%",
        width: "100%",
        bottom: 860,
        borderRadius: 60,
        
      },
})

export default WhitePoster;