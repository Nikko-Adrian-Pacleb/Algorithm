//Assume the array is sorted
//Can only return ONE index of the value
function LinearSearch(array, value) {
    let index = -1 //Will return -1 if the value doesnt exist inside the array
    for(let i = 0; i < array.length; ++i) {
        if(array[i] === value) {
            index = i
            break; //Stop searching since the value to find is already found
        }
    }
    
    return index
}

module.exports = LinearSearch