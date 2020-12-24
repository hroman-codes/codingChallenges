// [R]epeat
/**
 * @description kata: https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript
 * @param {coefficient} - num1 is a coefficient
 * @param {exponent} - num2 is a the exponent
 * @function derive - should multiply the two params, and then subtract 1 from the exponent
 * @returns {string} - an expression like '28x^1'
 */

// [E]xample

//             derive(7, 8)
//           grab 7 >>>  <<< grab 8

//          multiply 7 x 8 = 56

//         return `${result}x^${exponent - 1}`

// [A]pproach

//     Hueristic / Mathematical non iterative approach

// [C]ode 

//     [] create a variable result that will do the arithmetic of num1 * num2 
//     [] create a return statement that constructs the result with the exponent - 1

// [T]est derive(7, 8) ✅

// [O]ptimization: video that helped me >>> https://www.youtube.com/watch?v=8mBxpDWEKNw
// ⏲️ Time Complexity: 

//     - Since this algorithm will take the same amount of time to complete and 
//     produces basic arithmetic operation of the coefficient and exponent
    
// ⏲️ run-time complexity is 💫 Constant time Big O(1) 💫

// 🛰 Space Complexity: Input Size + Auxillary Space

//     derive(aux) + >
//     return(aux) +   >
//     coefficient +     > K1 > drop constants > 1 > Big O(1)
//     exponent    +   > 
//     result      + >
    
// 🛰 Space time complexity is also constant time Big O(1)


// Solution 1
function derive(coefficient, exponent) {

    let result = coefficient * exponent;
    console.log(result)
    console.log(`${exponent - 1}`)
    console.log(`${result}x^${exponent - 1}`)

    return `${result}x^${exponent - 1}`
}

// Solution 2
function derive(coefficient, exponent) {

    return `${coefficient * exponent}x^${exponent - 1}`

}

derive(7, 8)
