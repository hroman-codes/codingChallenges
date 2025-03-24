/**
 * @tutorial https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
 * @description - Given a non-empty array of integers, return the result of multiplying the values together in order.
 * @function grow 
 * @param {Array} x - an array of integers
 * @returns {Number} - result of multiplying the values in order
 */

// >>> Example 

    // Input: 
    // [1, 2, 3, 4]

    // Process:
    // 1 * 2 * 3 * 4

    // Output:
    // 24

// >>> Approach - iterative using the reduce function 

// >>> Code 
function grow(x) {
    console.log(x.reduce((a,b) => a * b));
}

// >>> Test 
grow([1, 2, 3, 4]) // 24

// >>> Optimization 
⏲️ Time Complexity is O(n) linear 