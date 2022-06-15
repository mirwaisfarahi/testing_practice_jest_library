const capitalizeString = require('./capitalizeString.js');

test('Capitalize First Character', () => expect(capitalizeString('abc')).toMatch(/Abc/))

test('Capitalize First Character', () => expect(capitalizeString(123)).toMatch(/Invalid!/))