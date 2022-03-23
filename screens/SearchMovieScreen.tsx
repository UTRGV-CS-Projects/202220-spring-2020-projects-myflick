import React,{useState, useEffect} from 'react';
import { View, StyleSheet, Text, Button, TextInput, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import axios from 'axios';
import AppButton from '../components/AppButton';

const API_KEY = 'c72cc91d'
// http://www.omdbapi.com/?apikey=c72cc91d

interface Props {
    navigation: any,
}

const SearchMovieScreen:React.FC<Props> = ({navigation}) => {

  const apiUrl = "http://www.omdbapi.com/?apikey=c72cc91d"
  const [state, setState] = useState<any>({
    s: "",
    results: [],
    selected: {}
  })

  const search = () => {
    axios(apiUrl + "&s=" + state.s).then(({data}) => {
        let results = data.Search
        setState((prevState: any)=> {
            return {...prevState, results: results}
        })
    })
}

  return (
    <View style={styles.container}>
        <CustomTextInput placeholder="Search Movie" onChangeText={(text: any) => setState((prevState: any) => {
            return {...prevState, s: text }
        })} 
        onSubmitEditing={search}
        value={state.s}
        />


        <ScrollView>
        {state.results.map((result: any) => (
                <TouchableHighlight key={result.imdbID}>
                <View style={styles.result}>
                    <Image source={{uri: result.Poster}} style={{
                        width: '100%',
                        height: 300
                    }}
                    resizeMode="cover"/>
                    <Text style={styles.heading}>{result.Title}</Text>
                    <AppButton title='Movie Info' onPress={() => navigation.navigate('MovieDetails', {
                        movieTitle: result.Title,
                        poster: result.Poster,
                        rating: result.imdbRating
                    })}/>
                </View>
                </TouchableHighlight>
            ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 70,
    paddingHorizontal: 20
},
result: {
    flex: 1,
    width: '100%',
    marginBottom: 20
},
heading: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    padding: 20,
    backgroundColor: '#445565'
},

});

export default SearchMovieScreen;