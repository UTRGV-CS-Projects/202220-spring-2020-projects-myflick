import React from "react";
// import {fireEvent, render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import MoviePoster from '../MovieDetails/MoviePoster'
import ImageTapModal from "../ImageTapModalFile/ImageTapModal";
import { FlatList, Text } from "react-native";
import { render } from '@testing-library/react-native';
const poster_path = "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg";

import App from "../../App";
import Screen from '../Screen'
describe.skip('<App />', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<Screen />).toJSON();
      expect(tree.children.length).toBe(1)
    });
  }); 