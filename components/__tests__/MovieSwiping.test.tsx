import React from 'react';
import renderer from 'react-test-renderer';
import MovieSwiping from '../../screens/MovieSwiping';
import {act, cleanup, fireEvent, render} from '@testing-library/react-native'; // User actions.

/*
MovieSwiping
 - Swiping Functionality
 - Movie Click to get MovieDetails page
*/

// Jest.fn() allows to create a new mock function. Spy on the behavior of a function.

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
        beforeEach(async () => {
          props = createTestProps({});
          const {getAllByTestId} =  render(<MovieSwiping {...props}/>);
          testId = getAllByTestId;
        })
    it('Testing the swiping Left Functionality', () => {
      act(() => {
        const testIDName = "swipeLeft";
        const foundButton = testId(testIDName);
        expect(foundButton).toBeTruthy();
      })
    })
    it.skip("Test the Movie Swiping image click to navigate to MovieDetails", () => {

    })
})
})
