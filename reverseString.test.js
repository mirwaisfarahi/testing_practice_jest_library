const reverseString = require('./reverseString.js');

test('reverse the string', () => {
    expect(reverseString('abc')).toMatch(/cba/);
})