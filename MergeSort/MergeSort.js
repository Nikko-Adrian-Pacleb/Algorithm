//Pseudo code on pg 36 of Book:Introduction to Algorithm 4th ed. MIT
// const arr = [2, 4, 6, 7, 1, 2, 3, 5]
const arr = [12, 3, 7, 9, 14, 6, 11, 2]

function Merge(array, p, q, r) {
    const leftArray = array.slice(p, q + 1)
    const rightArray = array.slice(q + 1, r + 1)
    let i = 0; //i indexes the smallest remaining element in L[]
    let j = 0; //j indexes the smallest remaining element in R[]
    let k = p; //k indexes the location in A[]
    // console.log(k)
    //While for comparing
    while(i < leftArray.length && j < rightArray.length){
        if(leftArray[i] < rightArray[j]){
            array[k] = leftArray[i]
            ++i
        }
        else {
            array[k] = rightArray[j]
            ++j
        }
        ++k
    }

    //While for remainders
    while(i < leftArray.length){
        array[k] = leftArray[i]
        ++i
        ++k
    }
    while(j < rightArray.length){
        array[k] = rightArray[j]
        ++j
        ++k
    }
}

function MergeSort(array, p, r) {
    if(p >= r) {
        return
    }
    const q = Math.floor((p + r) / 2)
    MergeSort(array, p, q)
    MergeSort(array, q + 1, r)

    Merge(array, p, q, r)
}
console.log(arr)
MergeSort(arr, 0, arr.length - 1)
console.log(arr)