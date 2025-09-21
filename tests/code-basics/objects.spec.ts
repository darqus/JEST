import isComplete from '../../src/code-basics/objects'

test('function', () => {
  const course1 = {
    name: 'Java',
    lessons: [ 'variables', 'functions', 'conditions' ],
  }

  expect(isComplete(course1)).toBe(false)

  const course2 = {
    name: 'Java',
    lessons: [ 'variables', 'functions', 'conditions', 'loops' ],
  }

  expect(isComplete(course2)).toBe(true)
})
