import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../Login';

describe('Login component', () => {
  test('renders username and password input fields', () => {
    const { getByPlaceholderText } = render(<Login />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  test('updates username and password state when typing', () => {
    const { getByPlaceholderText } = render(<Login />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(usernameInput, 'testusername');
    fireEvent.changeText(passwordInput, 'testpassword');

    expect(usernameInput.props.value).toBe('testusername');
    expect(passwordInput.props.value).toBe('testpassword');
  });

  test('calls handleLogin function when Login button is pressed', () => {
    const handleLogin = jest.fn();
    const { getByText } = render(<Login handleLogin={handleLogin} />);
    const loginButton = getByText('Login');
    fireEvent.press(loginButton);
    expect(handleLogin).toHaveBeenCalledTimes(1);
  });
});
