import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native-paper';
import BaseRequestComponent from '../BaseRequestComponent';

// Mock data
const mockPosts = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
];

// Mock card component
const MockCard = ({ post }) => (
  <Text>{post.title}</Text>
);

describe('<BaseRequestComponent />', () => {
  test('renders title correctly', () => {
    const { getByText } = render(
      <BaseRequestComponent posts={mockPosts} Card={MockCard} title="Test Title" />
    );
    expect(getByText('Test Title (2)')).toBeTruthy();
  });

  test('renders correct number of posts', () => {
    const { getAllByText } = render(
      <BaseRequestComponent posts={mockPosts} Card={MockCard} title="Test Title" />
    );
    expect(getAllByText(/Post/).length).toBe(2);
  });

  test('renders posts with correct titles', () => {
    const { getByText } = render(
      <BaseRequestComponent posts={mockPosts} Card={MockCard} title="Test Title" />
    );
    expect(getByText('Post 1')).toBeTruthy();
    expect(getByText('Post 2')).toBeTruthy();
  });
});
