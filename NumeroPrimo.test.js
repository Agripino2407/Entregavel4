const ehPrimo = require('./NumeroPrimo');

test('7 é primo', () => {
    expect(ehPrimo(7)).toBe(true);
});

test('8 não é primo', () => {
    expect(ehPrimo(8)).toBe(false);
});

test('1 não é primo', () => {
    expect(ehPrimo(1)).toBe(false);
});
