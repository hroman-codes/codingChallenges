/**
 * @tutorial https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
 * @function countPositivesSumNegatives
 * @param {Array} input - a list of postive and negative integers
 */

// Input 

//     >>> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
//                                     ^

//             - positive #s 
//             - negative #s
          
// Process

//     - if the array is empty return an empty array 

//     - create a finalResult = []
//     - for the positive #s create a variable called tally for postive # 
//     - create a container for the sum of negative #s

//     - loop through the array
//         - if the currentNum is a postive #
//             - increment the tally 
//         - else 
//             - sum up negative numbers
          
//     - push tally 
//     - push sumOfNegative
//     - Return finalResult 

// Edge Case

//     >>> [1, 2, 3, -4, 5, -6]
//     >>> empty array return empty array

// Output

//     - return an array 
//     - where the first element is the count of positives numbers
//     - and the second element is sum of negative numbers.

// solution #1 
// function countPositivesSumNegatives(input) {
//     if (input === null || input.length === 0) return []

//     let positiveTally = 0;
//     let sumOfNegativeNumbers = 0;

//     for (let i = 0; i < input.length; i++) {
//         let currentNum = input[i];

//         if (currentNum > 0) {
//             positiveTally++
//         } else {
//             sumOfNegativeNumbers += currentNum
//         }
//     }
   
//     return [positiveTally, sumOfNegativeNumbers]
// }

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return []

    let finalResult = [0, 0];

    for (let i = 0; i < input.length; i++) {
        let currentNum = input[i];

        if (currentNum > 0) {
            finalResult[0]++
        } else {
            finalResult[1] += currentNum
        } 
    }
    
    return finalResult
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]

// Optimization
FOCLP = Function call to outside + Operations + Comparisons + Loops + Pointer References 

finalResult[1] += currentNum    >>  Operations  >>  
for loop                        >>  Loop        >>    n(a) + n(b) >> n + n >> n >> O(n) Linear ⏲️ complexity


