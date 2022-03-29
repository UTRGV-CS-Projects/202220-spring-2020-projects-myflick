import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const white_image = { uri: "https://wallpaperaccess.com/full/1586320.jpg" };


function WhitePoster() {
    return (
        <Image style={styles.imagewht} source={white_image}></Image>
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

export default WhitePoster;