import React from "react";

import {
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Button,
} from "react-native";
import { View } from "react-native";

const Buttonx = ({ imgSrc, borderColorx, heightx, onClick, opacityx }) => {
	//color: require()
	return (
		<TouchableOpacity
			onPressIn={onClick}
			style={{ paddingLeft: 30, zIndex: 51 }}
		>
			<View
				style={[
					styles.buttonBorder,
					{ borderColor: borderColorx, opacity: opacityx },
				]}
			>
				<Image
					style={([styles.image], { height: heightx, width: heightx })}
					source={imgSrc}
				></Image>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonBorder: {
		padding: 15,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 100,
		backgroundColor: "transparent",
		borderWidth: 0.3,
	},
	image: {
		height: 30,
		width: 30,
	},
});

export { Buttonx };
