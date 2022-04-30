import {
	StyleSheet,
	Text,
	KeyboardAvoidingView,
	Platform,
	FlatList,
} from "react-native";
import React, { useState, useRef, useEffect, useContext } from "react";
import { RootStackScreenProps } from "../../types";
import { SafeAreaView, View } from "../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import MessageBubble from "../../components/Messages/MessageBubble";
import { ActivityIndicator, TextInput } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
//styling
import useColorScheme from "../../hooks/useColorScheme";
import Colors, { themeColor } from "../../constants/Colors";
import { createMessages, listMessage } from "../../apis/messages";
import { OnCreateMessageSubscription } from "../../src/API";
import { AuthContext } from "../../store/AuthContext";
import { API } from "aws-amplify";
import { onCreateMessage } from "../../src/graphql/subscriptions";

const OpenChat = ({ navigation, route }: RootStackScreenProps<"OpenChat">) => {
	//const [conversationId, setConversationId] = useState(route.params?.id);
	//const [userId, setUserId] = useState(route.params?.name);
	//const [person, setPerson] = useState(route.params?.person); 
	const [loading, setLoading] = useState(true);
	//const [messages, setMessages] = useState<Message[]>([]);
	const { user, dispatch } = useContext(AuthContext);
	const subscriptionRef = useRef<any>();
	const refRBSheet = useRef<any | null>(null);
	const handleSameMovies = () => {
		navigation.navigate("SameMovies");
	  };
	
      const colorScheme = useColorScheme();
      const flatListRef = useRef<FlatList>(null);
      const handleGoBack = () => {
		navigation.goBack();
	};
    const handleOnChange = () => {
		if (flatListRef.current) flatListRef.current.scrollToOffset({ offset: 0 });
	};
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			
				<ActivityIndicator
					animating={loading}
					color={themeColor}
					size={"large"}
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						justifyContent: "center",
						alignItems: "center",
					}}
				/>
			) : (
				<SafeAreaView style={[styles.container]}>
					<View
						style={[
							styles.topBar,
							{ borderBottomColor: Colors[colorScheme].opposite },
						]}
					>
						<TouchableOpacity style={styles.backBtn} onPress={handleGoBack} testID="back">
							<Ionicons
								name="chevron-back-outline"
								size={30}
								color={Colors[colorScheme].opposite}
							/>
						</TouchableOpacity>

						<Text
							style={[styles.name, { color: Colors[colorScheme].opposite }]}
						>
							Name
						</Text>

						<TouchableOpacity
							style={styles.ellipsis}
							onPress={() => {
								
								refRBSheet.current.open();}}
						>
							<Ionicons
								name="ellipsis-vertical-outline"
								size={30}
								color={Colors[colorScheme].opposite}
							/>
						</TouchableOpacity>
					</View>
					<FlatList
						ref={flatListRef}
						data={[]}
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						inverted={true}
						style={styles.flatList}
						contentContainerStyle={{ flexDirection: "column-reverse" }}
						onContentSizeChange={handleOnChange}
						renderItem={({ item }) => (
							<MessageBubble
								message={item}
								currentUserId={user.cognitoId}
								key={item.id}
								user={item}
								
							/>
						)}
					/>
					<View style={styles.bottomBarContainer}>
						<View style={styles.bottomBar}>
							<TextInput
								testID="typing"
								autoComplete={false}
								mode="outlined"
								autoCapitalize="none"
								secureTextEntry={false}
								activeOutlineColor={Colors[colorScheme].opposite}
								//onChangeText={(value) => setTextBarInput(value)}
								//value={textBarInput}
								style={[styles.textInput]}
								//onSubmitEditing={sendBtnTrigger}
								onPressIn={handleOnChange}
							/>
							<TouchableOpacity
								testID="sendbutton"
								style={styles.sendButton}
								//onPressIn={sendBtnTrigger}
							>
								<Text style={styles.sendText}>Send</Text>
							</TouchableOpacity>
						</View>
					</View>
					<RBSheet
              ref={refRBSheet}
              animationType={"slide"}
              closeOnDragDown={true}
              closeOnPressMask={true}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent",
                },
                draggableIcon: {
                  backgroundColor: "grey",
                },
                container: {
                  backgroundColor: Colors[colorScheme].primary,
                  borderRadius: 20,
                },
              }}
            >
 			<Text style={styles.headerText}>Match Settings</Text>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  width: "100%",
                  opacity: 0.2,
                }}
              ></View>
			   <TouchableOpacity
                onPress={() => {
					handleSameMovies();
                  refRBSheet.current.close();
                }}
                style={styles.clickRow}
              >
                <Ionicons
                  name="videocam"
                  size={35}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
                <Text style={styles.optionsText}>Matched Movies</Text>
                <Ionicons
                  name="chevron-forward"
                  size={35}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
              </TouchableOpacity>
			 <TouchableOpacity
                onPress={() => {
					
                  refRBSheet.current.close();
                }}
                style={styles.clickRow}
              >
                <Ionicons
                  name="close-circle-outline"
                  size={35}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
                <Text style={[styles.optionsText, {color: "red"}]}>Block</Text>
                <Ionicons
                  name="chevron-forward"
                  size={35}
                  color={Colors[colorScheme].opposite}
                ></Ionicons>
              </TouchableOpacity>


			</RBSheet>
				</SafeAreaView>
			
		</KeyboardAvoidingView>
	);
};

export default OpenChat;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	flatList: {},
	topBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: 5,
		height: 50,
		borderBottomWidth: 0.3,
	},
	backBtn: {
		paddingLeft: 5,
	},
	ellipsis: {
		paddingRight: 5,
	},
	name: {
		fontSize: 23,
	},

	bottomBar: {
		flexDirection: "row",
		paddingHorizontal: 10,
		alignItems: "center",
	},
	sendButton: {
		paddingVertical: 11,
		paddingHorizontal: 25,
		backgroundColor: themeColor,
		borderRadius: 10,
	},
	sendText: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	textInput: {
		width: "75%",
		height: 39,
		marginBottom: 3,
		borderRadius: 20,
		marginRight: 10,
	},
	bottomBarContainer: {
		justifyContent: "flex-end",
		marginBottom: 5,
		position: "relative",
	},
	scrollView: { flex: 1 },
	headerText: {
		fontSize: 25,
		paddingLeft: 20,
		paddingTop: 15,
		paddingBottom: 15,
		fontWeight: "bold",
		textAlign: "center",
	  },
	  clickRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingLeft: 10,
		marginTop: 10,
	  },
	  optionsText: {
		//color: '#4a4a4a',
		fontSize: 20,
		paddingLeft: 20,
	  },
});
