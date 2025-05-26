const { mdc } = require('./MDC.js');

test('mdc de 48 e 18 é 6', () => {
  expect(mdc(48, 18)).toBe(6);
});
