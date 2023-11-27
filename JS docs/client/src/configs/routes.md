# Routes Configuration Documentation

## Overview
The `routes` configuration file defines the routes for a React application, specifying the components to be rendered for each route along with associated icons. This configuration is often used with a navigation system, such as `react-router-dom`, to define the structure of the application.

## Location of Code
The code for the routes configuration can be found [here](https://github.com/nainisha-b/slash/blob/main/client/src/configs/routes.js).

## Code Description

### Route Objects
1. **Menu Route**
   - Path: `/`
   - Name: "Menu"
   - Component: `<Menu />`
   - Icon: `<SummarizeIcon />`

2. **Results Route**
   - Path: `/results`
   - Name: "Results"
   - Component: `<Results />`
   - Icon: `<EqualizerIcon />`

3. **Graphs Route**
   - Path: `/graphs`
   - Name: "Graphs"
   - Component: `<Graphs />`
   - Icon: `<InsightsIcon />`

4. **Wishlist Route**
   - Path: `/wishlist`
   - Name: "My Wishlist"
   - Component: `<Home />`
   - Icon: `<FormatListBulletedIcon />`

### Components
1. **Home Component**
   - Imported from `"../components/Home"`

2. **Menu Component**
   - Imported from `"../components/Menu"`

3. **Graphs Component**
   - Imported from `"../components/Graphs"`

4. **Results Component**
   - Imported from `"../components/Results"`

### Icons
1. **Material-UI Icons**
   - Icons from Material-UI library are used for each route to provide visual representation in the navigation.

### CartProvider
1. **CartProvider**
   - Imported from `"../components/Home"`
   - Used for managing the shopping cart context. Ensure that it wraps the components requiring access to the shopping cart.

## Usage
1. **Navigation Integration:**
   - Utilize the `routes` array with a navigation system (e.g., `react-router-dom`) to define the structure of the application.

2. **Icon Usage:**
   - Icons from Material-UI are used to visually represent each route in the navigation.

3. **Component Rendering:**
   - The specified components (`<Menu />`, `<Results />`, `<Graphs />`, `<Home />`) are rendered for their respective routes.

