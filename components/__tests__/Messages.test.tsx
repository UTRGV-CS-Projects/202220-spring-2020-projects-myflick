import React, { useContext } from "react";
import renderer from "react-test-renderer";
import OpenChat from "../../screens/OpenChat";
import { fireEvent, render } from "@testing-library/react-native";

// MyProfile Screen
//  - Check buttons work

const createTestProps = (props: any) => ({ 
    navigation: {
      navigate: jest.fn() // Mock the navigation.. No use for it.
    },
    ...props
  })

  describe('Testing the Messages Screen', () => {
    describe("Rendering the Messages Screen", () =>{
        let props: any;
        let testId: any;
        beforeEach(() => {
          props = createTestProps({});
          const {getAllByTestId} = render(<OpenChat {...props}/>);
          testId = getAllByTestId;})
        it('User can type a message', () => {
            const testIDName = "back";
            const foundButton = testId(testIDName);
            expect(foundButton).toBeTruthy();



        })
    })
  })