const MergeSort = require('./MergeSort')

test('Merge Sort: Normal Random Test #1', () => {
    expect(MergeSort([2, 8, 3, 5, 4, 9])).toEqual([2, 3, 4, 5, 8, 9])
})

test('Merge Sort: Check should not be equal', () => {
    expect(MergeSort([2, 8, 3, 5, 4, 9])).not.toEqual([2, 8, 3, 5, 4, 9])
})

test('Merge Sort: Inverse to Sort', () => {
    expect(MergeSort([9 ,8 ,7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Merge Sort: Already Sorted', () => {
    expect(MergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Merge Sort: Normal Random Test #2', () => {
    expect(MergeSort([ 52345, 2345, 134, 15, -1324, 412 ])).toEqual([ -1324, 15, 134, 412, 2345, 52345 ])
})