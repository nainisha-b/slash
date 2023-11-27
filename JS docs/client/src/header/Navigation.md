# Navigation Component Documentation

## Overview
The `Navigation` component serves as a template for constructing the navigational drawer and appbar in a React application. It utilizes the `NavigationDrawer` component and manages the login/logout functionality.

## Location of Code
The code for the `Navigation` component can be found [here](https://github.com/nainisha-b/slash/blob/main/client/src/header/Navigation.js).

## Code Description

### State
1. **isLoggedIn:**
   - Type: `boolean`
   - Description: Represents the login status of the user. Controls the display of the navigation elements based on the user's authentication status.

### Functions
1. **handleLogout:**
   - Description: Handles the user logout functionality. Sets the `isLoggedIn` state to `false` and redirects the user to the logout page.

2. **handleLogin:**
   - Description: Handles the user login functionality. Displays a login alert (placeholder functionality). Sets the `isLoggedIn` state to `true`.

### Components
1. **NavigationDrawer Component:**
   - Imported from `"./NavigationDrawer"`.
   - Renders the navigational drawer.

### AppBar and Toolbar
1. **AppBar and Toolbar Components:**
   - Imported from `@mui/material`.
   - Constructs the application's appbar and toolbar, including the menu button, app title, and login/logout button.

2. **IconButton:**
   - Imported from `@mui/material`.
   - Represents the menu button, triggering the display of the navigational drawer.

### Buttons
1. **Login/Logout Buttons:**
   - Imported from `@mui/material`.
   - Conditional rendering of login/logout buttons based on the `isLoggedIn` state.

## Usage
1. **Integration with Main Component:**
   - Include the `Navigation` component within the main component or layout where the appbar and navigational drawer are needed.

2. **Login/Logout Logic:**
   - Utilize the `handleLogin` and `handleLogout` functions to implement the desired login/logout behavior.

3. **NavigationDrawer Integration:**
   - The `NavigationDrawer` component is included within the `Navigation` component for displaying the navigational drawer.

