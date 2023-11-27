# Menu Component Test Cases

## Test Case 1: Renders Menu component with input fields and button

- **Objective:** Ensure that the Menu component renders with the necessary input fields and a search button.

- **Steps:**
  1. Render the Menu component.
  2. Check if the "Enter Item Name" TextField is present.
  3. Check if the "Select Website" Select dropdown is present.
  4. Verify if the "Search Item" Button is present.

- **Expectation:** The Menu component should render with the required input fields and a search button.

## Test Case 2: Updates state on input field changes

- **Objective:** Confirm that the Menu component updates its state when values are entered into the input fields.

- **Steps:**
  1. Render the Menu component.
  2. Simulate user input into the "Enter Item Name" TextField.
  3. Simulate user selection in the "Select Website" dropdown.

- **Expectation:** The component's state (`searchItem` and `searchWeb`) should update with the entered values.

## Test Case 3: Triggers fetchResults function on button click

- **Objective:** Verify that the Menu component triggers the `fetchResults` function when the "Search Item" button is clicked.

- **Steps:**
  1. Render the Menu component.
  2. Mock the `navigate` function.
  3. Simulate user input.
  4. Click the "Search Item" button.

- **Expectation:** The component should call the `fetchResults` function, and the `navigate` function should be called with the "/results" route.

## Test Case 4: Handles fetch error gracefully

- **Objective:** Ensure that the Menu component handles fetch errors gracefully.

- **Steps:**
  1. Render the Menu component.
  2. Mock the `console.error` function.
  3. Simulate user input.
  4. Simulate an error during the fetch process.

- **Expectation:** The component should log the error using `console.error` and set the button state to "Fetched."

## Test Case 5: Displays loading button during fetch

- **Objective:** Confirm that the Menu component displays a loading button during the fetch process.

- **Steps:**
  1. Render the Menu component.
  2. Set the button state to "Fetching."

- **Expectation:** The component should render the loading button while the fetch process is ongoing.

