// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
 * @description - In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
 * @function makeNegative
 * @param {integer} num - a number that could be either negative or postive 
 * @returns {integer} - a negative number 
 */

// [E]xample 
 
//     makeNegative(1); // return -1
//     makeNegative(-5); // return -5
//     makeNegative(0); // return 0

// [A]pproach - A non iterative approach 

// [C]ode 

    // if the number is postive 
    // turn the number into a negative representation of that same number
    // if the number is 0 then return 0
    // other wise if the number is negative just return the negative number 

// [T]est 

//     makeNegative(1); // return -1
//     makeNegative(-5); // return -5
//     makeNegative(0); // return 0

// [O]ptimization

// ⏲️ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer reference 


//     (A) Math.sign(num) === 1        Comparison
//     (B) Math.sign(num) === 0        Comparison

//     List out variables              A + B
//     Group them                     K1 + K2
//     Drop constant                     1
//     Result                         ⏲️ O(1) constant time complexity 

// 🛰 Space Complexity: Input size + Auxiliary Space + variables

//     (A) num                 Input Size                  4bytes
//     (B) makeNegative        Auxiliary Space             4bytes
//                                                 Total:  8 Bytes 

//     List out variables                  A + B
//     Group them                         K1 + K2
//     Drop constant                         1
//     Result                             🛰 O(1) constant space complexity 

// Solution 1
function makeNegative(num) {

    if (Math.sign(num) === 1) {
        console.log(- Math.abs(num));
    } else if (Math.sign(num) === 0) {
        console.log(num)
    } else {
        console.log(num)
    }
}

// Solution 2
// function makeNegative(num){
//     console.log((Math.sign(num) === 1) ? - Math.abs(num) : num)
// }

makeNegative(1)   // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
