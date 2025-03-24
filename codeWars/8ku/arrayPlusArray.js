// [R]epeat: 
/**
 * @tutorial https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
 * @description - get the sum of the two arrays
 * @function arrayPlusArray
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {number} - total sum of both arrays 
 */

// [E]xample: 

//     Input: 

//         [1, 2, 3], [4, 5, 6]  <<< sum all of it up 

//     Process: 

//         1 + 2 + 3 + 4 + 5 + 6

//     Output:

//         21

// [A]pproach - an iterative one

// [C]ode: 

    // create two reduce functions one for each array
    // sum up both totals 
    // return the total

function arrayPlusArray(arr1, arr2) {
    let total = 0;
    total += arr1.reduce((a,b) => a + b, 0);
    total += arr2.reduce((a,b) => a + b, 0);
    
    console.log(total)
}

// [T]est
arrayPlusArray([1, 2, 3], [4, 5, 6]);

// [O]ptimization
⏲️ Time complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer Reference

(A) reduce 1    function call 
(B) reduce 2    function call 
n(C) reduce 1   operation a + b
n(D) reduce 2   operation a + B
n(E) reduce 1   loop 
n(F) reduce 2   loop 

List Out >>> A + B + n(C + E) + n(D + F)
Group           K1    n*K2        n*K3
Drop Const       n + n
Drop Const         n
Result          ⏲️ O(n) linear time complexity 



