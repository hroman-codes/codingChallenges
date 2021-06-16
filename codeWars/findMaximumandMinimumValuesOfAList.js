/**
 * @tutorial https://www.codewars.com/kata/577a98a6ae28071780000989
 */

// Input 

//     >>> max [4,6,2,1,9,63,-134,566]
//                                 ^ 
//     >>> max [5]                      
//              ^   
//     >>> min [5]
//              ^

// Process

//     methods to consider:

//         - Array.max()
//         - Array.min()
//     ==================================
//     - if the length of the array 1 return the number 

//     - create a variable for max#
//     - create a variable numberTocompare = array[0] // 5
//     - create a loop that starts at the second index
//         - create a variable called currentNum
//         - if (currentNum > numberTocompare)
//             - assign max# = currentNum
//             - numberTocompare = currentNum
//     - return max#


// Edge Case 

//     // - if we get an empty array?

// Output

//     - for max output the max #
//     - for min output the min #

// Optimizations


// var max = function(list) {

//     if (list.length === 1) return list[0]

//     let maxNum = list[0]

//     for (let i = 0; i < list.length; i++) {
//         let currentNum = list[i];

//         if (currentNum > maxNum) {
//             maxNum = currentNum;
//         }
//     }

//     return maxNum
// }

// console.log(max([4,6,2,1,9,63,-134,566])); // 566
// console.log(max([5])) // 5

var min = function(list) {

    if (list.length === 1) return list[0]

    let minNum = list[0]

    for (let i = 0; i < list.length; i++) {
        let currentNum = list[i];

        if (currentNum < minNum) {
            minNum = currentNum;
        }
    }

    return minNum
}

// Optimizations

FOCL = function call to outside + Operations + Comparison + Loops

n loops ⏲️ O(n) linear

O(1) constant 

// console.log(min([42, 54, 65, 87, 0])) // 0
// console.log(min([4,6,2,1,9,63,-134,566])); // -134
// console.log(min([10, 5, 1])); // -134


// Test Results:
// Fixed Min
// expected 0 to equal 1

// expected undefined to equal 1


// Optimizations
// Math.max([2, 3])
// // max
// Array.sort().pop()

var max = function(list) {
    return Math.max(...list)
}

console.log(max([4,6,2,1,9,63,-134,566])); // 566