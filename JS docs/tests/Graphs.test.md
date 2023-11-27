# Graphs Component Test Cases

## Test Case 1: Renders Graphs component with initial state

- **Objective:** Ensure that the Graphs component renders with the initial state, including the search input and the "Chart Results" button.

- **Steps:**
  1. Render the Graphs component.
  2. Check if the search input and "Chart Results" button are present.

- **Expectation:** The Graphs component should render with the expected initial state.

## Test Case 2: Displays loading state while fetching data

- **Objective:** Verify that the component displays a loading state while fetching data.

- **Steps:**
  1. Render the Graphs component.
  2. Trigger data fetching by clicking the "Chart Results" button.
  3. Check if the loading state is displayed.
  4. Wait for the loading state to disappear.

- **Expectation:** The component should show a loading state during data fetching, and it should disappear once the data is loaded.

## Test Case 3: Displays charts when data is fetched

- **Objective:** Confirm that the component displays charts when data is successfully fetched.

- **Steps:**
  1. Render the Graphs component.
  2. Mock the fetch function to return sample data.
  3. Trigger data fetching by clicking the "Chart Results" button.
  4. Wait for the loading state to disappear.
  5. Check if the pie chart and line chart are displayed.

- **Expectation:** The component should render the pie chart and line chart with the fetched data.

