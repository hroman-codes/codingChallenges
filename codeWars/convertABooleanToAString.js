/**
 * @tutorial https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
 * @description - implement a function which convert the given boolean value into its string representation
 * @function booleanToString
 * @param {Boolean} b - true or false primitve value
 * @returns {String} - string representation of the boolean value
 */

//  >>> Example 
    // Input: true

    // Process: convert true to 'true'

    // Output: 'True'

// >>> Code 
function booleanToString(b) {
    console.log(b.toString());
}

// >>> Test 
booleanToString(true)

// >>> Optimization 
⏲️ linear time complexity O(n)