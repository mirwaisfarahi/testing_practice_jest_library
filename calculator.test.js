const Calculator = require('./calculator.js');


describe('calculation result', () => {
    test('add result', () => expect(Calculator.add(1,2)).toBe(3))
    test('add result', () => expect(Calculator.add(100,200)).toBe(300))
    test('add result', () => expect(Calculator.add(1,-2)).toBe(-1))
});

describe('calculation result', () => {
    test('Subtract result', () => expect(Calculator.substract(1,2)).toBe(-1))
    test('Subtract result', () => expect(Calculator.substract(200,100)).toBe(100))
    test('Subtract result', () => expect(Calculator.substract(1,-2)).toBe(3))
});

describe('calculation result', () => {
    test('multiply result', () => expect(Calculator.multiply(1,2)).toBe(2))
    test('multiply result', () => expect(Calculator.multiply(100,2)).toBe(200))
    test('multiply result', () => expect(Calculator.multiply(1,-2)).toBe(-2))
});

describe('calculation result', () => {
    test('divide result', () => expect(Calculator.divide(9,3)).toBe(3))
    test('divide result', () => expect(Calculator.divide(0,1)).toMatch(/Invalid!/))
    test('divide result', () => expect(Calculator.divide(10 , 0)).toMatch(/Not Allowed!/))
    test('divide result', () => expect(Calculator.divide(0 , 0)).toMatch(/Not Allowed!/))
});