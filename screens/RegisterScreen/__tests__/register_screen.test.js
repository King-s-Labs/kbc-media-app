import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterScreen from '../RegisterScreen';

describe('RegisterScreen component', () => {
  test('renders username and password input fields', () => {
    const { getByPlaceholderText } = render(<RegisterScreen />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  test('updates username and password state when typing', () => {
    const { getByPlaceholderText } = render(<RegisterScreen />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(usernameInput, 'testusername');
    fireEvent.changeText(passwordInput, 'testpassword');

    expect(usernameInput.props.value).toBe('testusername');
    expect(passwordInput.props.value).toBe('testpassword');
  });
// TODO: Uncomment when handleRegister() is implemented
//   test('calls handleRegister function when Register button is pressed', () => {
//     const handleRegister = jest.fn();
//     const { getByText } = render(<RegisterScreen handleRegister={handleRegister} />);
//     const registerButton = getByText('Register');
//     fireEvent.press(registerButton);
//     expect(handleRegister).toHaveBeenCalledTimes(1);
//   });
});
