/*
From A[i:N] find the smallest A[j] then swap to A[i] where i -> N
*/
function SelectionSort(array) {
    for(let i = 0; i < array.length; ++i){
        let smallestIndex = i
        let smallest = array[i]
        for(let j = i + 1; j < array.length; ++j){
            if(array[j] < smallest) {
                smallestIndex = j
                smallest = array[j]
            }
        }
        //Swap
        array[smallestIndex] = array[i]
        array[i] = smallest
    }
    return array
}

module.exports = SelectionSort