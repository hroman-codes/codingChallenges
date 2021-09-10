/**
 * @tutorial https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/javascript
 * @function checkForFactor
 * @param {Number} base
 * @param {Number} factor
 * @returns {Boolean}
 */

// Input:
    >>> base 10 
    >>> factor 2 

    2 % 10 = 5 with nothing left over >>> true 
    
    >>> base 9 
    >>> factor 2 

    9 % 2 = 1 left over >>> false

Process:
function checkForFactor(base, factor) {
    if (base % factor === 0) {
        return true
    } else {
        return false
    }
}

function checkForFactor(base, factor) {
   return (base % factor === 0) ? true : false
}

// Test 
// console.log(checkForFactor(10, 2)) // true
console.log(checkForFactor(653, 7)) // false
// console.log(checkForFactor(2453, 5)) // false

// Complexity
⏲️ O(1) Constant 
🛰 O(1) Constant