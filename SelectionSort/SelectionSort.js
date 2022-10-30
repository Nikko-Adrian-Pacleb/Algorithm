// const arr = [2, 8, 5, 4, 3, 9]
// const arr = [1, 2, 3, 4, 5]
const arr = [9, 8, 7, 6, 5]

/*
From A[i:N] find the smallest A[j] then swap to A[i] where i -> N
*/
for(let i = 0; i < arr.length; ++i){
    let smallestIndex = i
    let smallest = arr[i]
    for(let j = i + 1; j < arr.length; ++j){
        if(arr[j] < smallest) {
            smallestIndex = j
            smallest = arr[j]
        }
    }
    //Swap
    arr[smallestIndex] = arr[i]
    arr[i] = smallest
}

console.log(arr)