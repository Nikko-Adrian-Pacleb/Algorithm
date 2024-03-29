function BubbleSort(array) {
    const n = array.length
    for(let i = 0; i < n - 1; ++i) {
        for(let j = n - 1; j > i; --j) {
            if(array[j] < array[j - 1]) {
                const index = array[j]
                array[j] = array[j - 1]
                array[j - 1] = index
            }
        }
    }
    return array
}

module.exports = BubbleSort