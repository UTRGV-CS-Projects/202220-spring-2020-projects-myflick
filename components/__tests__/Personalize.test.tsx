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


describe('Testing the Personalize Screen', () => {
    describe("Rendering the Personalize Screen", () =>{
        let props: any;
        let testId: any;
        beforeEach(() => {
          props = createTestProps({});
          const {getAllByTestId} = render(<Personalize {...props}/>)
          testId = getAllByTestId;
        })
    it('Testing the Image Picking', () => {

    })
    it("Test the Movie Choosing", () => {

    })
    it("Testing the Buttons", () => {

    })
    it("Test the Modal", () => {

    })
    it("Test the functions", () => {

    })
    it("Test the Movie Scroll", () => {

    })
})