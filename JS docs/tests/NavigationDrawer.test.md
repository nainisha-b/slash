# NavigationDrawer Component Test Cases

## Test Case 1: Renders NavigationDrawer component with default styles

- **Objective:** Ensure that the NavigationDrawer component renders with the default styles.

- **Steps:**
  1. Render the NavigationDrawer component.
  2. Check if the component renders without errors.
  3. Check if the default styles are applied.

- **Expectation:** The NavigationDrawer component should render without errors, and the default styles should be applied.

## Test Case 2: Renders correct number of navigation items

- **Objective:** Confirm that the NavigationDrawer component renders the correct number of navigation items based on the configured routes.

- **Steps:**
  1. Render the NavigationDrawer component.
  2. Check if the number of rendered navigation items matches the number of configured routes.

- **Expectation:** The NavigationDrawer should render the same number of navigation items as the configured routes.

## Test Case 3: Renders navigation items with correct content

- **Objective:** Verify that the NavigationDrawer component renders navigation items with the correct content (icons and names) based on the configured routes.

- **Steps:**
  1. Render the NavigationDrawer component.
  2. Check if each rendered navigation item matches the content defined in the configured routes.

- **Expectation:** Each rendered navigation item should have the correct icon and name based on the configured routes.

## Test Case 4: Toggles drawer state on open and close

- **Objective:** Confirm that the NavigationDrawer component toggles its open/closed state when the `toggleDrawer` function is called.

- **Steps:**
  1. Render the NavigationDrawer component.
  2. Mock the `context.toggleDrawer` function.
  3. Call the `toggleDrawer` function.
  4. Check if the drawer state toggles between open and closed.

- **Expectation:** The NavigationDrawer should toggle its state correctly when the `toggleDrawer` function is called.

## Test Case 5: Redirects to correct route on item click

- **Objective:** Ensure that the NavigationDrawer component redirects to the correct route when a navigation item is clicked.

- **Steps:**
  1. Render the NavigationDrawer component.
  2. Mock the `Link` component.
  3. Click each navigation item.
  4. Check if the component redirects to the correct route.

- **Expectation:** Clicking each navigation item should trigger a redirect to the corresponding route.

