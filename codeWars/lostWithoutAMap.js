// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
 * @description - Given an array of integers return a new array with each value doubled
 * @function maps 
 * @param {Array} x - an array of integers
 * @returns {Array} - a new array with each value doubled
 */

// [E]xample

//     Input: 
    
//         [1, 2, 3] 
 
//     Process:

//            [1, 2, 3] 
//     Double  ^  ^  ^\

//     Outout: 

//            [2, 4, 6]

// [C]ode 

    //iterate through the array 
    //for every element double 
    //return the resulting array

function maps(x) {
    let mapArr = x.map(x => x * 2);

    console.log('mapArr', mapArr);
    return mapArr
}

// [T]est 
maps([1, 2, 3])

[O]ptimization 
// ⏲️ O(n) linear time complexity
// 🛰 O(n) linear space complexity ?
