import getField from '../../src/code-basics/multi-dimensional-arrays'

test('getField', () => {
  expect(getField(1)).toEqual([ [ null, ], ])
  expect(getField(2)).toEqual([ [ null, null, ], [ null, null, ], ])
  expect(getField(3)).toEqual(
    [ [ null, null, null, ], [ null, null, null, ], [ null, null, null, ], ]
  )
})
