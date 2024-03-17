import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Register from '../Register';

describe('Register component', () => {
  test('renders username, email, password, and confirm password input fields', () => {
    const { getByPlaceholderText } = render(<Register />);
    const usernameInput = getByPlaceholderText('Username');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    expect(usernameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(confirmPasswordInput).toBeTruthy();
  });

  test('updates username, email, password, and confirm password state when typing', () => {
    const { getByPlaceholderText } = render(<Register />);
    const usernameInput = getByPlaceholderText('Username');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');

    fireEvent.changeText(usernameInput, 'testusername');
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'testpassword');
    fireEvent.changeText(confirmPasswordInput, 'testpassword');

    expect(usernameInput.props.value).toBe('testusername');
    expect(emailInput.props.value).toBe('test@example.com');
    expect(passwordInput.props.value).toBe('testpassword');
    expect(confirmPasswordInput.props.value).toBe('testpassword');
  });

  test('calls handleRegister function when Register button is pressed', () => {
    const handleRegister = jest.fn();
    const { getByText } = render(<Register handleRegister={handleRegister} />);
    const registerButton = getByText('Register');
    fireEvent.press(registerButton);
    expect(handleRegister).toHaveBeenCalledTimes(1);
  });
});
