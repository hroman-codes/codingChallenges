// [R]epeat 
/**
 * @tutorial https://www.algoexpert.io/questions/Validate%20Subsequence
 * @description Given tow non-empty arrays of integers, write a function that determines the second array is a subsequence of the first one
 * @function isValidSubsequence
 * @param {array} array - first array sequence 
 * @param {array} sequence - second array sequence 
 * @returns {boolean} - if there is a sequence 
 */

// [E]xample

// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10] // return true 

// iteration >>>>>> ❌ ✅  ❌  ❌  ✅  ✅  ❌  ✅
//                 [5, 1, 22, 25, 6, -1, 8, 10]

//                       [1, 6, -1, 10] <<< a subsequence is a set of numbers that arent necessarily adjacent in the array but that 
//                                          are in the same order as they appear in the array.  

// so how to I determain the order? 
// is it already done for me based on the data structure itself. 
// Which data structure do I use to help me?
// [] <<<< do I need a 3rd DS to keep track?
// Which Algo can I use to help? 

//     total = 4

//                             [1, 6, -1, 10] << length is 4 Sequence
//     set up the 1st pointer              ^


//                             [5, 1, 22, 25, 6, -1, 8, 10] << array 
//     loop through arr                                  ^
    
//     is first pointer === second pointer? 

//     Total ++ 

//     seq++


//     is the length of sequence === total 

//     return boolean value

// [C]ode 

    // create a counter variable 
    // set up first pointer loop on sequence array 
    // set up second pointer loop on array
    // if the pointer1 is equal to pointer2 
            // increase the counter variable 
            // break the inner loop for efficiency 
    //TODO: once we end both loops
            // is the array length of sequence equal to the counter 
            // return boolean value
            
// Solution #1 has Bugs 🦟 🦟 🦟 🦟 🦟 🦟 🦟 🦟 🦟 🦟 🦟 🦟 🦟
// function isValidSubsequence(array, sequence) {
//     let counter = 0;
//     // debugger
//     for (let i = 0; i < sequence.length; i++){
//         console.log('sequence[i]>>>', sequence[i])
//         // debugger
//         for (let j = 0; j < array.length; j++) {
//             console.log('array[j]>>>', array[j])
//             if (sequence[i] === array[j] && sequence[i + 1] != array[i]) {
//                 counter++
//                 continue
//             }
//         }
//     }

//     // debugger
//     console.log(counter);
//     if (counter === sequence.length) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }

// }

// Solution 2 works 👍
function isValidSubsequence(array, sequence) {
    let total = 0
    let sequenceArrayPointer = 0

    for (let i = 0; i < array.length; i++){
        if (sequence[sequenceArrayPointer] === array[i]) {
            total++
            sequenceArrayPointer++    
        }
    }

    if (sequence.length === total) {
        console.log(true)
    } else {
        console.log(false)
    }

}

[T]est
    isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [4, 5, 1, 22, 25, 6, -1, 8, 10]) // false
    isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 12]) // false
    isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]) // should return true
    isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1]) // true
    isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10]) // false

[O]ptimization

⏲️ Time Complexity Analysis (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer Reference 

    n(A): sequence[sequenceArrayPointer] === array[i]                    comparison
    n(B): Loops                                                          Loop 
    n(C): total                                                          pointer reference 
    n(D): sequenceArrayPointer                                           pointer reference  
     (E): IF statement                                                   Comparisons 

    List Out:                                                            N(A + B + C + D) + E 
    Group:                                                                  nK1             K2
    Drop Constants:                                                                 n
    Result:                                                              ⏲️ O(n) Linear Time Complexity


🛰 Space Complexity Analysis: Input size + Variables + Auxiliary Space 

    (A) Array                   Input                   4bytes      
    (B) sequence                Input                   4bytes
    (C) total                   variable                4bytes           🛰 O(1) Constant space complexity  
    (D) sequenceArrayPointer    variable                4bytes
    (E) isValidSubsequence      Aux                     4bytes




