import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, FlatList, ScrollView} from 'react-native';
import Movie from './Movie';

const API_KEY = 'c72cc91d'

const series = ['avengers', 'star wars','batman','harry potter']
const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
  };
const Movies: React.FC = props => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
       const promises = series.map(series => {
            return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=${API_KEY}`)
            .then(res => res.json())
        })

        Promise.all(promises).then((movies:any) => {
                setMovies(movies.map((movie:any) => movie.Search))
            })
    }, [])

    const list = () => {
        return movies.flat(2).map((movie: any, pos)=>{
            return(
                <View>
                    <Movie key={movie.imdbID} title={movie.Title} year={movie.Year} image={movie.Poster}/>
                </View>
            );
        })
    }

    return(
        <View>
        
  <ScrollView>
  {list()}
  </ScrollView>
            <Text style={{left: 50, top: 50}}>This is a test</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})
export default Movies;