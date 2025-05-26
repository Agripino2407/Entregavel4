const { fibonacci } = require('./Fibonnaci');

test('fibonacci gera sequência correta para n=7', () => {
  expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});