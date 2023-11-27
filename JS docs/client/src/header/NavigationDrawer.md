# NavigationDrawer Component Documentation

## Overview
The `NavigationDrawer` component constructs a navigation drawer with various options based on the defined routes in the application. It uses the `Drawer`, `List`, `ListItem`, `ListItemText`, and `ListItemIcon` components from Material-UI.

## Location of Code
The code for the `NavigationDrawer` component can be found [here](https://github.com/nainisha-b/slash/blob/main/client/src/header/NavigationDrawer.js).

## Code Description

### Context
1. **AppContext:**
   - Imported from `"./AppContext"`.
   - Utilized to access the `isDrawerOpen` state and `toggleDrawer` function to control the drawer's visibility.

### Components
1. **Drawer Component:**
   - Imported from `@mui/material`.
   - Represents the main container for the navigation drawer.

2. **List, ListItem, ListItemText, ListItemIcon Components:**
   - Imported from `@mui/material`.
   - Constructs the list items within the navigation drawer.

### Styling
1. **withStyles:**
   - Imported from `@mui/styles`.
   - Provides styling to the `NavigationDrawer` component using the specified styles.

### Routes Configuration
1. **routes:**
   - Imported from `"../configs/routes"`.
   - Defines the routes and corresponding icons for the navigation drawer options.

### Functions
1. **context.toggleDrawer:**
   - Toggles the visibility of the drawer.

### Links
1. **Link Component:**
   - Imported from `"react-router-dom"`.
   - Enables navigation to different routes within the application.

## Usage
1. **Integration with Main Component:**
   - Include the `NavigationDrawer` component within the main component or layout where the navigation drawer is needed.

2. **Routing Configuration:**
   - Ensure that the `routes` configuration includes the necessary information for each route, such as `path`, `name`, and `icon`.

