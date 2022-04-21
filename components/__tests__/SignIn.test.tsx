import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from '../../screens/SignIn';
import {cleanup, fireEvent, render} from '@testing-library/react-native';


// SignIn Screen
//  - Test Button Functionality BDD
//  - Functions for testing if the username !== 0
//  - Typing FireEvent, Type

//    const tree: any = renderer.create(<TestScreen />).toJSON(); // Get/render the TestScreen component
// expect(tree?.children?.length).toBe(2); // Assertion and tells either pass or fail

// Assuming `input` is your text input element
// fireEvent(input, 'submitEditing')

const createTestProps = (props: any) => ({
    navigation: {
      navigate: jest.fn() // Mock the navigation.. No use for it.
    },
    ...props
  })

describe("Testing the SignIn Screen", () => {
    describe("Rendering the SignIn Screen", () =>{
      let props: any;
      let testId: any;
      beforeEach(() => {
        props = createTestProps({});
        const {getAllByTestId} = render(<SignIn {...props}/>)
        testId = getAllByTestId;
      })
        
        it("The button of the Signin Screen works", () => { 
           const testIDName = "SignInButton";
            const foundButton = testId(testIDName);
            expect(foundButton).toBeTruthy();
        })
        it("Checking the length of the username", () => {
          
            const testIDName = "EmailInput";
            const foundUser = testId(testIDName);
            expect(foundUser).not.toBe(0);
        })
        it("Checking the length of the password", () => {
          const testIDName = "PasswordInput";
          const foundPass = testId(testIDName);
          expect(foundPass).not.toBe(0);
        })
        it("Testing the FireEvent when a user types", () => {
          const testIDName = "textInput";
          const text = testId(testIDName);
          const fire = fireEvent.changeText(text, " ");
          expect(fire).toBeGreaterThan(1);
        })
    })

})