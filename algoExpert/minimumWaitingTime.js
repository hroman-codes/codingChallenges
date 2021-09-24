/** 
 * @description https://www.algoexpert.io/questions/Minimum%20Waiting%20Time
 * @function minimumWaitingTime
 * @param {Array} queries
 * @returns {Number} - the total query time 
 */

// Input
    // >>> [5, 1, 4]        3 - 1 = 2
    //      ^
    //      0  1  2
// Process 
 function minimumWaitingTime(queries) {
    // sort the queries
    let sortedQueries = queries.sort((a, b) => a - b)
    // set up a counter variable
    let counter = 0;
    // iterate through the queries
    for (let i = 0; i < queries.length; i++) {
        // grab the value 
        let currentQuery = queries[i]
        // store how many queries are left in the array
        let remainingQueries = queries.length - (i + 1);
        // multiple the curent querie with how many queries are left 
        // append that to the counter variable 
        counter += currentQuery * remainingQueries
    }
    return counter 
  }

// Test 
console.log(minimumWaitingTime([5,1,4]))

// complexity (FOCLP)