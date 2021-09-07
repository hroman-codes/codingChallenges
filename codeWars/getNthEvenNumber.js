/**
 * @tutorial https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
 * @description Return the Nth Even Number
 *              1 --> 0 (the first even number is 0)
 *              3 --> 4 (the 3rd even number is 4 (0, 2, 4))
 *              100 --> 198
 *              1298734 --> 2597466
 *              the input will not be 0.
 * @function nthEven
 * @param {Number} n
 * @returns {String} "Wrong Value!"
 */

// Input 

//     >>> 3
//     >>> 0, 2, 4
//               ^
     
//     start from 0 and count up 3 even numbers? 

//     >>> 6
//     >>> 0, 2, 4, 6, 8, 10
//                         ^


// Process

    // - iterate through n times 
    // - on each iteration x2 
    // - return final result 

function nthEven(n) {
    let nthEvenNumber = 0

    for (let currentNum = 0; currentNum < n; currentNum++) {
        console.log(currentNum)
         nthEvenNumber *2
    }

    console.log(nthEvenNumber)
}

console.log(nthEven(3)) // 4