import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
interface Props {
    overview ?: any
}

const Overview:React.FC<Props> = ({overview}) => {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.movies}>
            <Text style={[styles.Description, {color: Colors[colorScheme].opposite}]} numberOfLines={8} ellipsizeMode='tail'>
            {overview}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Description: {
        // flexDirection: 'row',
        // top: -50,
        //flex: 0.9,
        flexWrap: 'wrap',
        fontSize: 18,
        // color: "#000000",
        // backgroundColor: 'red',
       opacity: 0.6,
        alignSelf: 'flex-start',
        //position: "absolute",
        //marginTop: '40%',
        marginTop: 480,
        marginLeft: 10, 
        marginRight: 10
   
      },
      movies: {
        flex: 1, 
        position: 'absolute', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: 'red',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    
      },
})

export default Overview;