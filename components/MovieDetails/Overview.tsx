import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
interface Props {
    overview ?: any
}

const Overview:React.FC<Props> = ({overview}) => {
    return (
        <View style={{flexDirection: 'row', position: 'absolute',}}>
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
        fontSize: 17,
        top: 487,
        left: 39,
        color: "#000000",
      },
})

export default Overview;