import { useState } from "react";
import {
	StyleSheet,
	Text,
	KeyboardAvoidingView,
	Platform,
	FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types";

const SameMovies=({ navigation, route }: RootStackScreenProps<"SameMovies">) => {
const [person, setPerson] = useState(route.params?.person);

return(
	<SafeAreaView> 
    <Text style={styles.container}>You and {person?.firstName} liked...</Text>
	</SafeAreaView>
);




};
export default SameMovies;
const styles = StyleSheet.create({
	container: {
	  
	  padding: 10,
	}
})

