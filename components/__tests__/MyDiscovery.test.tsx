import Slider from '@react-native-community/slider';
import { render, shallow } from '@testing-library/react-native';
import React from 'react';
import MyDiscoverySettings from '../../screens/MyDiscoverySettings';

const createTestProps = (props: any) => ({ 
    navigation: {
      navigate: jest.fn() // Mock the navigation.. No use for it.
    },
    ...props
  })


  describe('Testing the MyDiscovery Screen', () => {
    describe("Rendering the MyDiscovery Screen", () =>{
        let props: any;
        let testId: any;
        beforeEach(() => {
          props = createTestProps({});
          const {getAllByTestId} = render(<MyDiscoverySettings {...props}/>);
          testId = getAllByTestId;
        })
    it('Testing cancel button', () => {
        const testIDName = "cancelbutton";
        const foundButton = testId(testIDName);
        expect(foundButton).toBeTruthy();
    })
    it("Test the Distance slider works", () => {
        const testIDName = "savebutton";
        const foundButton = testId(testIDName);
        expect(foundButton).toBeTruthy();
    })
    it("Test the notification switch", () =>
    {
        const testIDName = "switch";
        const foundButton = testId(testIDName);
        expect(foundButton).toBeTruthy();
    })
    it("Test the men button", () =>{
        const testIDName = "menbutton";
        const foundButton = testId(testIDName);
        expect(foundButton).toBeTruthy();
    })
    it("Test the women button", () =>{
        const testIDName = "womenbutton";
        const foundButton = testId(testIDName);
        expect(foundButton).toBeTruthy();
    })
    it("Test the any button", () =>{
        const testIDName = "anybutton";
        const foundButton = testId(testIDName);
        expect(foundButton).toBeTruthy();
    })
    
})
})