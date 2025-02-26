// calculateFinance.test.js
const { calculateFinance } = require('./main.js'); // Replace with your actual file name

// Mock console methods
global.console = {
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

describe('calculateFinance', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('calculates balance correctly with valid inputs', () => {
    const result = calculateFinance(1000, 500);
    expect(result.totalIncome).toBe(1000);
    expect(result.totalExpense).toBe(500);
    expect(result.balance).toBe(500);
    expect(console.log).toHaveBeenCalledWith('Total Balance: 500');
    expect(console.log).toHaveBeenCalledWith(
      'Success: Your balance is positive!'
    );
    expect(console.log).toHaveBeenCalledWith(
      'Your income is greater than your expenses.'
    );
  });

  test('handles negative balance correctly', () => {
    const result = calculateFinance(500, 1000);
    expect(result.balance).toBe(-500);
    expect(console.log).toHaveBeenCalledWith('Total Balance: -500');
    expect(console.log).toHaveBeenCalledWith(
      'Warning: Your balance is negative!'
    );
    expect(console.warn).toHaveBeenCalledWith(
      'Warning: Your expenses are greater than your income!'
    );
  });

  test('handles zero balance correctly', () => {
    const result = calculateFinance(500, 500);
    expect(result.balance).toBe(0);
    expect(console.log).toHaveBeenCalledWith('Total Balance: 0');
    expect(console.log).toHaveBeenCalledWith('Your balance is zero.');
    expect(console.log).toHaveBeenCalledWith(
      'Your income and expenses are balanced.'
    );
  });

  test('handles string number inputs correctly', () => {
    const result = calculateFinance('1000', '500');
    expect(result.totalIncome).toBe(1000);
    expect(result.totalExpense).toBe(500);
    expect(result.balance).toBe(500);
  });

  test('handles nullish income input correctly', () => {
    const result = calculateFinance(null, 500);
    expect(result.totalIncome).toBe(0);
    expect(result.totalExpense).toBe(500);
    expect(result.balance).toBe(-500);
    // Check that nullish coalescing is used
    expect(console.log).toHaveBeenCalledWith('Total Balance: -500');
  });

  test('handles nullish expense input correctly', () => {
    const result = calculateFinance(1000, null);
    expect(result.totalIncome).toBe(1000);
    expect(result.totalExpense).toBe(0);
    expect(result.balance).toBe(1000);
  });

  test('handles invalid income input correctly', () => {
    const result = calculateFinance('invalid', 500);
    expect(result.totalIncome).toBe(0);
    expect(result.totalExpense).toBe(500);
    expect(result.balance).toBe(-500);
  });

  test('handles invalid expense input correctly', () => {
    const result = calculateFinance(1000, 'invalid');
    expect(result.totalIncome).toBe(1000);
    expect(result.totalExpense).toBe(0);
    expect(result.balance).toBe(1000);
  });

  test('handles empty string inputs correctly', () => {
    const result = calculateFinance('', '');
    expect(result.totalIncome).toBe(0);
    expect(result.totalExpense).toBe(0);
    expect(result.balance).toBe(0);
  });
});
