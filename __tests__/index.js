import forEach from 'callbag-for-each'
import fromIter from 'callbag-from-iter'
import pipe from 'callbag-pipe'

import partition from '../src'

test('works', () => {
  const actual = []

  const [even$, odd$] = pipe(
    fromIter([1, 2, 3, 4, 5, 6]),
    partition(i => i % 2 === 0),
  )

  pipe(
    even$,
    forEach(val => {
      actual.push(val)
    }),
  )

  pipe(
    odd$,
    forEach(val => {
      actual.push(val)
    }),
  )

  expect(actual).toEqual([2, 4, 6, 1, 3, 5])
})
