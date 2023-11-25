import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// Action types
const ADD_TO_CART = 'ADD_TO_CART';

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

// Initial state
const initialState = {
  items: [],
};

// Create context
const CartContext = createContext();

// CartProvider component
const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const saveCartToServer = async () => {
      try {
        await axios.post('http://localhost:8000/api/saveCart', { items: cartState.items });
      } catch (error) {
        console.error('Error saving cart to server:', error);
      }
    };

    saveCartToServer();
  }, [cartState]);

  const addToCart = (item) => {
    console.log('Adding to cart:', item);
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };