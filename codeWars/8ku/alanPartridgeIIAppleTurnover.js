/**
 * @tutorial codewars.com/kata/580a094553bd9ec5d800007d/train/javascript
 * @function apple 
 * @param {Number or String} x 
 * @returns {String}
 */

// Input 
//     >>> 10 
//     >>> '10'

//     - I can use any .Math method for the integer    
//     - I can apply array like methods to the string 
//     - I can coerce the string to a number

// Process 
    // - find the squared of x
    // - if x is greater than 1000 return 'It's hotter than the sun!!',
    // - if x is lesss than 1000 return 'Help yourself to a honeycomb Yorkie for the glovebox.'

function apple(x) {

    let squaredNum = Math.pow(x, 2);

    if (squaredNum > 1000) return "It's hotter than the sun!!"
    if (squaredNum < 1000) return 'Help yourself to a honeycomb Yorkie for the glovebox.'

}


// Test 
// console.log(apple(50)) // "It's hotter than the sun!!"
// console.log(apple('50')) // "It's hotter than the sun!!"
console.log(apple('3')) // 'Help yourself to a honeycomb Yorkie for the glovebox.'


// Complexity
⏲ Time O(1) constant
🛰 Space O(1) constant