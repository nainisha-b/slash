import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../Home';

// Mocking the alert function to prevent actual alerts during tests
jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('Home component', () => {
//   test('renders wishlist table with hardcoded data', () => {
//     render(<Home />);

//     // Check if the wishlist table is rendered
//     const wishlistTable = screen.getByRole('table');
//     expect(wishlistTable).toBeInTheDocument();

//     // Check if the table contains the correct number of rows
//     const rows = screen.getAllByRole('row');
//     expect(rows.length).toBe(3); // Including the table header

//     // Check if the "Refresh" button is rendered
//     const refreshButton = screen.getByRole('button', { name: 'Refresh' });
//     expect(refreshButton).toBeInTheDocument();
//   });

  test('clicking Refresh button triggers alert', () => {
    render(<Home />);

    // Click the "Refresh" button
    const refreshButtons = screen.getAllByRole('button', { name: 'Refresh' });
    const firstRefreshButton = refreshButtons[0];

    // Click the first "Refresh" button
    fireEvent.click(firstRefreshButton);

    // Check if the alert function was called
    expect(window.alert).toHaveBeenCalledWith('Latest prices updated');
  });
});
