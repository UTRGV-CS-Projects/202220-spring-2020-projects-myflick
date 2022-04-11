import React from 'react';
import {View, Button, TouchableOpacity, PanResponder, Pressable, Text, ScrollView} from 'react-native';
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react-native';
import SignIn from '../../screens/SignIn';
import { RootStackParamList, RootStackScreenProps, SignInType, SignUpType } from "../../types";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// type NavigationScreenPropAlias = NativeStackScreenProps<{}>;


// type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

  describe('Fire Event testing!', () => {

    describe('Rendering', () => {
      let props: any;
      beforeEach(() => {
        props = createTestProps({})
        const tree = render(<SignIn {...props}/>)
      })
      expect(props.navigation.navigate).toHaveBeenCalledWith('SignIn')
      })
    })