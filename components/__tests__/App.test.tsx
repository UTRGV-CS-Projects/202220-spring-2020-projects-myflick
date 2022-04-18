import React from 'react';
import renderer from 'react-test-renderer';
import TestScreen from '../../screens/TestScreen'
import {cleanup, fireEvent, render} from '@testing-library/react-native';
// npm run test

describe("Testing the Test Screen", () => {
    it("Has 1 child View", () => {
        const tree: any = renderer.create(<TestScreen />).toJSON();
        expect(tree?.children?.length).toBe(2);
    })
    it("A button with testId Exists", () => {
        const testIdName = 'pressMeButton';
        const {getByTestId} = render(<TestScreen />)
        const foundButton = getByTestId(testIdName);

        expect(foundButton).toBeTruthy();
    })
    it("Using the Accessibility Label", () => {
        const accessibilityLabel = 'Press me';
        const {getByLabelText} = render(<TestScreen />)

     const foundButton = getByLabelText(accessibilityLabel);

     expect(foundButton).toBeTruthy();
    })
    it("Pressing on a button", () => {
        const testIdName = 'pressMeButton';
        const {getByTestId} = render(<TestScreen />)
        const foundButton = getByTestId(testIdName);
        fireEvent.press(foundButton);
        expect(foundButton).toBeTruthy();
    })
})