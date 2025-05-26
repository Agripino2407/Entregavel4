const { somatorio } = require('./Somatorio.js');

test('somatorio de [1, 2, 3, 4, 5] é 15', () => {
  expect(somatorio([1, 2, 3, 4, 5])).toBe(15);
});
