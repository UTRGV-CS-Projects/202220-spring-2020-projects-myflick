import React from 'react';
import renderer from 'react-test-renderer';
import TestScreen from '../../screens/TestScreen'

describe("Testing the Test Screen", () => {
    it("Has 1 child View", () => {
        const tree: any = renderer.create(<TestScreen />).toJSON();
        expect(tree?.children?.length).toBe(1);
    })
})