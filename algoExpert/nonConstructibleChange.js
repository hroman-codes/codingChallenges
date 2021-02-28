/**
 * @tutorial https://www.algoexpert.io/questions/Non-Constructible%20Change
 * @function nonConstructibleChange
 * @param {Array} coins - list of coins
 * @returns {Number} - returns the minimum amount of change that you cannot create
 */

// >>> Example 

    // Input: coins = [1, 2, 4] // min change will be ?

    // Process: 
    //     possibleChange = [1, 2, 4, 3, 5, 6, 7]

    //     1 + 2 = 3
    //     1 + 4 = 5
    //     2 + 4 = 6
    //     1 + 2 + 4 = 7

    //     sort possibleChange >>> [1, 2, 3, 4, 5, 6, 7]

    // Input: coins = [1, 2, 5]

    // Process: 
    //     possibleChange = [1, 2, 5, 3, 6, 7, 8]

    //     1 + 2 = 3
    //     1 + 5 = 6
    //     2 + 5 = 7
    //     1 + 2 + 5 = 8

    //     sort >>>> possibleChange = [1, 2, 3, 5, 6, 7, 8] // we cant create 4!!

// >>> Code 

    // Create a variable called possibleChange that will hold reference to coins
    // Create the first pointer loop to start at the first index 
    // Create a second pointer loop to iterate through the rest of the collection
        // while iterating add up the first pointer with the second pointer 
        // push the result to the possibleChange array
        // repeat untill the end of the loop
    // add all the integers in the array and push the result to the possibleChange array
    // sort the possibleChange array in acending order

// function nonConstructibleChange(coins) {
//     let possibleChange = [...coins]

//     for (let i = 0; i < coins.length; i++) {
//         let currentElOutside = coins[i];
//         console.log('currentElOutside >>>', currentElOutside)

//         for (let j = i + 1; j < coins.length; j++) {
//             let currentElInsdide = coins[j];
//             console.log('currentElInsdide >>>', currentElInsdide)

//             possibleChange.push((currentElOutside + currentElInsdide))
//         }
//     }

//     let addInitialAmountOfCoinsToPossibleChange = possibleChange.push(coins.reduce((a, b) => a + b, 0))
//     console.log('addInitialAmountOfCoinsToPossibleChange >>>', addInitialAmountOfCoinsToPossibleChange)
//     console.log('possibleChange >>>', possibleChange)

//     // not sure if all the test are already sorted?
//     let sortedArray = possibleChange.sort((a,b) => a - b);
//     let lastNumber = sortedArray[sortedArray.length - 1];
//     let expectedSum = (lastNumber * (lastNumber + 1)) / 2;
//     let actualSum = 0;

//     // Show the difference
//     for (var i = 0; i < sortedArray.length; i++) {
//         actualSum += sortedArray[i];
//     }

//     console.log(expectedSum - actualSum);
//     return expectedSum - actualSum
// } 

function nonConstructibleChange(coins) {
    // sort the coins in acending order
    coins.sort((a,b) => a - b);

    // creare a space for change created 
    let currentChangeCreated = 0;

    // iterate through the coins 
    for (const coin of coins) {
        // if the current coin is greater than the changecreated plus one then return it 
        if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
        
        // otherwise add the coin to the changecreated slot  
        currentChangeCreated += coin;
    }

    return currentChangeCreated + 1;
}

// >>> Test 
nonConstructibleChange([1, 2, 5]);

// >>> Optimization
⏲️ Time Complexity O(n log(n)) <<< based on the Tim Sort algorithm in its worst case scenrio