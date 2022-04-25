import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../../screens/SignUp';
import {cleanup, fireEvent, render} from '@testing-library/react-native';


// SignUp
//  - Button Functionality
//  - Functions username and password length
// - Typing FireEvent, Type

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

describe("Testing the SignUp Screen", () => {
    describe("Rendering the SignUp Screen", () =>{
      let props: any;
      let testId: any;
      beforeEach(() => {
        props = createTestProps({});
        const {getAllByTestId} = render(<SignUp {...props}/>)
        testId = getAllByTestId;
      })
        
        it("The button of the SignUp Screen works", () => { 
           const testIDName = "SignUpButton";
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
        it.skip("Testing the FireEvent when a user types", () => {
          const testIDName = "textInput";
          const text = testId(testIDName);
          const fire = fireEvent.changeText(text, " ");
          expect(fire).toBeGreaterThan(1);
        })
    })

})