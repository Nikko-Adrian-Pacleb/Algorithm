const algorithms = require('./algorithms')

test('Insertion Sort: Normal Random Test #1', () => {
    expect(algorithms.InsertionSort([2, 8, 3, 5, 4, 9])).toEqual([2, 3, 4, 5, 8, 9])
})

test('Insertion Sort: Check should not be equal', () => {
    expect(algorithms.InsertionSort([2, 8, 3, 5, 4, 9])).not.toEqual([2, 8, 3, 5, 4, 9])
})

test('Insertion Sort: Inverse to Sort', () => {
    expect(algorithms.InsertionSort([9 ,8 ,7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Insertion Sort: Already Sorted', () => {
    expect(algorithms.InsertionSort([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Insertion Sort: Normal Random Test #2', () => {
    expect(algorithms.InsertionSort([ 52345, 2345, 134, 15, -1324, 412 ])).toEqual([ -1324, 15, 134, 412, 2345, 52345 ])
})

test('Selection Sort: Normal Random Test #1', () => {
    expect(algorithms.SelectionSort([2, 8, 3, 5, 4, 9])).toEqual([2, 3, 4, 5, 8, 9])
})

test('Selection Sort: Check should not be equal', () => {
    expect(algorithms.SelectionSort([2, 8, 3, 5, 4, 9])).not.toEqual([2, 8, 3, 5, 4, 9])
})

test('Selection Sort: Inverse to Sort', () => {
    expect(algorithms.SelectionSort([9 ,8 ,7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Selection Sort: Already Sorted', () => {
    expect(algorithms.SelectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Selection Sort: Normal Random Test #2', () => {
    expect(algorithms.SelectionSort([ 52345, 2345, 134, 15, -1324, 412 ])).toEqual([ -1324, 15, 134, 412, 2345, 52345 ])
})

test('Merge Sort: Normal Random Test #1', () => {
    expect(algorithms.MergeSort([2, 8, 3, 5, 4, 9])).toEqual([2, 3, 4, 5, 8, 9])
})

test('Merge Sort: Check should not be equal', () => {
    expect(algorithms.MergeSort([2, 8, 3, 5, 4, 9])).not.toEqual([2, 8, 3, 5, 4, 9])
})

test('Merge Sort: Inverse to Sort', () => {
    expect(algorithms.MergeSort([9 ,8 ,7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Merge Sort: Already Sorted', () => {
    expect(algorithms.MergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Merge Sort: Normal Random Test #2', () => {
    expect(algorithms.MergeSort([ 52345, 2345, 134, 15, -1324, 412 ])).toEqual([ -1324, 15, 134, 412, 2345, 52345 ])
})