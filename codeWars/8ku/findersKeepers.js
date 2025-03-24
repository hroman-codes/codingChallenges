/**
 * @description Create a function that looks through an array arr and returns 
 *              the first element in it that passes a 'truth test'. 
 *              This means that given an element x, the 'truth test' 
 *              is passed if func(x) is true. If no element passes the test, 
 *              return undefined.
 * @function findElement
 * @param {Array} arr 
 * @param {Function} func
 * @returns {Number}
 */
 
// Example 

    // - findElement([1, 2, 3, 4], num => num % 2 === 0)

    //      N  Y  
    //     [1, 2, 3, 4]
    //         ^

    // - we are testing if the number is even based on the func 
    // - We would need to iterate through the list of numbers
    // - call the function and apply the num  
    // - loop through the list of numbers 
    // - stoe each number an a variable 
    // - call the function and apply the number 
    // - if true 
    //     - return the number 
    // - else 
    //     - keep looping and if no number is even return undefined
            
// Approach 

    // - this will be an iterative approach 

// Code 
function findElement(arr, func) {
    for (const num in arr) {
        let isEven = func(arr[num]);

        if (isEven) return arr[num]
    }

    return undefined
}

// Test
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))

// Complexity
⏲️ O(n) Linear 
🛰 O(1) constant time  