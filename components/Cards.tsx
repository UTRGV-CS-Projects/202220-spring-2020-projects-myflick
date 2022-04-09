import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';



const placeHolderImage = require('../assets/images/placeholder.png');

const propTypes = {
  item: PropTypes.object,
};



const Card = (props: { navigation: any; item: any; }) => {
  const {navigation, item} = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetails', {movieID: item.id})}
      
      style={styles.container}>
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
    </TouchableOpacity>
    
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
  }
});

Card.propTypes = propTypes;

export default Card;