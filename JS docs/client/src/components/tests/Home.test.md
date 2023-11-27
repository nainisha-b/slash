# Home Component Testing Documentation

## Overview
This script performs testing for the Home component in a React application. The tests are written using the `@testing-library/react` library. The component is tested for rendering a wishlist table and triggering an alert on the click of the "Refresh" button.

## Location of Code
The code implementing this testing feature can be found [here](https://github.com/nainisha-b/slash/blob/main/client/src/components/__tests__/Home.test.js).

## Code Description

### Testing Library
- The script uses `@testing-library/react` to perform unit tests on the React component.

### Test Descriptions

1. **Clicking Refresh button triggers alert**
   - Renders the Home component.
   - Clicks the "Refresh" button.
   - Verifies that the `window.alert` function is called with the message 'Latest prices updated'.

## Usage
1. **Running Tests:**
   - Execute the test script to ensure the Home component behaves as expected.
   - Use the testing library assertions to verify the rendering of the wishlist table and the triggering of the alert on button click.

## Note
- The `window.alert` function is mocked to prevent actual alerts during tests.
