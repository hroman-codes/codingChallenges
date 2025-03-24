/**
 * @tutorial https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript
 * @description In this kata you will create a function that takes in a list 
 *              and returns a list with the reverse order.
 * @function reverseList
 * @param {Array} list
 * @returns {Array}
 */

// Input 
//     >>> [1, 2, 3, 4]

//     - iterable
//     - can use .array methods
//     - has .length property 

// Process
//     - create a variable to store the new reversed array
//     - loop through the array 
//     - push the element to the beggining of the array with unshift method 
//     - return the new reversed array

// Output

//     >>> [4, 3, 2, 1]

// Code
// solution 1 
function reverseList(list) {
    let reversedArray = [];

    for(const num of list) {
        reversedArray.unshift(num)
    }

    return reversedArray
}

// solution 2
function reverseList(list) {
    return list.reverse();
}

// Test
console.log(reverseList([1, 2, 3, 4]))

// Complexity
⏲️ O(n) linear
🛰 O(n) linear 

