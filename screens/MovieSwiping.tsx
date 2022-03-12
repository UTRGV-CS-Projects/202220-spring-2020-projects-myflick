import { Button, StyleSheet } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";
import { View, Text, SafeAreaView } from "../components/Themed";
import SwipingComponent from "../components/SwipingComponent/SwipingComponent";
import { People } from "../db/db";

const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
  return <SwipingComponent useMovie={true} usePerson={false} />;
};

export default Home;

const styles = StyleSheet.create({});
