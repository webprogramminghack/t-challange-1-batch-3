// main.test.js
const { calculateFinance } = require('../challenge1.js');

global.console = {
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

describe('calculateFinance', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('calculates balance correctly with valid inputs', () => {
    const result = calculateFinance(1000, 500);
    expect(result.totalIncome).toBe(1000);
    expect(result.totalExpense).toBe(500);
    expect(result.balance).toBe(500);
    expect(console.log).toHaveBeenCalledWith(
      'Success: Your balance is positive!'
    );
    expect(console.log).toHaveBeenCalledWith(
      'Your income is greater than your expenses.'
    );
    expect(console.log).toHaveBeenCalledWith('Total Income: 1000');
    expect(console.log).toHaveBeenCalledWith('Total Expense: 500');
    expect(console.log).toHaveBeenCalledWith('Total Balance: 500');
  });

  test('handles negative balance correctly', () => {
    const result = calculateFinance(500, 1000);
    expect(result.balance).toBe(-500);
    expect(console.log).toHaveBeenCalledWith(
      'Warning: Your balance is negative!'
    );
    expect(console.log).toHaveBeenCalledWith(
      'Warning: Your expenses are greater than your income!'
    );
    expect(console.log).toHaveBeenCalledWith('Total Balance: -500');
  });

  test('handles zero balance correctly', () => {
    const result = calculateFinance(500, 500);
    expect(result.balance).toBe(0);
    expect(console.log).toHaveBeenCalledWith('Your balance is zero.');
    expect(console.log).toHaveBeenCalledWith(
      'Your income and expenses are balanced.'
    );
    expect(console.log).toHaveBeenCalledWith('Total Balance: 0');
  });

  test('handles string number inputs correctly', () => {
    const result = calculateFinance('1000', '500');
    expect(result.totalIncome).toBe(1000);
    expect(result.totalExpense).toBe(500);
    expect(result.balance).toBe(500);
  });

  test('handles null inputs by converting to 0', () => {
    const result = calculateFinance(null, null);
    expect(result.totalIncome).toBe(0);
    expect(result.totalExpense).toBe(0);
    expect(result.balance).toBe(0);
    expect(console.log).toHaveBeenCalledWith('Your balance is zero.');
  });

  test('handles invalid income input by converting to NaN', () => {
    const result = calculateFinance('invalid', 500);
    expect(isNaN(result.totalIncome)).toBe(true);
    expect(result.totalExpense).toBe(500);
    expect(isNaN(result.balance)).toBe(true);
  });

  test('handles invalid expense input by converting to NaN', () => {
    const result = calculateFinance(1000, 'invalid');
    expect(result.totalIncome).toBe(1000);
    expect(isNaN(result.totalExpense)).toBe(true);
    expect(isNaN(result.balance)).toBe(true);
  });

  test('handles empty string inputs by converting to 0', () => {
    const result = calculateFinance('', '');
    expect(result.totalIncome).toBe(0);
    expect(result.totalExpense).toBe(0);
    expect(result.balance).toBe(0);
  });

  test('handles undefined inputs by converting to NaN', () => {
    const result = calculateFinance(undefined, undefined);
    expect(isNaN(result.totalIncome)).toBe(true);
    expect(isNaN(result.totalExpense)).toBe(true);
    expect(isNaN(result.balance)).toBe(true);
  });

  test('processes nullish coalescing correctly on the balance calculation', () => {
    const result = calculateFinance(500, 200);
    expect(result.balance).toBe(300);
    expect(console.log).toHaveBeenCalledWith('Total Balance: 300');
  });
});
