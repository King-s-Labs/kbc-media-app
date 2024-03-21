import React from 'react';
import { render } from '@testing-library/react-native';
import BaseRequestCard from '../BaseRequestCard';

// Mock post data
const mockPost = {
    name: 'Test Request',
    department: 'Test Department',
    post_time: new Date(),
    time_sent_at: new Date(),
    due_date: new Date(),
    approved: true,
    requested_approval: false,
    assigned_to: 'John Doe',
    post_type: 'instagram'
};

describe('<BaseRequestCard />', () => {
    test('renders correctly with default props', () => {
        const { getByText } = render(<BaseRequestCard post={mockPost} />);
        expect(getByText('Test Request')).toBeTruthy();
    });

    test('renders department information when showDepartment prop is true', () => {
        const { getByText } = render(<BaseRequestCard post={mockPost} showDepartment />);
        expect(getByText('Requested by Test Department')).toBeTruthy();
    });

    test('renders received time information when showReceivedTime and showDepartment props are true', () => {
        const { getByText } = render(<BaseRequestCard post={mockPost} showReceivedTime showDepartment />);
        expect(getByText(/Received/)).toBeTruthy(); // Assuming `formatDate` will format the date correctly
    });

    test('renders post time information when showPostTime prop is true and there is a post time', () => {
        const { getByText } = render(<BaseRequestCard post={mockPost} showPostTime />);
        expect(getByText(/Scheduled for/)).toBeTruthy(); // Assuming `formatDate` will format the date correctly
    });

    test('renders post time information when showPostTime prop is true and there is no post time', () => {
        const { getByText } = render(<BaseRequestCard post={{ ...mockPost, post_time: null }} showPostTime />);
        expect(getByText('Not scheduled to be posted yet')).toBeTruthy();
    });

    test('renders sent time information when showReceivedTime prop is true and showDepartment prop is false', () => {
        const { getByText } = render(<BaseRequestCard post={mockPost} showReceivedTime />);
        expect(getByText(/Sent/)).toBeTruthy();
    });

    test('renders due date information when there is a due date set', () => {
        const { getByText } = render(<BaseRequestCard post={mockPost} />);
        expect(getByText(/Due for/)).toBeTruthy();
    });

    test('renders due date information when there is no due date set', () => {
        const { getByText } = render(<BaseRequestCard post={{ ...mockPost, due_date: null }} />);
        expect(getByText('No due date set')).toBeTruthy();
    });

    test('renders assigned to information when showAssignedTo prop is true', () => {
        const { getByText } = render(<BaseRequestCard post={mockPost} showAssignedTo />);
        expect(getByText('Assigned to John Doe')).toBeTruthy();
    });

    test('renders correct approval status text', () => {
        const { getByText } = render(<BaseRequestCard post={mockPost} />);
        expect(getByText('Approved')).toBeTruthy();
    });

    test('renders correct pending approval status text', () => {
        const { getByText } = render(<BaseRequestCard post={{ ...mockPost, approved: false }} />);
        expect(getByText('Not approved')).toBeTruthy();
    });
});
