import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

// Test  function to get location.
// Testing plan should make it clear, testing being done is complete for a certain goal. Certain level of testing
// As supposed to testing.. Unit testing vs user testing.. 
// Testing you have done is a complete set of tests for the goals that you have.
// Decide what you do.

// Create a Testing Plan.
// Last week of finals.. the 8th.. Last week of classes presentation. 4 weeks to be code complete.