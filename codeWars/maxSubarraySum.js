/**
 * @description write a function called maxSubarraySum which accepts an array of 
 *              integers and a number called n. The function should calculate the
 *              maximum sum of n consecutive elements in the array. 
 * @function maxSubarraySum 
 * @param {Array} arr 
 * @param {Number} max
 * @returns {Number}
 */

// Input

    // >> ([4, 2, 1, 6, ,2], 4)

// Process 
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    // edge case if array provided is not longer than num
    if (arr.length < num) return null;
    // loop through the array up to num and add
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum
    console.log('tempSum >>', tempSum)
    // sliding window
    debugger
    for (let i = num; i < arr.length; i++) {
        debugger
        tempSum = tempSum - arr[i - num] + arr[i];
        console.log('tempSum in 2nd loop', tempSum)
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum;
}

// Output 
console.log(maxSubarraySum([1, 2, 4, 8, 1], 2))
                                        
// Complexity 