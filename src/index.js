import filter from 'callbag-filter'

const negate = fn => arg => !fn(arg)

export default function partition(predicate) {
  return source => [
    filter(predicate)(source),
    filter(negate(predicate))(source),
  ]
}
