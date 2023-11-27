# AppContainer Component Documentation

## Overview
The `AppContainer` component functions as a container for the main page of the application. It employs the `AppProvider` from the `AppContext` to manage the state related to the application, specifically the state of the drawer.

## Location of Code
The code for the `AppContainer` component is available [here](https://github.com/nainisha-b/slash/blob/main/client/src/header/AppContainer.js).

## Code Description

### State
1. **isDrawerOpen:**
   - Type: `boolean`
   - Description: Represents the state of the drawer, indicating whether it is currently open or closed.

### Functions
1. **toggleDrawer:**
   - Description: Toggles the state of the drawer, opening it if it's closed and closing it if it's open.

### AppProvider
1. **AppProvider Component:**
   - Imported from `"./AppContext"`.
   - Envelopes the children components, granting them access to the application context.

## Usage
1. **Container for Main Page:**
   - Utilize the `AppContainer` component to encapsulate the main page components.

2. **Drawer State Management:**
   - Utilize the `isDrawerOpen` state and `toggleDrawer` function to manage the state of the drawer within the main page components.

3. **Context Access:**
   - Components nested within `AppContainer` can access the application context to interact with shared state and functions.
