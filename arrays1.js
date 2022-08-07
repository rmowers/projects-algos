// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. 

function pushFront(arr, val) {
    for(i = arr.length; i >= 0; i--) {
        arr[i] = arr[i-1]
    }
    arr[0] = val
    return arr
}

console.log(pushFront([7,8,4,2], 9))


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. 

function popFront(arr) {
    x = arr[0]
    for (i = 0; i < arr.length; i++ ) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length-1
    console.log(arr)
    return x
}

console.log(popFront([9,8,3,5,2]))


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). 

function insertAt(arr, index, val){
    for (i = arr.length; i >= index; i --) {
        arr[i] = arr[i-1]
    }
    arr[index] = val
    return arr
}

console.log(insertAt([5,7,3,8,9], 2, 0))

