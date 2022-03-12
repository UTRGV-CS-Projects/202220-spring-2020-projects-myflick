import React, { useEffect, useState, Component } from "react";
import {
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
  SectionList,
  Alert,
  VirtualizedList,
  TextInput,
  TextInputProps,
  Touchable,
  Button,
  Switch,
} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import { themeColor, lightThemeColor } from "../constants/Colors";
import { MyProfileSections } from "../db/db";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import { parseSync } from "@babel/core";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { red200 } from "react-native-paper/lib/typescript/styles/colors";
import { color } from "react-native-elements/dist/helpers";
import Background from "../components/Match/Background";

const MyDiscoverySettings = ({ 
    navigation, }: RootStackScreenProps<"MyDiscoverySettings">) => {

//const [range, setRange] = useState(0);
const [multiSliderValue, setMultiSliderValue] = useState([0, 1])
const multiSliderValuesChange = (values:any) => setMultiSliderValue(values)

const [range, setRange] = useState(1);
const singleSliderValueChange = (values2: any) => setRange(values2)

const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return( 
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => { navigation.navigate("MyProfile")}}><Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title1}>Discovery</Text> 
          <TouchableOpacity onPress={() => {}}>
          <Text style={styles.saveButton}>Save</Text></TouchableOpacity>
        </View>



        <View style={styles.container2}>  
        <Text style={styles.switchText}>Enable Notifications</Text> 
        <Switch style={styles.switch}
            trackColor={{ false: '#fff', true: themeColor }}
            thumbColor={isEnabled ? '#fff': '#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        </View>


        <View style={styles.container}>
                <Text style={styles.questions}>I'm interested in...</Text>
            <TouchableOpacity onPress={() => {}} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Women</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Everyone</Text>
            </TouchableOpacity>

                <View style= {styles.ageAndDistance}>
                <Text style={styles.questions}>Age...</Text>
                <Text style={styles.questions}>Between {multiSliderValue[0]} and {multiSliderValue[1]} Years Old</Text></View>
                <MultiSlider
                    values={[multiSliderValue[0], multiSliderValue[1]]}
                    sliderLength={370}
                    onValuesChange={multiSliderValuesChange}
                    min={18}
                    max={55}
                    allowOverlap={false}
                    minMarkerOverlapDistance={20}
                    selectedStyle={{backgroundColor: themeColor}}
                    unselectedStyle={{backgroundColor: "white"}}
                    trackStyle={{height: 3.5 }}
                    containerStyle={{marginLeft: 20, marginRight: 20}}
                /> 
                   
                <View style= {styles.ageAndDistance}>
                <Text style={styles.questions}>Distance...</Text>
                <Text style={styles.questions}>{range} Miles Away</Text></View>
                <MultiSlider
                    values={[0]}
                    sliderLength={370}
                    onValuesChange={singleSliderValueChange}
                    min={0}
                    max={50}
                    allowOverlap={false}
                    minMarkerOverlapDistance={20}
                    selectedStyle={{backgroundColor: themeColor}}
                    unselectedStyle={{backgroundColor: "white"}}
                    trackStyle={{height: 3.5 }}
                    containerStyle={{marginLeft: 20, marginRight: 20}}
                /> 
                

     

       
            
        </View>

        </ScrollView>
        </SafeAreaView>
    );
};
export default MyDiscoverySettings;

const styles = StyleSheet.create({
    container: {
      flex: 1,
        //marginRight: 12
      //marginTop:10,
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 7,
        marginHorizontal: 10,
    },
    title1: {
        fontSize: 20,
        fontWeight: "bold",
        
    },
    cancelButton:{
          fontSize: 18,
          
    },
    saveButton:{
          fontSize: 18,
          color: themeColor,
    },
    questions:{
        marginTop: 40,
        marginLeft: 20,
        fontSize: 18,
        opacity: 0.6
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    appButtonText: {
        fontSize: 18,
        color: themeColor,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    slider: {
        width: "90%", 
        height: 50,
        marginRight: 20,
        marginLeft: 20
    },
    ageAndDistance:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 20,
    },
    container2: {
        flex: 1,
        flexDirection: "row",
        //alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop:30,
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
    },
    switch:{
        marginRight: 5
    },
    switchText:{
        marginLeft: 5,
        marginTop: 5,
        opacity: 0.6,
        color: "black",
        fontSize: 16.5,
        
    },
    /* appButtonContainer2: {
        //elevation: 8,
        backgroundColor: "grey",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    
    }, */

});