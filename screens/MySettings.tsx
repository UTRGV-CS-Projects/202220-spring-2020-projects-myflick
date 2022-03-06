
import React, { useEffect, useState, Component, useRef, useMemo, useCallback } from "react";
import {
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import { themeColor, lightThemeColor } from "../constants/Colors";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import { Avatar, Input } from 'react-native-elements';
import { Chip } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import { Constants } from "@aws-amplify/core";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler'
import BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { actionButton } from "aws-amplify";

const MySettings = ({ navigation }: RootStackScreenProps<"MySettings">) => {
const colorScheme = useColorScheme();
const [image, setImage] = useState<any | null>(null); 
const bottomSheetModalRef = useRef<BottomSheetModal>(null);
const bottomSheetModalRef2 = useRef<BottomSheetModal>(null);
const bottomSheetModalRef3 = useRef<BottomSheetModal>(null);
const bottomSheetModalRef4 = useRef<BottomSheetModal>(null);
const snapPoints = useMemo(() => ['25%', '50%'], []);
const snapPoints2 = useMemo(() => ["25%"], []);
const bottomSheetRef = useRef<BottomSheet>(null);


  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const handleSearchModalPress = useCallback(() => {
    bottomSheetModalRef2.current?.present();
  }, []);
  const handleSearchBasicInfoModalPress = useCallback(() => {
    bottomSheetModalRef3.current?.present();
  }, []);
  const handleSearchHobbiesModalPress = useCallback(() => {
    bottomSheetModalRef4.current?.present();
  }, []);

useEffect(() => {
  (async () => {
      const cameraRollStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      if (
        cameraRollStatus.status !== "granted" ||
        cameraStatus.status !== "granted"
      ) {
        alert("Sorry, we need these permissions to make this work!");
      }
    
  })();
}, []);


const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
    });

    console.log(result);
  };


    return(
      <BottomSheetModalProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
     
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => { navigation.navigate("MyProfile")}}><Text style={styles.cancelButton}>Cancel</Text>
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
                uri: "https://randomuser.me/api/portraits/women/50.jpg",
              }}
            ></Image>
          </View>
          {/* <View style={styles.add}>
            <TouchableOpacity onPress={pickImage}>
              <Ionicons
                name="add-circle-sharp"
                size={30}
                color={themeColor}
                style={{ marginTop: 30, marginLeft: 32 }}
              ></Ionicons>
            </TouchableOpacity>
            
          </View> */}
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
            
            </View>
             <View
            style={{
                borderBottomColor:"white",
                borderBottomWidth: 1,
                marginLeft: 10,
                marginRight: 10
            }}>   
           </View> 
          
        </View>
        
        <View style={styles.body}>
            <View style={styles.bodyContent}>

              <View style={styles.menuBox}>
              <TouchableOpacity onPress={handlePresentModalPress}
              >
                    <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
                {/* {image && <Image source={{ uri: image }} style={styles.menuBox} />} */}
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={handlePresentModalPress}>
                    <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
                {/* {image && <Image source={{ uri: image }} style={styles.menuBox} />} */}
              </View>


              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={handlePresentModalPress}>
                    <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
                {/* {image && <Image source={{ uri: image }} style={styles.menuBox} />} */}
                </View>
            </View>
            </View>

            <View style={styles.container}>
                <View style={styles.photoLine}> 
            <Text style={styles.sectionHeader}>Favorite Movies</Text>
           
                </View>
            <View
            style={{
                borderBottomColor: "white",
                borderBottomWidth: 1,
                marginLeft: 10,
                marginRight: 10
            }}/>
            </View>

            <View style={styles.body}>
            <View style={styles.bodyContent}>
            
              <View style={styles.menuBox}>
                <TouchableOpacity  onPress={handleSearchModalPress}>
                <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
               
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={handleSearchModalPress}>
                    <Ionicons
                    name="add"
                    size={60}
                    color={themeColor}
                    style={styles.icon}></Ionicons>
                </TouchableOpacity>
              
              </View>

              <View style={styles.menuBox}>
              <TouchableOpacity  onPress={handleSearchModalPress}>
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
          <Text style={styles.sectionHeader}>Basic Info</Text>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            {/* {basicInfo.map((item, index) => {
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
            })} */}
            <Chip
                    mode="outlined"
                    textStyle={{ color: themeColor, fontSize: 15 }}
                    onPress={handleSearchBasicInfoModalPress}
                    style={{
                      marginLeft: 5,
                      borderColor: themeColor,
                    }}
                  > Add +
                  </Chip>

          </View>
          </View>

          <Text style={styles.sectionHeader}>Hobbies & Interests</Text>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
            {/* {myInterests.map((item, index) => {
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
                  })} */}
                  <Chip
                    mode="outlined"
                    textStyle={{ color: themeColor, fontSize: 15 }}
                    onPress={handleSearchHobbiesModalPress}
                    style={{
                      marginLeft: 5,
                      borderColor: themeColor,
                    }}
                  > Add +
                  </Chip>
                  
          </View>
          <View style={styles.contentContainer}>
          <BottomSheetModal
              style={{shadowOpacity: 0.5}}
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}>
                <View> 
                <Text style={styles.headerText}>Upload Photo</Text>
                <Text style={styles.headerSubText}>Add Images for Others to See</Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width:"100%" ,
                    opacity: 0.2
                }}></View>
                <TouchableOpacity onPress={takePhoto} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pickImage} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Choose from Library</Text>
                </TouchableOpacity>
                </View> 
            </BottomSheetModal>

            <BottomSheetModal
            style={{shadowOpacity: 0.5}}
            ref={bottomSheetModalRef2}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            keyboardBehavior={"fillParent"}
            >
               <View> 
                <Text style={styles.headerText}>Select a Film</Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width:"100%" ,
                    opacity: 0.2
                }}></View>
                

                 <BottomSheetTextInput placeholder="Search" style={styles.inputModal}/>
                 </View> 
            </BottomSheetModal>


            <BottomSheetModal
            style={{shadowOpacity: 0.5}}
            ref={bottomSheetModalRef3}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            keyboardBehavior={"fillParent"}
            >
               <View> 
                <Text style={styles.headerText}>Basic Info</Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width:"100%" ,
                    opacity: 0.2
                }}></View>

                 <BottomSheetTextInput placeholder="Search" style={styles.inputModal}/>
                 </View>
                
            </BottomSheetModal>

            <BottomSheetModal
            style={{shadowOpacity: 0.5}}
            ref={bottomSheetModalRef4}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            keyboardBehavior={"fillParent"}
            >
               <View> 
                <Text style={styles.headerText}>Hobbies & Interests</Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width:"100%" ,
                    opacity: 0.2
                }}></View>

                 <BottomSheetTextInput placeholder="Search" style={styles.inputModal}/>
                 </View>
                
            </BottomSheetModal>
           
            

    </View>      
      </ScrollView>
      </SafeAreaView>
      </BottomSheetModalProvider>
    );

};

export default MySettings;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginRight: 12
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
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: themeColor,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      //marginBottom: 10
  },
  appButtonText: {
      fontSize: 18,
      color: "white",
      fontWeight: "bold",
      textTransform: "uppercase",
      textAlign: "center"
  },
  headerText: {
    color: 'black',
    fontSize: 25,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 10,
    fontWeight: "bold",
    textAlign: "center"
  },
  headerSubText:{
    textAlign: "center",
    opacity: 0.6,
    marginBottom: 20,
    color: "black"
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
  },
  textInput: {
    alignSelf: "stretch",
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    //backgroundColor: "blue",
    color: "red",
    textAlign: "center",
  },
  inputModal: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: "#808080",
    marginLeft: 10,
    marginRight: 10
  },
    
});




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
function setImage(uri: string) {
  throw new Error("Function not implemented.");
}

