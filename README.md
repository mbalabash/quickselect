## Quickselect implementation on javascript.

### Finding the k-th smallest element in an unsorted list.

**See: https://en.wikipedia.org/wiki/Quickselect**

### Api

```js
/**
 * @param {Array} array - Data
 * @param {Number} k - Position of smallest element (starts from 0)
 * @param {Function} accessor - Function which return value for processing (optional)
 */
const element = quickSelect(array, k, accessor)
```

### Usage:

```js
const data = [7, 10, 4, 3, 20, 15]
const k = 2
const element = quickSelect(data, k)
console.log(element) // 7
```

or

```js
const dataWithObjects = [
  { value: 7 },
  { value: 10 },
  { value: 4 },
  { value: 3 },
  { value: 20 },
  { value: 15 },
]
const k = 2
const element = quickSelect(dataWithObjects, k, item => item.value)
console.log(element) // { value: 7 }
```

### Median by quickselect:

```js
const quickSelectMedian = array => {
  const { length } = array
  if (length % 2) {
    return quickSelect(array, length / 2)
  }
  return (
    0.5 * (quickSelect(array, length / 2 - 1) + quickSelect(array, length / 2))
  )
}
```
