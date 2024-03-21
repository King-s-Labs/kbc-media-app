import formatDate from '../formatDate';

describe('formatDate', () => {
    let today_date;
    let options;

    beforeEach(() => {
        today_date = new Date();
        options = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC' };
    });

    test('formats date as today', () => {
        const today = new Date(today_date); // March 7th, 2024 (mocked date)
        expect(formatDate(today)).toBe('today, ' + today.toLocaleTimeString('en-US', options));
    });

    test('formats date as yesterday', () => {
        const yesterday = new Date(today_date)
        yesterday.setDate(today_date.getDate() - 1) // March 6th, 2024
        expect(formatDate(yesterday)).toBe('yesterday, ' + yesterday.toLocaleTimeString('en-US', options));
    });

    test('formats date as tomorrow', () => {
        const tomorrow = new Date(today_date); 
        tomorrow.setDate(tomorrow.getDate() + 1) // March 8th, 2024
        expect(formatDate(tomorrow)).toBe('tomorrow, ' + tomorrow.toLocaleTimeString('en-US', options));
    });

    test('formats other date', () => {
        const otherDate = new Date('2024-03-05T12:00:00Z'); // March 5th, 2024
        expect(formatDate(otherDate)).toBe('05/03/24, 12:00 PM');
    });
});
