import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
interface Props {
    overview ?: any
}

const Overview:React.FC<Props> = ({overview}) => {
    return (
        <View style={styles.movies}>
            <Text style={styles.Description} numberOfLines={7} ellipsizeMode='tail'>
            {overview}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Description: {
        // flexDirection: 'row',
        // top: -50,
        flex: 0.9,
        flexWrap: 'wrap',
        fontSize: 20,
        // color: "#000000",
        // backgroundColor: 'red',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignSelf: 'center',
        marginTop: '40%',
        paddingLeft: 15
   
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