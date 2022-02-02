import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { MyProfilePicture, ProfilePage} from "../db/myprofile";
//import { IconButton, Colors } from 'react-native-paper';

const MyProfile = ({ navigation }: RootStackScreenProps<"MyProfile">) => {
    const [timesPressed, setTimesPressed] = useState(0);
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.titleBar}>
      <TouchableOpacity
              onPress={() => {}}> 
            <Ionicons name="arrow-back-sharp" size={30} color="black"></Ionicons></TouchableOpacity>
            <Text style={styles.myName}>Gregory Jones</Text>
            <TouchableOpacity
              onPress={() => {}}> 
            <Ionicons name="share-outline" size={30} color="black"></Ionicons></TouchableOpacity>
          </View>
          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
               <Image style={styles.image} source={{uri:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"}}></Image>
            </View>
            <View style={styles.add}>
            <TouchableOpacity
              onPress={() => {}}> 
               <Ionicons name="add-circle" size= {30} color="#ff1493" style={{marginTop: 20, marginLeft: 32}}></Ionicons> 
               </TouchableOpacity>
                </View>
            <View style={styles.bio}>
                <Text></Text>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 7,
      marginHorizontal: 16,
    
  },
  profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginTop: 10,
      overflow: "hidden"
  },
  image:{
      flex: 1,
      width: undefined,
      height: undefined
  },
  add:{
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center"
  },
  wrapperCustom:{
    borderRadius: 8,
    padding: 6,
  },
  myName:{
      fontSize: 20,
      fontWeight: "bold",
  },
  bio:{

  },
  
});
