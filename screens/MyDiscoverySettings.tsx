import React, { useEffect, useState, Component } from "react";
import {
	StyleSheet,TouchableOpacity, Switch, Platform, Alert} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
//import { themeColor, lightThemeColor } from "../constants/Colors";
import { MyProfileSections } from "../db/db";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import Slider from "@react-native-community/slider";
import { parseSync } from "@babel/core";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Colors, { themeColor } from "../constants/Colors";
import * as Location from 'expo-location';
import Constants from 'expo-constants';

const MyDiscoverySettings = ({navigation,}: RootStackScreenProps<"MyDiscoverySettings">) => {
	const [range, setRange] = useState<any>(0);
	const colorScheme = useColorScheme();
	const [multiSliderValue, setMultiSliderValue] = useState([0, 1]);
	const multiSliderValuesChange = (values: any) => setMultiSliderValue(values);
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	const [isEnabled2, setIsEnabled2] = useState(false);
	const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
	const [location, setLocation] = useState<any | null>(null);
  	const [errorMsg, setErrorMsg] = useState<any | null>(null);


	  /* useEffect(() => {
		(async () => {
		  if (Platform.OS === 'android' && !Constants.isDevice) {
			setErrorMsg(
			  'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
			);
			return;
		  }
		  let { status } = await Location.requestForegroundPermissionsAsync();
		  if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
			return;
		  }
	
		  let location = await Location.getCurrentPositionAsync();
		  setLocation(location);

		  

		  
		})();
	  }, []);
	
	  let text = 'Waiting..';
	  if (errorMsg) {
		text = errorMsg;
	  } else if (location) {
		text = JSON.stringify(location);
	  } */
	
	  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
	  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
		'Loading...'
	  );
	
	  useEffect(() => {
		CheckIfLocationEnabled();
		GetCurrentLocation();
	  }, []);
	
	  const CheckIfLocationEnabled = async () => {
		let enabled = await Location.hasServicesEnabledAsync();
	
		if (!enabled) {
		  Alert.alert(
			'Location Service not enabled',
			'Please enable your location services to continue',
			[{ text: 'OK' }],
			{ cancelable: false }
		  );
		} else {
		  setLocationServiceEnabled(enabled);
		}
	  };
	  
	  const GetCurrentLocation = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
	  
		if (status !== 'granted') {
		  Alert.alert(
			'Permission not granted',
			'Allow the app to use location service.',
			[{ text: 'OK' }],
			{ cancelable: false }
		  );
		}
	  
		let { coords } = await Location.getCurrentPositionAsync();
	  
		if (coords) {
		  const { latitude, longitude } = coords;
		  let response = await Location.reverseGeocodeAsync({
			latitude,
			longitude
		  });
	  
		  for (let item of response) {
			let address = `${item.city}, ${item.region}`;
	  
			setDisplayCurrentAddress(address);
			if (address.length > 0) {
				setTimeout(() => {
				  console.log("Location Retrieved")
				}, 2000);
			  }
		  }
		}
	  };

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.titleBar}>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("MyProfile");
						}}
					>
						<Text style={styles.cancelButton}>Cancel</Text>
					</TouchableOpacity>
					<Text style={styles.title1}>Discovery</Text>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.saveButton}>Save</Text>
					</TouchableOpacity>
				</View>

				<View style={[styles.container2, {backgroundColor: Colors[colorScheme].primary}]}>
					<Text style={styles.switchText}>Enable Notifications</Text>
					<Switch
						style={styles.switch}
						trackColor={{ false: "#fff", true: themeColor }}
						thumbColor={isEnabled ? "#fff" : "#fff"}
						ios_backgroundColor="#3e3e3e"
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>

				<View style={[styles.container2, {backgroundColor: Colors[colorScheme].primary}]}>
					<Text style={styles.switchText}>Current Location</Text>
					<Text style={styles.paragraph }>{displayCurrentAddress}</Text>
				</View>

				<View style={styles.container}>
					<Text style={styles.questions}>I'm interested in...</Text>
					<TouchableOpacity
						onPress={() => {}}
						style={[styles.appButtonContainer, {backgroundColor: Colors[colorScheme].primary}]}
					>
						<Text style={styles.appButtonText}>Men</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {}}
						style={[styles.appButtonContainer, {backgroundColor: Colors[colorScheme].primary}]}
					>
						<Text style={styles.appButtonText}>Women</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {}}
						style={[styles.appButtonContainer, {backgroundColor: Colors[colorScheme].primary}]}
					>
						<Text style={styles.appButtonText}>Everyone</Text>
					</TouchableOpacity>

					<View style={styles.ageAndDistance}>
						<Text style={styles.questions}>Age...</Text>
						<Text style={styles.questions}>
							Between {multiSliderValue[0]} and {multiSliderValue[1]} Years Old
						</Text>
					</View>
					<MultiSlider
						values={[multiSliderValue[0], multiSliderValue[1]]}
						sliderLength={370}
						onValuesChangeFinish={multiSliderValuesChange}
						min={18}
						max={55}
						allowOverlap={false}
						minMarkerOverlapDistance={20}
						selectedStyle={{ backgroundColor: themeColor }}
						unselectedStyle={{ backgroundColor: "white" }}
						trackStyle={{ height: 3.5 }}
						containerStyle={{ marginLeft: 20, marginRight: 20 }}
					/>

					<View style={styles.ageAndDistance}>
						<Text style={styles.questions}>Distance...</Text>
						<Text style={styles.questions}>{range} Miles Away</Text>
					</View>
					<Slider
						style={styles.slider}
						minimumValue={0}
						maximumValue={80}
						minimumTrackTintColor="#FD484F"
						maximumTrackTintColor="#FFFFFF"
						value={range}
						onSlidingComplete={(range: number) => setRange(range.toFixed())}
					/>
				
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default MyDiscoverySettings;

const styles = StyleSheet.create({
	paragraph: {
		height: 30,
    	paddingRight: 10,
		paddingTop: 5,
    	fontSize: 17, 
    	opacity: 0.6,
    	color: "grey", 
		
	  },
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
	cancelButton: {
		fontSize: 18,
	},
	saveButton: {
		fontSize: 18,
		color: themeColor,
	},
	questions: {
		marginTop: 40,
		marginLeft: 20,
		fontSize: 18,
		opacity: 0.6,
	},
	appButtonContainer: {
		elevation: 8,
		backgroundColor: "#d0d0d0",
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
	},
	appButtonText: {
		fontSize: 17,
		color: themeColor,
		fontWeight: "bold",
		//textTransform: "uppercase",
	},
	slider: {
		width: "90%",
		height: 50,
		marginRight: 20,
		marginLeft: 20,
	},
	ageAndDistance: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginRight: 20,
	},
	container2: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: 20,
		marginRight: 20,
		marginTop: 30,
		backgroundColor: "#d0d0d0",
		borderRadius: 10,
		paddingVertical: 10,
	},
	switch: {
		marginRight: 5,
	},
	switchText:{
		fontSize: 17,
		color: themeColor,
		fontWeight: "bold",
		marginLeft: 10, 
		marginTop: 5 
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


