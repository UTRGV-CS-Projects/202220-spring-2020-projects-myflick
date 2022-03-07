import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView, StatusBar} from 'react-native';

interface Props {
    key: any;
    title: string;
    image: string;
    year: string;
}

const image = {uri: 'https://m.media-amazon.com/images/M/MV5BNTZkNWEyZTgtYzJlOS00OWNiLTgwZjMtZGU5NTRhNDNjOTRhXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg'}


const Movie: React.FC<Props> = ({key, title, image, year}) => {
    console.log(image)
    console.log(typeof(image))
    return(
        <View style={styles.container}>
            <View >
                    <Image style={styles.image} source={{uri: (image)}}></Image>
                    <Text>{year}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    image: {
        width: 150,
        height: 150,
    },
    scrollView : {
        backgroundColor: 'pink',
        marginHorizontal: 20,
        flexDirection: 'row'
    }
})
export default Movie;