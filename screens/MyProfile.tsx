import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image, Pressable, TouchableOpacity, FlatList, SectionList } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { MyProfilePicture, ProfilePage} from "../db/myprofile";
import { themeColor, lightThemeColor } from "../constants/Colors";
import { useThemeColor } from "../components/Themed";
//import { IconButton, Colors } from 'react-native-paper';


const ListItem = ({ item }: {item: any}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {}} > 
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      </TouchableOpacity>
    </View>
  );
};



const MyProfile = ({ navigation }: RootStackScreenProps<"MyProfile">) => {
    const [timesPressed, setTimesPressed] = useState(0);
    return(  
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.titleBar}>
      <TouchableOpacity
              onPress={() => {}}> 
            <Ionicons name="settings-outline" size={30} color='black'></Ionicons></TouchableOpacity>
            <Text style={styles.title}>Profile</Text>
       <TouchableOpacity
              onPress={() => {}}> 
            <Ionicons name="share-outline" size={30} color='black'></Ionicons></TouchableOpacity>
      </View>

          <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10}}/>
          <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
               <Image style={styles.image} source={{uri:"https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0ODI5MTZ8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"}}></Image>
            </View>
            <View style={styles.add}>
            <TouchableOpacity
              onPress={() => {}}> 
               <Ionicons name="add-circle-sharp" size= {30} color={themeColor} style={{marginTop: 30, marginLeft: 32}}></Ionicons> 
               </TouchableOpacity>
                </View>
          </View>

          <View>
            <Text style={styles.myName}>Ashley Nicole</Text>
            <Text style={styles.myBio}>Quantico, VA | 23 | Film Maker</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10}}/>
         </View>
         
         <View style={styles.container}>
         <SafeAreaView style={{ flex: 1 }}>
           <SectionList
            contentContainerStyle={{paddingHorizontal: 5}}
            stickySectionHeadersEnabled={false}
            sections={SECTION}
            renderSectionHeader={({section}) =>(
              <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
              </>
            )}
            renderItem={({ item, section }) => {
              if (section.horizontal) {
                return null;
              }
              return <ListItem item={item} />;
            }}
          />
</SafeAreaView>
          <View>
            
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
      marginLeft: 15,
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
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
},
  text:{
    position: "absolute",
    left: 78,
  },
  myBio:{
    marginTop: 10,
    textAlign: "center",
    color: themeColor,

  },
  photosContainer:{
    flex:1,
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  item:{
    margin: 3,
  },
  itemPhoto:{
    width:84,
    height:128,
  }
  
});

const SECTION = [
  {
    title: 'Favorites',
    horizontal: true, 
    data: [
      {
        key:'1',
        uri:'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg'
      },
      {
        key:'2',
        uri:'https://images.squarespace-cdn.com/content/v1/5702ab9d746fb9634796c9f9/1570206011880-G7G59JFOV23504NCZMIA/MIDSTHD-04_PayoffKATrimmed_RGB-FIN_R13.jpg'
      },
      {
        key:'3',
        uri:'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217'
      },
      {
        key:'4',
        uri:'https://www.joblo.com/wp-content/uploads/2021/04/luca-disney-pixar-trailer-poster-2021-1.jpg'
      },
      {
        key:'5',
        uri:'https://penji.co/wp-content/uploads/2019/09/The_Godfather-iconic-movie-posters.jpg'
      },
      {
        key:'6',
        uri:'https://www.filmjabber.com/movie-poster-thumbs/clifford-the-big-read-dog-movie-poster-6695.jpg'
      },
      {
        key:'7',
        uri:'https://i5.walmartimages.com/asr/149d1fd0-2254-421f-89d8-fe8d0f879b2d.45ce4ae056c8c0b3b1fce677f437a252.jpeg'
      },
      {
        key:'8',
        uri:'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg'
      },
      {
        key:'9',
        uri:'https://static01.nyt.com/images/2017/09/15/arts/24movie-posters8/24movie-posters8-superJumbo.jpg'
      },
  ]
},
{
  title: 'My Photos',
  horizontal: true,
  data: [
    {
      key: '1',
      uri: 'https://images.unsplash.com/photo-1600377202759-e783ff47dff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
      key: '2',
      uri: 'https://images.unsplash.com/photo-1598962995982-5f5c824652e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
      key: '3',
      uri: 'https://images.unsplash.com/photo-1595326995002-3c708e5caed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
      key: '4',
      uri: 'https://images.unsplash.com/photo-1513757271804-385fb022e70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      key: '5',
      uri: 'https://images.unsplash.com/photo-1637527032130-3ee8b11d0cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      key: '6',
      uri: 'https://images.unsplash.com/photo-1515052945961-bbb80118b74b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'
    },
    {
      key: '7',
      uri: 'https://images.unsplash.com/photo-1513065200622-9a226a3c7adc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      key: '8',
      uri: 'https://images.unsplash.com/photo-1509623994763-75a811aa5eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80'
    },
    {
      key: '9',
      uri: 'https://images.unsplash.com/photo-1490093536267-c400cc82aeb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
  ]
}];