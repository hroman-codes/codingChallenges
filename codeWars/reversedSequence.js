/**
 * @tutorial https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
 * @description Build a function that returns an array of integers from n to 1 where n > 0
 * @function reverseSeq
 * @param {Integer} n
 * @returns {Array} - an array of integers
 */

//  >>> Example 
    // Input: 5

    // Process: 
    //     Iterate --
    //     5 👇
    //     4 👇
    //     3 👇
    //     2 👇
    //     1 🛑

    // Output:
    //     [5,4,3,2,1]

// >>> Code
function reverse(n) {
    let numBox = []

    for (let i = n; i > 0; i-- ) {
        console.log(i)
        numBox.push(i)
    }

    console.log(numBox)
}

// >>> Test
reverse(5);

// >>> Optimization
⏲️ Time Complexity: O(n) linear