import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

const white_image = { uri: "https://wallpaperaccess.com/full/1586320.jpg" };


function DetailsPoster() {
    const colorScheme = useColorScheme();
    return (
        <View style={[styles.imagewht, {backgroundColor: Colors[colorScheme].primary}]}></View>
    );
}

const styles = StyleSheet.create({
    continer :{

    },
    imagewht: {
        height: "200%",
        width: "100%",
        bottom: 420,
        borderRadius: 60,
      },
})

export default DetailsPoster;