const test = require('ava')
const quickSelect = require('../src/quickSelect')

const data = [7, 10, 4, 3, 20, 15]
const dataWithObjects = [
  { value: 7, message: 'm1' },
  { value: 10, message: 'm2' },
  { value: 4, message: 'm3' },
  { value: 3, message: 'm4' },
  { value: 20, message: 'm5' },
  { value: 15, message: 'm6' },
]

test('should work correctly with array of numbers', (t) => {
  t.is(quickSelect(data, 2), 7)
  t.is(quickSelect(data, 3), 10)
  t.is(quickSelect(data, 5), 20)
})

test('should work correctly with array of objects', async (t) => {
  const accessor = elem => elem.value
  t.is(quickSelect(dataWithObjects, 2, accessor).value, 7)
  t.is(quickSelect(dataWithObjects, 3, accessor).value, 10)
  t.is(quickSelect(dataWithObjects, 5, accessor).value, 20)
})

test('should throw errors', async (t) => {
  t.throws(() => quickSelect(null))
  t.throws(() => quickSelect([], 123))
  t.throws(() => quickSelect([1], 'zxc'))
  t.throws(() => quickSelect([1], 0, 'qwe'))
})
