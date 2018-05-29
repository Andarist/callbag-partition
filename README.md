# callbag-partition

Callbag operator that splits the source into two, one with values that satisfy a predicate, and another with values that don't satisfy the predicate.

## Example

```js
import forEach from 'callbag-for-each'
import fromIter from 'callbag-from-iter'
import partition from 'callbag-partition'
import pipe from 'callbag-pipe'

const [even$, odd$] = pipe(
  fromIter([1, 2, 3, 4, 5, 6]),
  partition(i => i % 2 === 0),
)

pipe(
  even$,
  forEach(val => {
    // will log 2, 4, 6
    console.log(val)
  }),
)

pipe(
  odd$,
  forEach(val => {
    // will log 1, 3, 5
    console.log(val)
  }),
)
```
