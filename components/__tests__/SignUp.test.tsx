import React from 'react';
import {View, Button, TouchableOpacity, PanResponder, Pressable, Text, ScrollView} from 'react-native';
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react-native';
import SignUp from '../../screens/SignUp';
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

  describe.skip('Fire Event testing!', () => {

    describe('Rendering', () => {
      let props: any;
      beforeEach(() => {
        props = createTestProps({})
        const tree = render(<SignUp {...props}/>)
      })
      expect(props.navigation.navigate).toHaveBeenCalledWith('SignIn')
      })
    })

test.only('Another Example', async () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({})
  })
  const {getAllByRole} = await render(<SignUp {...props} />)
  expect(getAllByRole('button')).toBeDefined();
})


describe('Test the User and Password lengt', () => {
  it("Test the Username Length", () => {
    
  })
  it("Test the password length", () => {
    
  })
})