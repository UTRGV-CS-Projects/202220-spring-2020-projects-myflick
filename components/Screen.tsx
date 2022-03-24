import React from 'react';
import Constants from 'expo-constants';
import {StyleSheet, View} from 'react-native';
import { SafeAreaView } from 'react-native';

interface Props {
    children: any,
    style: any,
}

const Screen: React.FC<Props> = ({children, style}) => {
    return (
        <SafeAreaView style={[style, styles.screen]} >
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1
    }
})

export default Screen;