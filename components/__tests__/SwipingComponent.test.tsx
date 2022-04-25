import React from 'react';
import renderer from 'react-test-renderer';
import MovieSwiping from '../../screens/MovieSwiping';
import {act, cleanup, fireEvent, render} from '@testing-library/react-native'; // User actions.
import SwipingComponent from '../SwipingComponent/SwipingComponent';

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
          const {getAllByTestId} =  render(<SwipingComponent {...props}/>);
          testId = getAllByTestId;
        })
    it('Testing the swiping Left Functionality', () => {
        const testIDName = "left";
        const foundButton = testId(testIDName);
       
        expect(foundButton).toBeTruthy();

    })
    it('Testing the swiping Top Functionality', () => {
      const testIDName = "middle";
      const foundButton = testId(testIDName);
      expect(foundButton).toBeTruthy();

  })
  it('Testing the swiping Right Functionality', () => {
    const testIDName = "right";
    const foundButton = testId(testIDName);
    expect(foundButton).toBeTruthy();

  })

})
})
