import { StyleSheet } from "react-native";
import React from "react";
import NewMatchesList from "../components/Messages/NewMatchesList";
import NewMessagesList from "../components/Messages/NewMessagesList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../types";
import { SafeAreaView } from "../components/Themed";
const Messages = ({ navigation }: RootStackScreenProps<"Messages">) => {
	const insets = useSafeAreaInsets();

	return (
		<SafeAreaView style={[styles.container]}>
			<NewMatchesList navigationProp={navigation} />
			<NewMessagesList navigationProp={navigation} />
		</SafeAreaView>
	);
};

export default Messages;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
});
