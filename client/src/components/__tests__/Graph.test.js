import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Graphs from '../Graphs';

describe('Graphs component', () => {
  test('renders correctly', () => {
    render(<Graphs />);
    
    // Check if the component renders the input field and button
    expect(screen.getByLabelText('Search Item')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Chart Results' })).toBeInTheDocument();
  });
});