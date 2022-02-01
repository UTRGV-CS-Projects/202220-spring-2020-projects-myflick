import React from "react";
import {ScrollView, StyleSheet, Text, View, Image,} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types";

const MyProfile = ({navigation}: RootStackScreenProps<"MyProfile">)  => {

    return(
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}> 
        <View style={styles.titleBar}> 
            <View>
                <Ionicons name="arrow-back" size={24} color="black"></Ionicons>
                <Text></Text>
                <Ionicons name="share-outline" size={24} color="black"></Ionicons>
            </View>

            <View style={{alignContent: "center"}}>
                <View style={styles.profileImage}>
                    <Image source={require('./my-icon.png')} />
                </View>
            </View>
        </View>

        

        </ScrollView>
    </SafeAreaView>
    )
}

export default MyProfile;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        blackgroundColor: "#fff",

    },
    titleBar:{

    },
    profileImage: {

    }






}
);