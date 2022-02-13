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
} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import { themeColor, lightThemeColor } from "../constants/Colors";
import { MyProfileSections } from "../db/db";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { Chip, DarkTheme } from "react-native-paper";
import { renderMatches } from "react-router-dom";
import { black } from "react-native-paper/lib/typescript/styles/colors";

const UselessTextInput = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<TextInput> & Readonly<TextInputProps> & Readonly<{ children?: React.ReactNode; }>) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
  };


const MySettings = ({ navigation }: RootStackScreenProps<"MySettings">) => {
    const colorScheme = useColorScheme();
    //const [text, setText] = useState('');
    const [text] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    
    return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => {}}><Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text> 
          <TouchableOpacity onPress={() => {}}>
          <Text style={styles.saveButton}>Save</Text></TouchableOpacity>
        </View>
        
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              style={styles.image}
              source={{
                uri: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0ODI5MTZ8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
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
        <View
      style={{
        backgroundColor: value,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={(text: React.SetStateAction<string>) => onChangeText(text)}
        value={value}
        style={{ padding: 10 }}
      />
    </View>
        </View>









        <View style={styles.container}>
            <Text style={styles.sectionHeader}>Photos</Text>
            <View
            style={{
                borderBottomColor: 'white',
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
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>  
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
                </View>
            </View>
            </View>

            <View style={styles.container}>
            <Text style={styles.sectionHeader}>Favorite Movies</Text>
            <View
            style={{
                borderBottomColor: 'white',
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
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
               
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
              
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity> 
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={() => {}}>
                    <Ionicons
                    name="add-circle"
                    size={60}
                    color={"black"}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
                </View>
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
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 7,
        marginHorizontal: 10,
      },
      title: {
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
        backgroundColor: themeColor,
        width:100,
        height:100,
        alignItems: 'center',
        justifyContent: 'center',
        margin:5,
        borderRadius:10,
        //borderStyle: "dashed",
        //borderColor: "#FD5A60",
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
      
});

function setText(newText: string): void {
    throw new Error("Function not implemented.");
}

