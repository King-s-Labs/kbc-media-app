import React from 'react';
import { render } from '@testing-library/react-native';
import Drafts from '../DraftsScreen';

describe('Drafts component', () => {
  test('renders drafts text', () => {
    const { getByText } = render(<Drafts />);
    const draftsText = getByText('Drafts');
    expect(draftsText).toBeTruthy();
  });
});