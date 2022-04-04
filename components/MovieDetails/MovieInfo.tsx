import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


function MovieInfo() {
    return (
     <View style={styles.container}>
  <Text style={styles.list}>Director:</Text>
        <Text style={styles.list1}>Writers:</Text>
        <Text style={styles.list2}>Stars:</Text>

        <View style={{ position: 'absolute'}}>
          <Text style={styles.directorname}>Todd Phillips</Text>
          <Text style={styles.writers}>Todd Phillips, Scott Silver</Text>
       </View>

       <View style={{ position: 'absolute'}} >
       <Text style={styles.stars} numberOfLines={1} ellipsizeMode='tail'>Joaquin Phoenix, Zazie Beets, Robert De Niro</Text>
       </View>
     </View>
      
     
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    },
    list: {
        fontSize: 20,
        position: "absolute",
        
        color: "#deb887",
      },
      list1: {
        fontSize: 20,
        position: "absolute",

        color: "#deb887",
      },
      list2: {
        fontSize: 20,
        position: "absolute",

        color: "#deb887",
      },
      directorname: {
        fontSize: 17,
        position: "absolute",

      },
      writers: {
        fontSize: 17,
        position: "absolute",

      },
      stars: {
        flex: 0.8,
        fontSize: 17,
        flexWrap: "wrap",
      },
})

export default MovieInfo;