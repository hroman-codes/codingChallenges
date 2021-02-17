// [R]epeat 
/**
 * @tutorial - https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
 * @description - Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
 * @function summation
 * @param {integer} num - a positive integer
 * @returns {integer} - the total sumation of from 1 to @param {integer}
 */

// [E]xample 

//     if I get the number 5 I need to sum >>>> 1 + 2 + 3 + 4 + 5 = 15 

//     so potentially I would need to run a loop starting at the number on up to N 
//     and on each iteration add ip the numbers 

// [A]pproach - This will be an iterative approach 

// [C]ode

    // create a variable Total to hold the total # 
    // loop through the Nth starting at #1 
    // on every interation append the number to the variable
    // return the total

// [T]est - summation(8) should return 36
 
// 1st solution
var summation = function (num) {
    let total = 0;

    for (let i = 1; i <= num; i++){
        total += i
        console.log('i >>>', i)
    }

    console.log(total)
    return total
}

[O]ptimization <<<<

// 2nd solution
figure out how to use REDUCE Array with the num being an Int. 

summation(5)

