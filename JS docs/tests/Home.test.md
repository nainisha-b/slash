# Home Component Test Cases

## Test Case 1: Renders Home component with hardcoded cart data

- **Objective:** Ensure that the Home component renders with the hardcoded cart data, including table headers and data.

- **Steps:**
  1. Render the Home component.
  2. Check if the component displays the "My Wishlist" heading.
  3. Verify if the table headers ("Title," "Price," "Website," "Link," "Image," "Rating," and "Refresh") are present.

- **Expectation:** The Home component should render with the expected UI elements and headers.

## Test Case 2: Displays the cart data with proper links and images

- **Objective:** Confirm that the Home component displays cart data with proper links and images.

- **Steps:**
  1. Render the Home component.
  2. Check if the "Get Link" links are displayed for each item.
  3. Check if the images are displayed for each item.

- **Expectation:** The component should correctly render links and images for each item in the cart data.

## Test Case 3: Triggers refresh function when refresh button is clicked

- **Objective:** Verify that the Home component triggers the refresh function when the refresh button is clicked.

- **Steps:**
  1. Render the Home component.
  2. Mock the `window.alert` function.
  3. Click the "Refresh" button.
  4. Check if the `window.alert` function is called with the expected message.

- **Expectation:** The component should trigger the refresh function and display an alert with the message "Latest prices updated."

