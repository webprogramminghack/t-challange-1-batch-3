const { checkEvenOdd } = require('../challenge2');

describe('checkEvenOdd', () => {
  test('should return even and odd numbers from input', () => {
    const input = '1, 2, 3, 4, 5, 6';
    const result = checkEvenOdd(input);
    expect(result.even).toEqual([2, 4, 6]);
    expect(result.odd).toEqual([1, 3, 5]);
  });

  test('should handle empty input', () => {
    const input = '';
    const result = checkEvenOdd(input);
    expect(result.even).toEqual([0]);
    expect(result.odd).toEqual([]);
  });

  test('should handle input with only even numbers', () => {
    const input = '2, 4, 6, 8';
    const result = checkEvenOdd(input);
    expect(result.even).toEqual([2, 4, 6, 8]);
    expect(result.odd).toEqual([]);
  });

  test('should handle input with only odd numbers', () => {
    const input = '1, 3, 5, 7';
    const result = checkEvenOdd(input);
    expect(result.even).toEqual([]);
    expect(result.odd).toEqual([1, 3, 5, 7]);
  });

  test('should handle input with mixed numbers', () => {
    const input = '10, 15, 20, 25, 30';
    const result = checkEvenOdd(input);
    expect(result.even).toEqual([10, 20, 30]);
    expect(result.odd).toEqual([15, 25]);
  });
});
