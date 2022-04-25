import React from 'react';
import renderer from 'react-test-renderer';
import Personalize from '../../screens/Personalize';
import {cleanup, fireEvent, render} from '@testing-library/react-native'; // User actions.

// Plan for this screen
/*
Personalize
 - Test Image Picking
 - Movie Choosing
 - Button
 - Modal
 - Functions
 - Movie Scroll?
*/

const createTestProps = (props: any) => ({
    navigation: {
      navigate: jest.fn() // Mock the navigation.. No use for it.
    },
    ...props
  })


describe.skip('Testing the Personalize Screen', () => {
    describe.skip("Rendering the Personalize Screen", () =>{
        let props: any;
        let testId: any;
        beforeEach(() => {
          props = createTestProps({});
          const {getAllByTestId} = render(<Personalize {...props}/>)
          testId = getAllByTestId;
        })
    it.skip('Testing the Image Picking', () => {

    })
    it.skip("Test the Movie Choosing", () => {

    })
    it.skip("Testing the Buttons", () => {

    })
    it.skip("Test the Modal", () => {

    })
    it.skip("Test the functions", () => {

    })
    it.skip("Test the Movie Scroll", () => {

    })
})
})
