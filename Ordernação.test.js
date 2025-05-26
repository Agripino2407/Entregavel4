const { quicksort } = require('./Ordenação.js');

test('quicksort ordena corretamente [10, 7, 8, 9, 1, 5]', () => {
  expect(quicksort([10, 7, 8, 9, 1, 5])).toEqual([1, 5, 7, 8, 9, 10]);
});
