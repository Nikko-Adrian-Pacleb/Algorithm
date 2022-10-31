const algorithms = {
    InsertionSort: function(array) {
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
    },
    SelectionSort: function(array) {
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
    },
    MergeSort: function(array) {
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
        MergeSort(array, 0, array.length - 1)
        return array
    }
}

module.exports = algorithms