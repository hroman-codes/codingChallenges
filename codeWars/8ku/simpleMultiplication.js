/**
 * @tutorial https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
 * @description This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 * @function simpleMultiplication
 * @param {Number} number 
 * @returns {String}
 */

// Input 

    // >> 2 
    //     - is 2 an even number? 
    //         Yes: 2 * 8 = 16 

    // >> 5 
    //     - is 5 an even number? 
    //         No: 5 * 9 = 45


// Process 

    // If the number is divisibale by 2 with no remainder then the number is even 
    //     - divde N by 8 
    // Otherwise 
    //     - divide N by 9

function simpleMultiplication(number) {

    if (number % 2 === 0) {
        return number * 8;
    } else {
        return number * 9
    }
}

// Output 
console.log(simpleMultiplication(2)) // 16
// simpleMultiplication(5) // 45


// Complexity FOCLP
⏲ O(1) Constant time complexity
🛰 O(1) Constant time complextiy  