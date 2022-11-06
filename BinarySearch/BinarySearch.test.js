const BinarySearch = require('./BinarySearch')

test('Binary Search: Element is present on the sorted array #1', () => {
    expect(BinarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toEqual(5)
})

test('Binary Search: Element is present on the sorted array #2', () => {
    expect(BinarySearch([12, 55, 67, 97, 345, 7777, 10100, 123123, 500000, 999999], 10100)).toEqual(6)
})

test('Binary Search: Element is NOT present on the sorted array #1', () => {
    expect(BinarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toEqual(-1)
})

test('Binary Search: Element is NOT present on the sorted array #2', () => {
    expect(BinarySearch([12, 55, 67, 97, 345, 7777, 10100, 123123, 500000, 999999], 10101)).toEqual(-1)
})

