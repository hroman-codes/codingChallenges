/**
 * @tutorial https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript
 * @description In this Kata we are passing a number (n) into a function.
 *              Your code will determine if the number passed is even (or not).
 *              The function needs to return either a true or false. 
 *              Numbers may be positive or negative, integers or floats.
 *              Floats are considered UNeven for this kata.
 * @function testEven
 * @param {Number} n
 * @returns {Boolean}
 */

// Input

//     > 0 // true
//     > 0.5 // false
//     > -4 // true


// Process

//     - if number is % 2 with nothing left over then the number is even 
//     - otherwise the number is odd 

function testEven(n) {
    if (n % 2 === 0) {
        return true
    } else {
        return false
    }
}

// Test
console.log(testEven(2)) // 

// Complexity
⏲️ Time: O(1) Constant
🛰 Space: O(1) Constant




