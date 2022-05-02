import React, { useContext } from "react";
import renderer from "react-test-renderer";
import OpenChat from "../profileComponents/openChatMock";
import { fireEvent, render } from "@testing-library/react-native";
import Message from "../Messages/Message";
import Openmessage from "../profileComponents/Openmessage";
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
//jest.mock('NativeAnimatedHelp');

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
          const {getAllByTestId} = render(<Openmessage {...props}  />);
          testId = getAllByTestId;})
        it('User can open a message', async () => {
            const testIDName = "openmessage";
            const open = testId(testIDName);
            expect(open).toBeTruthy();

        })
        
    })
  })

  describe('Testing the OpenChat Screen', () => {
    describe("Rendering the OpenChat Screen", () =>{
        let props: any;
        let testId: any;
        beforeEach(() => {
          props = createTestProps({});
          const {getAllByTestId} = render(<OpenChat {...props}  />);
          testId = getAllByTestId;})
        it('User can send a message', async () => {
            const testIDName = "sendbutton";
            const send = testId(testIDName);
            expect(send).toBeTruthy();

        })
        it('User can type a message', async () => {
          const test = "typing";
          const {getByTestId} = render(<OpenChat {...props}  />);
          const text = getByTestId(test);
          fireEvent.changeText(text, "typing");
          expect(text.props.value).toBe("typing");
        })
    })
  })