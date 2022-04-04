import * as React from 'react';
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText';

it.only(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
