import React, { useContext } from "react";
import renderer from "react-test-renderer";
import MyProfile from "../../screens/MyProfile";
import { fireEvent, render } from "@testing-library/react-native";

// MyProfile Screen
//  - Check buttons work

const createTestProps = (props: any) => ({ 
    navigation: {
      navigate: jest.fn() // Mock the navigation.. No use for it.
    },
    ...props
  })

 describe('Testing the myProfile Screen', () => {
    describe("Rendering the myProfile Screen", () =>{
        let props: any;
        let testId: any;
        beforeEach(() => {
          props = createTestProps({});
          const {getAllByTestId} = render(<MyProfile {...props}/>);
          testId = getAllByTestId;
        })
        it("Check if button works", () => {
            
        })
    })
})