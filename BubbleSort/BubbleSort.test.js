const BubbleSort = require('./BubbleSort')

test('Bubble Sort: Normal Random Test #1', () => {
    expect(BubbleSort([2, 8, 3, 5, 4, 9])).toEqual([2, 3, 4, 5, 8, 9])
})

test('Bubble Sort: Check should not be equal', () => {
    expect(BubbleSort([2, 8, 3, 5, 4, 9])).not.toEqual([2, 8, 3, 5, 4, 9])
})

test('Bubble Sort: Inverse to Sort', () => {
    expect(BubbleSort([9 ,8 ,7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Bubble Sort: Already Sorted', () => {
    expect(BubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Bubble Sort: Normal Random Test #2', () => {
    expect(BubbleSort([ 52345, 2345, 134, 15, -1324, 412 ])).toEqual([ -1324, 15, 134, 412, 2345, 52345 ])
})