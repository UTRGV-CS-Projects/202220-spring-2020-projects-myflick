import React, { useState } from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View, Modal, Alert} from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import Colors, { themeColor } from '../constants/Colors';
import useColorScheme from "../hooks/useColorScheme";


const placeHolderImage = require('../assets/images/placeholder.png');
const propTypes = {
  item: PropTypes.object,
 
};

const Card = (props: {item: any;}) => {
  const { item} = props;
  const [state, setState] = useState(false);
  const colorScheme = useColorScheme();

  const getFavorites = () => {
    if(!state){
      const movieString = item.poster_path;
      console.log(movieString);
    }
    setState(!state);
  };
  return (
    
   <View style={styles.container}>    
 
           <MaterialCommunityIcons
            style={[styles.favourite, {backgroundColor: Colors[colorScheme].primary}]}
            name={state ? 'heart' : 'heart-outline'}
            size={24}
            color= {themeColor}
            onPress={getFavorites}
          /> 
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item.poster_path
            ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
            : placeHolderImage
        }
      />
      
      {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
    </View>

    
  );

};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
    height: 180,
    marginLeft: 10, 
  },
  image: {
    height: 150,
    width: 110,
    borderRadius: 10,
    
  },
  movieName: {
    position: 'absolute',
    width: '80%',
    textAlign: 'center',
    top: 30,
    color: "black"
  },
  movieName2: {
      color: "white"
  },
  favourite: {
    textAlign: 'center',
    width: 28,
    top: 4,
    right: 0,
    position: 'absolute',
    marginRight: 10,
    opacity: 0.9,
    borderRadius: 5,
    zIndex: 1000,
  },
});

Card.propTypes = propTypes;

export default Card;

