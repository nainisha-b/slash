# Cart Context and Reducer Documentation

## Overview
This module provides a React context and a reducer for managing a shopping cart in a React application. It includes a `CartProvider` component to manage the state and actions related to the shopping cart and a custom hook `useCart` to access the cart context in components.

## Location of Code
The code implementing this feature can be found [here](https://github.com/nainisha-b/slash/blob/main/client/src/components/Cart.js).

## Code Description

### Context and Reducer

1. **Action Types**
   - `ADD_TO_CART`: Action type for adding an item to the shopping cart.

2. **Reducer Function**
   - `cartReducer`: A reducer function that handles state changes based on dispatched actions.

3. **Initial State**
   - `initialState`: The initial state of the shopping cart, containing an array of items.

### Context Creation

1. **Context Creation**
   - `CartContext`: A React context created using `createContext()` to manage the shopping cart state.

### CartProvider Component

1. **CartProvider Component**
   - `CartProvider`: A component that provides the cart context and manages the state using the `useReducer` hook.
   - Utilizes the `useEffect` hook to save the cart to the server whenever the cart state changes.
   - Exposes the `addToCart` function to add items to the cart.

2. **useEffect for Server Interaction**
   - `useEffect`: Saves the cart to the server using an HTTP POST request whenever the cart state changes.

3. **addToCart Function**
   - `addToCart`: Dispatches the `ADD_TO_CART` action to add an item to the cart.

### Custom Hook

1. **useCart Hook**
   - `useCart`: A custom hook to access the cart context and related functions.
   - Ensures that `useCart` is used within a `CartProvider`.

## Usage
1. **Integration with Components:**
   - Wrap the root of your application with the `CartProvider` to make the cart context available to all components.
   - Use the `useCart` hook in components that need access to the shopping cart state and actions.

2. **Adding Items to the Cart:**
   - Call the `addToCart` function from the `useCart` hook to add items to the shopping cart.

3. **Saving Cart to Server:**
   - The cart state is automatically saved to the server whenever it changes.

