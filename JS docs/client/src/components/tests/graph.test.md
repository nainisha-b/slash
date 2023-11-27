# Graphs Component Testing Documentation

## Overview
This script performs testing for the Graphs component in a React application. The tests are written using the `@testing-library/react` library to ensure that the component renders correctly.

## Location of Code
The code implementing this testing feature can be found [here](https://github.com/nainisha-b/slash/blob/main/client/src/components/__tests__/Graph.test.js).

## Code Description

### Testing Library
- The script uses `@testing-library/react` to perform unit tests on the React component.

### Test Description

1. **Graphs component renders correctly**
   - Checks if the Graphs component renders the input field and button as expected.
   - Utilizes `render` from `@testing-library/react` to render the Graphs component.
   - Asserts that the input field with the label 'Search Item' is present.
   - Asserts that the button with the label 'Chart Results' is present.

## Usage
1. **Running Tests:**
   - Execute the test script to ensure the Graphs component behaves as expected.
   - Use the testing library assertions to verify the presence of the input field and button.

## Note
- This testing script focuses on the basic rendering aspects of the Graphs component to ensure that the input field and button are present.

