/*
Summary on what I understand, Go from A[0:N]
While A[i+1] > from A[i]
Swap until the original A[i+1] is on the right order
*/
//const arr = [2, 8, 3, 5, 4, 9]
//const arr = [1, 2, 3, 4, 5, 6]
//const arr = [9, 8, 7, 6, 5, 4]
const arr = [52345, 2345, 134, 15, -1324, 412]

console.log(arr)
for(let i = 1; i < arr.length; ++i) {
    //Var to keep arr[i] on memory
    const key = arr[i]
    //Index J for the next loop
    var j = i - 1

    while(j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]
        --j;
        arr[j + 1] = key //Because of j-- on the while loop, we need to index at j + 1
        console.log(arr)
    }
}
console.log("-")
for(let i = 0 ; i < arr.length; ++i) {
    console.log(arr[i])
}

