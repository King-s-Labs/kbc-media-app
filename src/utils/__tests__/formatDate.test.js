import formatDate from "../formatDate";

// Mock current date
const realDate = Date.now;

beforeEach(() => {
    Date.now = jest.fn(() => new Date('2024-03-07T12:00:00Z').getTime()); // Set current date to March 7th, 2024
});

afterEach(() => {
    Date.now = realDate;
});

describe('formatDate function', () => {
    test('formats date as today', () => {
        const today = new Date('2024-03-07T08:00:00Z'); // Same day as current date
        expect(formatDate(today)).toBe('today, 08:00 AM');
    });

    test('formats date as yesterday', () => {
        const yesterday = new Date('2024-03-06T08:00:00Z'); // One day before current date
        expect(formatDate(yesterday)).toBe('yesterday, 08:00 AM');
    });

    test('formats date as tomorrow', () => {
        const tomorrow = new Date('2024-03-08T08:00:00Z'); // One day after current date
        expect(formatDate(tomorrow)).toBe('tomorrow, 08:00 AM');
    });

    test('formats date as another day', () => {
        const otherDay = new Date('2024-03-05T08:00:00Z'); // Any other day
        expect(formatDate(otherDay)).toBe('05/03/24, 08:00 AM');
    });
});
