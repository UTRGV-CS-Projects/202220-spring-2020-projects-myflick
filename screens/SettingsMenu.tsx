import { Animated, Dimensions, Modal, PanResponder, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "../components/Themed";
import { People } from "../db/db";
import { Chip } from "react-native-paper";
import { lightThemeColor, themeColor } from "../constants/Colors";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import LottieView from "lottie-react-native";
import ImagesSlider from "../components/PersonDetails/ImagesSlider";

const SettingsMenu = ({
    navigation,
}: RootStackScreenProps<"SettingsMenu">) => {
    const handleMySettings = () => {
        navigation.navigate("MySettings");
      };

    const handleMyDiscoverySettings = () => {
      navigation.navigate("MyDiscoverySettings");
    }
    return( 
    <View style={styles.container}>
        <View style={styles.overlay}>
                <Text style={styles.headerText}>Settings</Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width:"100%" ,
                    opacity: 0.2
                }}></View>
            
             <View style={styles.rows}>
                    <Ionicons
                    name="person-circle-outline"
                    size={35}
                    ></Ionicons>
             <TouchableOpacity onPress={handleMySettings}>
                <Text style={styles.optionsText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleMySettings}>
                <Ionicons
                    name="chevron-forward"
                    size={35}
                    ></Ionicons>
                    </TouchableOpacity>
             </View>

             <View style={styles.rows}>
                    <Ionicons
                    name="person-add-outline"
                    size={35}
                    ></Ionicons>
             <TouchableOpacity onPress={handleMyDiscoverySettings}>
             <Text style={styles.optionsText}>Edit Discovery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleMyDiscoverySettings}>
                <Ionicons
                    name="chevron-forward"
                    size={35}
                    ></Ionicons>
                    </TouchableOpacity>
             </View>

             <View style={styles.rows}>
                    <Ionicons
                    name="lock-closed-outline"
                    size={35}
                    ></Ionicons>
             <TouchableOpacity onPress={() => {}}>
             <Text style={styles.optionsText}>Privacy & Security</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                <Ionicons
                    name="chevron-forward"
                    size={35}
                    ></Ionicons>
                    </TouchableOpacity>
             </View>

             <View style={styles.rows}>
                    <Ionicons
                    name="log-out-outline"
                    size={35}
                    ></Ionicons>
             <TouchableOpacity onPress={() => {}}>
             <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                <Ionicons
                    name="chevron-forward"
                    size={35}
                    ></Ionicons>
                    </TouchableOpacity>
             </View>
             </View> 
                </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center", 
        marginTop: 570
      },
      headerText: {
        color: 'black',
        fontSize: 25,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 5,
        fontWeight: "bold",
        textAlign: "center"
      },
      optionsText: {
        color: 'black',
        fontSize: 20,
        paddingLeft: 20

      },
      logoutText:{
          color: 'red',
          fontSize: 20,
        paddingLeft: 20
      },
      rows:{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 12,
          paddingLeft: 10
      },
      overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: 5,
      },

})

export default SettingsMenu;
