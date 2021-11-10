/**
 * @description implement a function called countUniqueValues, 
 *              which accepts a sorted aray, and counts the unique values in the array. 
 *              There can be negaitve numbers in the array, but will always be sorted.
 * @function countUniqueValues
 * @param {Array} arr
 * @returns {Number}
 */

// Input 

    // >> [1, 1, 1, 1, 1, 2] // 2

// Process
function countUniqueValues(arr) {
 
    // - create a loop
    // - set our pointers 
    // - write out logic 
    // - return the count where i is + 1 

    let start = 0;
    let trailBlazer = 1;

    while(trailBlazer < arr.length) {
        console.log('start', start);
        console.log('trailBlazer', trailBlazer);        

        if (arr[start] != arr[trailBlazer]) {
            start++
            trailBlazer++
        }

        if (arr[start] === arr[trailBlazer]) {
            trailBlazer++
            if (arr[start] != arr[trailBlazer]) {
                start++ 
                arr[start] = arr[trailBlazer]
            }
        }
    }

    console.log('start >>', start);
    console.log('arr >>', arr)

    return start
}

// Output 
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 1, 1, 3, 4, 4])) // 3

// Complexity
⏲️ Time O(n) linear 
🛰 Space O(1) constant space 
