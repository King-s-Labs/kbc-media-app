// settings.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import Settings from '../Settings';

describe('Settings component', () => {
  test('renders "Settings" text', () => {
    const { getByText } = render(<Settings />);
    const settingsText = getByText('Settings');
    expect(settingsText).toBeTruthy();
  });

  test('renders Settings component without crashing', () => {
    render(<Settings />);
  });
});
