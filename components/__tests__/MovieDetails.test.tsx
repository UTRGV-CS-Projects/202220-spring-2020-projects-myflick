import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from '../../screens/MovieDetails';
import {cleanup, fireEvent, render} from '@testing-library/react-native'; // User actions.

/*
MovieDetails
 - Check if the image is clickable
*/

const createTestProps = (props: any) => ({ // Mock the Navigation.
    navigation: {
      navigate: jest.fn() // Mock the navigation.. No use for it.
    },
    ...props
  })

  describe('Testing the MovieDetails Screen', () => {
    describe("Rendering the MovieDetails Screen", () =>{
        let props: any;
        let testId: any;
        beforeEach(() => {
          props = createTestProps({});
          const {getAllByTestId} = render(<MovieDetails {...props}/>)
          testId = getAllByTestId;
        })
    it('Testing the MovieDetails clickable image', () => {
        // Need the ImageTapModal Component
    })
    it("Test the MovieDetails Scroll for the text?", () => {

    })
})
})