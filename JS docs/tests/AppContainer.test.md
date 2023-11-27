# AppContainer Component Test Cases

## Test Case 1: Renders AppContainer with AppProvider

- **Objective:** Ensure that the AppContainer component renders with the AppProvider.

- **Steps:**
  1. Render the AppContainer component with the text "Hello World" as children.
  2. Check if the AppProvider (mocked version) is present in the rendered output.

- **Expectation:** The AppContainer component should render with the AppProvider, and the mocked context should be present.

## Test Case 2: Toggles Drawer State on Button Click

- **Objective:** Verify that the toggleDrawer function correctly toggles the drawer state.

- **Steps:**
  1. Render the AppContainer component with a button labeled "Toggle Drawer."
  2. Check if the drawer is initially closed by verifying the value attribute of the mocked AppProvider.
  3. Simulate a button click using fireEvent.click to trigger the toggleDrawer function.
  4. Check if the drawer is now open by verifying the updated value attribute.

- **Expectation:** The toggleDrawer function should correctly toggle the drawer state from closed to open.
