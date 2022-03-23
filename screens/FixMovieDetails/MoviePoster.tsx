import React from 'react';
import {View, Text, StyleSheet, Image, Modal, TouchableHighlight} from 'react-native';
import ImageTapModal from '../../Comps/ImageTapModal';

const image = { uri: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" };

interface Props {
    img ?: any
}



const MoviePoster:React.FC<Props> = ({img}) => {

    return ( 
            <ImageTapModal image={image}  />
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    poster: {
        height: 220,
        width: 150,
        borderRadius: 25,
        bottom: 400,
        position: "absolute",
        left: 40,
      },
})

export default MoviePoster;