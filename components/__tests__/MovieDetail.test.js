import React from "react";
// import {fireEvent, render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import ImageTapModal from "../ImageTapModalFile/ImageTapModal";
import {cleanup, render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
// const poster_path = "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg";


describe('Checking Screen Component to see if it has a child element', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<Screen />).toJSON();
      expect(tree.children.length).toBe(1)
    });
  }); 

describe.only('Checking the Image Tap Modal', () => {
  it('Test function for the <ImageTapModa />', () => {
    const testIdName = "touchableopac"

    const {getByTestId} = render(<ImageTapModal />)
    const foundTouchable = getByTestId(testIdName);

    expect(foundTouchable).toBeTruthy();

  })
})
