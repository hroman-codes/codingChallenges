/**
 * @tutorial https://www.algoexpert.io/questions/Sorted%20Squared%20Array
 * @function sortedSquaredArray
 * @param {Array} array
 * @returns {Array} - returns a new array of the same length with the squares of the original integers sorted in ascending order
 */

// >>> Example 

    // Input: 

    //     [1, 2, 3, 4, 5, 6, 8, 9]

    // Process: 

    //     take each el and multiple it by it self 
    //     1 * 1 = 1
    //     2 * 2 = 2
    //     3 * 3 = 3
    //     5 * 5 = 25

        // create a variable that stores an empty array
        // loop through the array 
        // store the current element in a variable
        // do some math currentElement * currentElement
        // take the result and push it to the empty array
        // return the array

// >>> Code 
function sortedSquaredArray(array) {
    let squaredArray = []

    for (const el of array) squaredArray.push(el * el)

    return squaredArray.sort((a, b) => a - b);
}

// sortedSquaredArray([1, 2, 3, 4, 5, 6, 8, 9]) // [1, 4, 9, 25, 36, 64, 81]
sortedSquaredArray([1, 4, 9, 16, 25]); // [1, 4, 9, 16, 25]

>>> Optimization
⏲️ Linear Time Complexity O(n) because of the Sort() method 