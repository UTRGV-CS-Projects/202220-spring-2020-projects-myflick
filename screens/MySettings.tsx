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
} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import { themeColor, lightThemeColor } from "../constants/Colors";
import { MyProfileSections } from "../db/db";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import { Avatar, Input } from 'react-native-elements';
import { Chip } from "react-native-paper";


const MySettings = ({ navigation }: RootStackScreenProps<"MySettings">) => {
const colorScheme = useColorScheme();
const [text] = React.useState('Useless Text');
const [number, onChangeNumber] = React.useState(null);
const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  
    return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => {}}><Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title1}>Edit Profile</Text> 
          <TouchableOpacity onPress={() => {}}>
          <Text style={styles.saveButton}>Save</Text></TouchableOpacity>
        </View>
        
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              style={styles.image}
              source={{
                uri: "https://randomuser.me/api/portraits/women/23.jpg",
              }}
            ></Image>
          </View>
          <View style={styles.add}>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="add-circle-sharp"
                size={30}
                color={themeColor}
                style={{ marginTop: 30, marginLeft: 32 }}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.container}>
            {/* <View style={styles.line}>
            <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width:"100%" ,
            }}></View>
            </View> */}

            <View style={styles.viewKs}>
                <Text style={styles.profileInput}>Name</Text>
                <Input placeholder="Name"/>
            </View>
            
            <View style={styles.viewKs}>
                    <Text style={styles.profileInput2}>Pronouns</Text>
                    <Input placeholder="Pronouns" />
             </View>

          <View style={styles.viewKs}>
                <Text style={styles.profileInput3}>Bio</Text> 
                <Input  placeholder="Bio" multiline={true} /> 
          </View>

          <View style={styles.viewKs}>
                <Text style={styles.profileInput4 }>Location</Text>
                <Input placeholder="Location"/>
          </View>

          {/* <View style={styles.line}>
          <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width:"100%" 
                }}></View>
                 </View> */}
        </View>


        <View style={styles.container}>
            <View style={styles.photoLine}>
            <Text style={styles.sectionHeader}>Photos</Text>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonText}>ADD +</Text>
                </TouchableOpacity>
            </View>
             <View
            style={{
                borderBottomColor: 'themeColor',
                borderBottomWidth: 1,
                marginLeft: 10,
                marginRight: 10
            }}>   
           </View> 
          
        </View>

        <View style={styles.body}>
            <View style={styles.bodyContent}>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
              </View>


              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={styles.container}>
                <View style={styles.photoLine}> 
            <Text style={styles.sectionHeader}>Favorite Movies</Text>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonText}>ADD +</Text>
                </TouchableOpacity>
                </View>
            <View
            style={{
                borderBottomColor: 'themeColor',
                borderBottomWidth: 1,
                marginLeft: 10,
                marginRight: 10
            }}/>
            </View>

            <View style={styles.body}>
            <View style={styles.bodyContent}>
            
              <View style={styles.menuBox}>
                <TouchableOpacity  onPress={() => {}}>
                <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
               
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
              
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity> 
              </View>

            </View>
            </View>

          <View style={styles.container}>
          <Text style={styles.chipQuestion}>Basic Info</Text>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            {basicInfo.map((item, index) => {
              return (
                <View key={index} style={{ margin: 5 }}>
                  <Chip
                    mode="outlined"
                    textStyle={{ color: themeColor, fontSize: 15 }}
                    onPress={() => {
                         
                    }}
                    style={{
                      borderColor: themeColor,
                    }}
                  >
                    {item}
                  </Chip>
                </View>
              );
            })}
          </View>

          <Text style={styles.chipQuestion}>Hobbies & Interests</Text>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
            {myInterests.map((item, index) => {
              return (
                <View key={index} style={{ margin: 5 }}>
                  <Chip
                    mode="outlined"
                    textStyle={{ color: themeColor, fontSize: 15 }}
                    onPress={() => {}}
                    style={{
                      borderColor: themeColor,
                    }}
                  >
                    {item}
                  </Chip>
                </View>
              );
            })}
          </View>




          </View>


       

      </ScrollView>
      </SafeAreaView>
    );

};

export default MySettings;

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 15,
        overflow: "hidden",
      },
      image: {
        flex: 1,
        width: undefined,
        height: undefined,
      },
      add: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
      },
      sectionHeader: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        marginLeft:10,
      },
      body: {
        flex: 1,
        alignItems: 'center',
        padding:20,
      },
      bodyContent:{
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      menuBox:{
        backgroundColor: "#D3D3D3",
        width:100,
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
        margin:5,
        borderRadius:10,
        //borderStyle: "dashed",
       // borderColor: "#FD5A60",
      },
      icon: {
        width: 55,
        height:65,
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      containerEA: {
        alignItems: 'center',
        marginTop: -65,
      },
      viewKs: {
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      profileInput:{
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        marginLeft:10,
        marginRight: 42,
      },
      profileInput2:{
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        marginLeft:10,
        marginRight: 18,
      },
      profileInput3:{
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        marginLeft:10,
        marginRight: 60
      },
      profileInput4:{
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        marginLeft:10,
        marginRight: 25,
      },
      photoLine:{
          flexDirection: "row",
          justifyContent: "space-between"
      },
      button: {
        backgroundColor: themeColor,
        padding: 12,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10
      },
        buttonText: {
        color: "white"
      },
      chipQuestion:{
          fontSize: 15,
          color: themeColor,
          fontWeight: "bold",
          marginLeft: 10,
          marginTop: 10
      }
    
});

function setText(newText: string): void {
    throw new Error("Function not implemented.");
}


const basicInfo = [
    "Single",
    "Spiritual",
    "Voter",
    "Libra",
    "Vaccinated",
    "Mother",
    "Dog Lover",
    "ADD +"
];

const myInterests = [
    "Photography",
    "Modeling",
    "Hiking",
    "Foodie",
    "Reading",
    "Wine",
    "Baking",
    "ADD +"
  ];