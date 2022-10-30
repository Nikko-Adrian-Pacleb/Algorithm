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
    }
}

module.exports = algorithms