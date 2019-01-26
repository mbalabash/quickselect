const randIntBetween = (min, max) => Math.floor(Math.random() * max) + min

const defaultAccessor = element => element

const checkArguments = (array, k, accessor) => {
  if (!Array.isArray(array)) throw new Error('The first argument should be a javascript array!')
  if (typeof k !== 'number') throw new Error('The second argument should be a javascript number!')
  if (typeof accessor !== 'function') throw new Error('The third argument should be a javascript function!')
  if (array.length < k) {
    throw new Error('K should not be greater than array length!')
  }
}

/**
 * Quickselect
 * https://en.wikipedia.org/wiki/Quickselect
 * @param {Array} array - Data
 * @param {Number} k - Position of smallest element (starts from 0)
 * @param {Function} accessor - Function which return value for processing (optional)
 */
const quickSelect = (array, k, accessor = defaultAccessor) => {
  checkArguments(array, k, accessor)
  if (array.length === 1 && k === 0) return array[0]

  while (true) {
    const pivot = accessor(array[randIntBetween(0, array.length - 1)])
    const lows = []
    const highs = []
    const pivots = []
    for (let i = 0; i < array.length; i += 1) {
      if (accessor(array[i]) < pivot) lows.push(array[i])
      if (accessor(array[i]) > pivot) highs.push(array[i])
      if (accessor(array[i]) === pivot) pivots.push(array[i])
    }

    /* eslint-disable no-param-reassign */
    if (k < lows.length) {
      array = lows
    } else if (k < lows.length + pivots.length) {
      return pivots[0]
    } else {
      array = highs
      k = k - lows.length - pivots.length
    }
    /* eslint-enable no-param-reassign */
  }
}

module.exports = quickSelect
