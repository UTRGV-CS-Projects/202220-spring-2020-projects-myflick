import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function MovieInfo() {
    return (
      <>
        <Text style={styles.list}>Director:</Text>
        <Text style={styles.list1}>Writers:</Text>
        <Text style={styles.list2}>Stars:</Text>
        <View style={{flexDirection: 'row', position: 'absolute'}}>
       <Text style={styles.directorname}>Todd Phillips</Text>
          <Text style={styles.writers}>Todd Phillips, Scott Silver</Text>
       </View>
       <View style={{flexDirection: 'row', position: 'absolute'}} >
       <Text style={styles.stars} numberOfLines={1} ellipsizeMode='tail'>Joaquin Phoenix, Zazie Beets, Robert De Niro</Text>
       </View>
      </>
    );
}
const styles = StyleSheet.create({
    list: {
        fontSize: 20,
        position: "absolute",
        top: 380,
        left: 38,
        color: "#deb887",
      },
      list1: {
        fontSize: 20,
        position: "absolute",
        top: 410,
        left: 39,
        color: "#deb887",
      },
      list2: {
        fontSize: 20,
        position: "absolute",
        top: 440,
        left: 39,
        color: "#deb887",
      },
      directorname: {
        fontSize: 17,
        position: "absolute",
        top: 383,
        left: 125,
      },
      writers: {
        fontSize: 17,
        position: "absolute",
        top: 413,
        left: 125,
      },
      stars: {
        flex: 0.8,
        fontSize: 17,
        top: 443,
        left: 110,
        flexWrap: "wrap",
      },
})

export default MovieInfo;