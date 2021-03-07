/**
 * @tutorial https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
 * @summary - Create a function with two arguments that will return an array of the first (n) multiples of (x).
 * @function countBy
 * @param {Number} x 
 * @param {Number} n 
 * @returns {String}
 */

// >>> Examples 

    // Input: 

    //     (1, 10)

    // Process: 

    //     1 is the incrementation part 
    //     10 is the length of how long we should count up to


    // Output:

    //     [1,2,3,4,5,6,7,8,9,10]

    // create a variable to store the new list of numbers
    // set up a loop 
        // start the loop at 0
        // go up to n 
        // increment by x
        // push el to list
    // return the new list of numbers 


    // use the loop as an iterator 
    // and do some math outside the loop to do the math
    // track it and then return it

// >>> Code
function countBy(x, n) {
    var z = [] 

    debugger
    for (let i = 1; i <= n; i++) {
        let currentEl = i

        let someMath = x * currentEl;
        let currentIterator = someMath;

        z.push(currentIterator);
    }

    console.log(z)
    return z
}
  
countBy(1, 10);
countBy(2, 5);

>>> ⏲️ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer Reference 

n(A) Operations >>> let someMath = x * currentEl
n(B) Loops 
n(C) Pointer Reference >>> let currentIterator = someMath;

n(A + B + C)
    n(k1)
     n
Linear ⏲️ Time Complexity O(n)