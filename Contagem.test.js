const { countInRange } = require('./Contagem');

test('teste simples para countInRange', () => {
  expect(countInRange([1, 2, 3, 4, 5], 4)).toBe(4);
});
