import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PostRequestButton from '../PostRequestButton';

describe('<PostRequestButton />', () => {
  test('renders button text correctly', () => {
    const buttonText = 'Make a post request';
    const { getByText } = render(<PostRequestButton buttonText={buttonText} />);
    expect(getByText(buttonText)).toBeTruthy();
  });

  test('fires onPress event when button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<PostRequestButton onPress={onPressMock} />);
    fireEvent.press(getByTestId('post-request-button'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
