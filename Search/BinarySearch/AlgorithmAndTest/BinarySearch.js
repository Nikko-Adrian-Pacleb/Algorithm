function BinarySearch(array, value) {
    function bsearch(arr, toFind, low, high) {
        if(low > high) {
            return -1
        }
        else {
            const mid = Math.floor((low + high) / 2)
            if(arr[mid] == toFind) {
                return mid
            }
            else {
                if(toFind > arr[mid]){
                    return bsearch(arr, toFind, mid + 1, high)
                }
                else {
                    return bsearch(arr, toFind, low, mid - 1)
                }
            }
        }
    }
    return bsearch(array, value, 0, array.length)
}

module.exports = BinarySearch