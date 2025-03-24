/**
 * @description Given a sorted array of integers, write a function called search,
 *              that accepts a value and returns the index where ther value passed
 *              to the function is located. If the valye is not found, return -1
 * @function search 
 * @param {Array} arr
 * @param {Number} num 
 * @returns {Number}
 */

// Input

// Process
function search(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    debugger
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        console.log(mid)

        debugger
        if (arr[mid] === num) {
            return mid
        } else if (arr[mid] < num) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false
}

// Output                M
console.log(search([1,2,3,4,5,6], 2))
                    // ^ ^
// Complexity
⏲️ O(log N) Binary Search