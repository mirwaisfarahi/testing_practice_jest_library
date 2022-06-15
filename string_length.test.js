const string_length = require('./string_length.js')

test('return count of string characters', () => {
    expect(string_length('abckjabckj')).toBe(10)
});

test('return count of string characters', () => {
    expect(string_length('abc')).toBe(3)
});

test('return count of string characters', () => {
    expect(string_length('abdeuthlskn')).toThrow(Error);
});