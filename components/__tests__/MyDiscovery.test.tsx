import { render } from '@testing-library/react-native';
import React from 'react';
import MyDiscoverySettings from '../../screens/MyDiscoverySettings';




const createTestProps = (props: any) => ({ 
    navigation: {
      navigate: jest.fn() // Mock the navigation.. No use for it.
    },
    ...props
  })


  describe('Testing the MovieSwiping Screen', () => {
    describe("Rendering the MovieSwiping Screen", () =>{
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
    it.skip("Test the Distance slider works", () => {

    })
})
})