// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
 * @function getAverage
 * @param {Array} marks - an array of integers
 * @returns {Integer} - the average of the given array rounded down to it's nearest integer.
 */

// [E]xample 

//     Input >>> [1,2,3,4,5,]  Output >>> 3

//     add up all the nuqmbers
//     1 + 2 + 3 + 4 + 5 = 15

//     divide the total with the amount of #'s in the set
//     15 % 5 = 3

// [C]ode 

    // create a variable to store the final avearage
    // create a variable to keep track of all the numbers being added up
    // loop through the numbers and add them into the variable
    // then take the total and divide them by the array.length
    // return the final average

function getAverage(marks) {
    let reducer = (accumulator, currentValue) => accumulator + currentValue
    let addNums = marks.reduce(reducer);

    return Math.floor(addNums / marks.length)
}

// [T]est 
getAverage([1,2,3,4,5,])  // Output >>> 3

// [O]ptimization
⏲️ O(n) linear time complexity  