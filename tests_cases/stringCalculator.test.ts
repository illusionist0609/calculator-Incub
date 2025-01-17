import { add } from '../stringCalculator';

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('should return the number when only one number is provided', () => {
        expect(add('1')).toBe(1);
    });

    test('should return the sum of two numbers', () => {
        expect(add('1,5')).toBe(6);
    });

    test('should return the sum of multiple numbers', () => {
        expect(add('1,2,3,4,5')).toBe(15);
    });

    test('should handle newlines between numbers', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    test('should support custom delimiters', () => {
        expect(add('//;\n1;2')).toBe(3);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
    });

    test('should throw an error for multiple negative numbers', () => {
        expect(() => add('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3');
    });
});
