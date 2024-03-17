import SettingsOptions from "../SettingsOptions";

describe('SettingsOptions function', () => {
  test('returns an array of objects', () => {
    const options = SettingsOptions();
    expect(Array.isArray(options)).toBe(true);
    options.forEach(option => {
      expect(typeof option).toBe('object');
      expect(option).toHaveProperty('name');
      expect(option).toHaveProperty('handler');
      expect(typeof option.name).toBe('string');
      expect(typeof option.handler).toBe('function');
    });
  });

  test('has correct setting option names', () => {
    const options = SettingsOptions();
    const expectedNames = [
      'Account',
      'Notifications',
      'Privacy',
      'Display & Sound',
      'Help & Support',
      'About'
    ];
    options.forEach((option, index) => {
      expect(option.name).toBe(expectedNames[index]);
    });
  });

  test('handler functions log correct messages to console', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const options = SettingsOptions();
    options.forEach(option => {
      option.handler();
    });
    expect(consoleSpy).toHaveBeenCalledTimes(options.length);
    options.forEach((option, index) => {
      expect(consoleSpy).toHaveBeenCalledWith(`${option.name} option selected`);
    });
    consoleSpy.mockRestore();
  });
});
