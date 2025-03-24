// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
 * @function sum
 * @param {Array} numbers - an array with a set up numbers
 * @returns {Number} - returns the sum of the numbers
 */

// [E]xample

    // Input >>> [1, 5.2, 4, 0, -1]
    // Process >>> 1 + 5.2 + 4 + 0 + -1
    // Output >>> 9.2

    // Input >>> []
    // Output >>> 0

    // Input >>> [-2.398]
    // Output >>> -2.398

// [C]ode 

// solution #1
// function sum(numbers) {
//     console.log(numbers.reduce((sum, x) => sum + x))
//     return numbers.reduce((add, x) => add + x, 0)
// }

// solution #2 without reduce 
function sum(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    console.log(total)
    return total
}

// [T]est 
// sum([1, 5.2, 4, 0, -1]) // 9.2
// sum([0]);
// sum([-2.398]);

// [O]ptimization
// ⏲️ O(n) linear Time complexity 🤔