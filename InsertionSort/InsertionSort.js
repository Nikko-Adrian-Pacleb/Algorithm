/*
Summary on what I understand, Go from A[0:N]
While A[i+1] > from A[i]
Swap until the original A[i+1] is on the right order
*/
function InsertionSort(array) {
    for(let i = 1; i < array.length; ++i) {
        //Var to keep arr[i] on memory
        const key = array[i]
        //Index J for the next loop
        var j = i - 1
        while(j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            --j;
            array[j + 1] = key //Because of j-- on the while loop, we need to index at j + 1
        }
    }
    return array
}

module.exports = InsertionSort