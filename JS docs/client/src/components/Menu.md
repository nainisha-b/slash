# Menu Component Documentation

## Overview
The `Menu` component is a React functional component that serves as a user interface for entering search criteria and initiating a search operation. It includes input fields for entering the item name and selecting a website, along with a button to trigger the search. Additionally, it utilizes Material-UI components for styling and incorporates a loading button during the search operation.

## Location of Code
The code for the Menu component can be found [here](https://github.com/nainisha-b/slash/blob/main/client/src/components/Menu.js).

## Code Description

### State Management
1. **State Hooks**
   - `useState`: Manages the component's state, including the selected website (`searchWeb`), entered item name (`searchItem`), and the state of the button (`button`) to dynamically update its label.

### Material-UI Components
1. **TextField Component**
   - Material-UI `TextField` is used to input and display the item name.

2. **FormControl and Select Components**
   - Material-UI `FormControl` and `Select` components are used for selecting a website from a dropdown menu.

3. **Button Components**
   - Material-UI `Button` component is used for triggering the search operation.
   - Material-UI `LoadingButton` component is conditionally rendered during the search operation, providing visual feedback to the user.

### Navigation
1. **useNavigate Hook**
   - `useNavigate` from the `react-router-dom` library is used for programmatic navigation to the "/results" page with the search results.

### Data Fetching
1. **fetchResults Function**
   - Asynchronously fetches search results using the `getResults` utility function.
   - Navigates to the "/results" page, passing the search results as state.

2. **handleSubmission Function**
   - Handles the button click event, initiating the search operation by calling `fetchResults`.
   - Dynamically updates the button label during the search process.

### Styling
1. **Inline Styles**
   - Inline styles are used to customize the component's appearance, including layout and spacing adjustments.

## Usage
1. **Integration with Routes or Components:**
   - Integrate the `Menu` component into your React application, typically as part of a routing system or within a larger component structure.

2. **Customization of Search Criteria:**
   - Users can enter the item name and select a website before initiating the search.

3. **Search Trigger:**
   - Click the "Search Item" button to initiate the search operation.

4. **Loading Feedback:**
   - During the search operation, a loading button provides visual feedback to the user.
