import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MainScreen from '../MainScreen';

describe('MainScreen component', () => {
  test('renders welcome text', () => {
    const { getByText } = render(<MainScreen />);
    const welcomeText = getByText('Welcome to the KBC Media App!');
    expect(welcomeText).toBeTruthy();
  });

  test('renders instructions text', () => {
    const { getByText } = render(<MainScreen />);
    const instructionsText = getByText('Please log in or register to continue.');
    expect(instructionsText).toBeTruthy();
  });

  test('renders Log In button', () => {
    const { getByText } = render(<MainScreen />);
    const loginButton = getByText('Log In');
    expect(loginButton).toBeTruthy();
  });

  test('renders Register button', () => {
    const { getByText } = render(<MainScreen />);
    const registerButton = getByText('Register');
    expect(registerButton).toBeTruthy();
  });

  test('navigates to Login screen when Log In button is pressed', () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByText } = render(<MainScreen navigation={navigationMock} />);
    const loginButton = getByText('Log In');
    fireEvent.press(loginButton);
    expect(navigationMock.navigate).toHaveBeenCalledWith('Login');
  });

  test('navigates to Register screen when Register button is pressed', () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByText } = render(<MainScreen navigation={navigationMock} />);
    const registerButton = getByText('Register');
    fireEvent.press(registerButton);
    expect(navigationMock.navigate).toHaveBeenCalledWith('Register');
  });
});
