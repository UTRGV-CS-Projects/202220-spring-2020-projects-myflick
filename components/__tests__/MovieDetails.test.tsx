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
        let label: any;
        beforeEach(() => {
          props = createTestProps({});
          const {getAllByTestId} = render(<ImageTapModal {...props}/>)
          const { getByLabelText } = render(<ImageTapModal {...props}/>);
          testId = getAllByTestId;
          label = getByLabelText;
        })
    it('Testing the MovieDetails clickable image', () => {
        // Need the ImageTapModal Component
        const testIDName = "poster";
        const LabelName = "image_modal";
        const accessibilityLabel = label(LabelName);
        const foundPoster = testId(testIDName);

        fireEvent.press(accessibilityLabel); // Press on the image

        expect(foundPoster).toBeTruthy(); // Expect that image to be opened, true  
    })
   
})
})