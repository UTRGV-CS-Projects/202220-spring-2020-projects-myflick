import { render, shallow } from '@testing-library/react-native';
import React from 'react';
import MySettings from '../../screens/MySettings';

const createTestProps = (props: any) => ({ 
    navigation: {
      navigate: jest.fn() // Mock the navigation.. No use for it.
    },
    ...props
  })

  describe.skip('Testing the MySettings Screen', () => {
    describe.skip("Rendering the MySettings Screen", () =>{
        let props: any;
        let testId: any;
        beforeEach(() => {
          props = createTestProps({});
          const {getAllByTestId} = render(<MySettings {...props}/>);
          testId = getAllByTestId;
        })
    it.skip('Testing cancel button', () => {
        const testIDName = "backButton";
        const foundButton = testId(testIDName);
        expect(foundButton).toBeTruthy();
    })
    
    
})
}) 