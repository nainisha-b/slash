# Navigation Component Test Cases

## Test Case 1: Renders Navigation component with app bar and drawer

- **Objective:** Ensure that the Navigation component renders with the app bar and navigational drawer.

- **Steps:**
  1. Render the Navigation component.
  2. Check if the app bar is present.
  3. Check if the navigational drawer is present.

- **Expectation:** The Navigation component should render with the app bar and navigational drawer.


## Test Case 2: Toggles drawer on menu button click

- **Objective:** Confirm that the Navigation component toggles the drawer when the menu button is clicked.

- **Steps:**
  1. Render the Navigation component.
  2. Mock the `context.toggleDrawer` function.
  3. Click the menu button.

- **Expectation:** The component should call the `context.toggleDrawer` function, toggling the state of the navigational drawer.

