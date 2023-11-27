# Results Component Test Cases

## Test Case 1: Renders with Default Props

- **Objective:** Ensure that the `Results` component renders without crashing with default props.

- **Steps:**
  1. Render the `Results` component without passing any props.
  2. Check if the component renders without errors.

- **Expectation:** The `Results` component should render without errors with default props.

## Test Case 2: Renders Correctly with Provided Data

- **Objective:** Confirm that the `Results` component renders the expected number of items and displays their details correctly.

- **Steps:**
  1. Render the `Results` component with a mock set of data.
  2. Check if the component renders the correct number of items.
  3. Verify that each item displays the correct details such as title, price, website, and link.

- **Expectation:** The `Results` component should render the correct number of items with accurate details.

## Test Case 3: Handles Currency Conversion

- **Objective:** Verify that the `Results` component correctly handles currency conversion based on the selected currency.

- **Steps:**
  1. Render the `Results` component with a set of items.
  2. Change the selected currency.
  3. Check if the displayed prices are updated based on the selected currency.

- **Expectation:** The displayed prices for each item should update according to the selected currency.

## Test Case 4: Handles Sorting

- **Objective:** Confirm that the `Results` component correctly handles sorting when clicking on table headers.

- **Steps:**
  1. Render the `Results` component with a set of items.
  2. Click on different table headers to trigger sorting.
  3. Check if the items are re-ordered based on the selected table header.

- **Expectation:** Clicking on table headers should re-order the items based on the selected sorting criteria.

## Test Case 5: Handles Pagination

- **Objective:** Ensure that the `Results` component correctly handles pagination.

- **Steps:**
  1. Render the `Results` component with a set of items.
  2. Change the number of items per page.
  3. Navigate through different pages using pagination.
  4. Check if the displayed items match the expected items for the selected page.

- **Expectation:** Pagination should work correctly, and the displayed items should match the selected page.

## Test Case 6: Handles Minimum Rating Filtering

- **Objective:** Verify that the `Results` component correctly filters items based on the minimum rating.

- **Steps:**
  1. Render the `Results` component with a set of items.
  2. Change the minimum rating value.
  3. Check if only items with ratings equal to or above the selected minimum rating are displayed.

- **Expectation:** The displayed items should be filtered based on the selected minimum rating.

## Test Case 7: Handles Add to Wishlist Functionality

- **Objective:** Confirm that the `Results` component correctly adds items to the wishlist.

- **Steps:**
  1. Render the `Results` component with a set of items.
  2. Click the "Add to Wishlist" button for a specific item.
  3. Check if the item is successfully added to the wishlist.

- **Expectation:** Clicking the "Add to Wishlist" button should add the item to the wishlist.

