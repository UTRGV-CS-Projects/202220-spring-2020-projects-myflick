import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from '../../screens/MovieDetails';
import {cleanup, fireEvent, render} from '@testing-library/react-native'; // User actions.
import ImageTapModal from '../ImageTapModalFile/ImageTapModal';

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
          const {getAllByTestId} = render(<ImageTapModal {...props}/>)
          testId = getAllByTestId;
        })
    it('Testing the MovieDetails clickable image', () => {
        // Need the ImageTapModal Component
        const testIDName = "poster";
        const foundButton = testId(testIDName);
        expect(foundButton).toBeTruthy();
    })
   
})
})