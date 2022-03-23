import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyles from './config/styles';
import { FontAwesome } from '@expo/vector-icons'; 

interface Props {
  icon ?: any,
  width ?: any,
  placeholder: any,
  onChangeText: any,
  onSubmitEditing ?: any,
  value ?: any
}


const CustomTextInput: React.FC<Props> = ({icon, width = '100%', placeholder, onChangeText, onSubmitEditing, value}) => {

  return (
    <>
  <View style={styles.container}>
  <FontAwesome name="search" size={24} color="black" />
      {!icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}  />}
      <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} placeholder={placeholder} onChangeText={onChangeText} onSubmitEditing={onSubmitEditing} value={value}/>

    </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10,
    paddingRight: 10
  }
});

export default CustomTextInput;