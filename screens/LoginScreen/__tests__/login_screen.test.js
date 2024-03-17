import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';

describe('LoginScreen component', () => {
  test('renders username and password input fields', () => {
    const { getByPlaceholderText } = render(<LoginScreen />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  test('updates username and password state when typing', () => {
    const { getByPlaceholderText } = render(<LoginScreen />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(usernameInput, 'testusername');
    fireEvent.changeText(passwordInput, 'testpassword');

    expect(usernameInput.props.value).toBe('testusername');
    expect(passwordInput.props.value).toBe('testpassword');
  });

  test('calls handleLogin function when Log In button is pressed', () => {
    const handleLogin = jest.fn();
    const { getByText } = render(<LoginScreen handleLogin={handleLogin} />);
    const loginButton = getByText('Log In');
    fireEvent.press(loginButton);
    expect(handleLogin).toHaveBeenCalledTimes(1);
  });
});
