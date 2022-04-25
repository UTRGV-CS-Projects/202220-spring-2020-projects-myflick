import React, { useContext } from "react";
import renderer from "react-test-renderer";
import MyProfile from "../../screens/MyProfile";
import { fireEvent, render } from "@testing-library/react-native";
import navigation from "../../navigation";
import { AuthContext } from "../../store/AuthContext";

//This test will only pass if you comment out the lines in the MyProfile.tsx file lines 122 and 348
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
        
        let testID: any;
        beforeEach(() => {
          
          props = createTestProps({});
          const {getAllByTestId} = render(<MyProfile {...props}/>);
          testID = getAllByTestId;
        })
        it('Testing settings button', () => {
          const testIDName = "settingsbutton";
          const {getByTestId} = render(<MyProfile {...props}/>);
          const foundButton = getByTestId(testIDName);
          expect(foundButton).toBeTruthy();
           
        })
        it('Do movies refresh', () => {
          const testIDName = "refreshbutton";
          const foundButton = testID(testIDName);
          expect(foundButton).toBeTruthy();
        })
    })
})

