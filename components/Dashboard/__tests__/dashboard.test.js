import React from 'react';
import { render } from '@testing-library/react-native';
import Dashboard from '../Dashboard';

describe('Dashboard component', () => {
  test('renders dashboard text', () => {
    const { getByText } = render(<Dashboard />);
    const dashboardText = getByText('Dashboard');
    expect(dashboardText).toBeTruthy();
  });

  // Add more tests as needed
});