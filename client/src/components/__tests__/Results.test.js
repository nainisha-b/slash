import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios'; // You may need to mock axios responses

// Import the component to be tested
import Results from '../Results';
import { CartProvider } from '../Cart'; // Import CartProvider

// Mocking axios get method
jest.mock('axios');

describe('Results Component', () => {
  // Mock data for testing
  const mockData = [
    {
      timestamp: '24/11/2021 22:33:08',
      title: 'Mock Product 1',
      price: '$100.00',
      website: 'amazon',
      link: 'www.example.com/product1',
      rating: '4.5',
    },
    // Add more mock data as needed
  ];

  // Mock exchange rates for testing
  const mockExchangeRates = {
    USD: 1.0,
    EUR: 0.85,
    // Add more currencies as needed
  };

  // Mock useLocation
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      state: {
        response: JSON.stringify(mockData),
      },
    }),
  }));

  // Mock CartProvider
  jest.mock('../Cart', () => ({
    CartProvider: ({ children }) => <>{children}</>, // Mock CartProvider to render its children
    useCart: () => ({
      addToCart: jest.fn(),
    }),
  }));

  // Mock axios response for exchange rates
  axios.get.mockResolvedValue({
    data: {
      rates: mockExchangeRates,
    },
  });

  // Test rendering and functionality
  test('renders Results component', async () => {
    render(
      <CartProvider>
        <Results />
      </CartProvider>
    );

    // Wait for the component to fetch exchange rates
    await screen.findByText('Loading exchange rates...');

    // Check if the product information is rendered
    expect(screen.getByText('Mock Product 1')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument();
    expect(screen.getByText('amazon')).toBeInTheDocument();
    expect(screen.getByText('www.example.com/product1')).toBeInTheDocument();

    // Add more assertions as needed
  });

  // Add more test cases as needed
});
