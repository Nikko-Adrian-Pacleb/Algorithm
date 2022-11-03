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

function MergeSortRecursion(array, p, r) {
    if(p >= r) {
        return
    }
    const q = Math.floor((p + r) / 2)
    MergeSortRecursion(array, p, q)
    MergeSortRecursion(array, q + 1, r)

    Merge(array, p, q, r)
}

function MergeSort(array) {
    MergeSortRecursion(array, 0, array.length - 1)
    return array
}

module.exports = MergeSort