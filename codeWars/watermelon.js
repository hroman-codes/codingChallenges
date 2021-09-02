/**
 * @tutorial https://www.codewars.com/kata/55192f4ecd82ff826900089e/train/javascript
 * @description Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), 
 *              check whether Pete and Billy can divide the melons so that each of them gets an even amount.
 *              divide(2) === false // 2 = 1 + 1
                divide(3) === false // 3 = 1 + 2
                divide(4) === true  // 4 = 2 + 2
                divide(5) === false // 5 = 2 + 3
                divide(6) === true  // 6 = 2 + 4
 * @function divide
 * @param {Number} weight
 * @returns {Boolean}
 */

Input 

    >>> 2 
        ^     
    - sole integer 
    - we can apply math to it i.e Math Prototype methods
    - its not a float 

Process

    - we need to take the number and split up all the possible combinations how?
        - possible loop through the number 
        - possibly divide or modulus the weight / 2
        - check for floats as an indicator of some sort 

    w2 / 2 = 1 <> 2 > 2
        F          F

    w3 / 2 = 1.5 <> 3 > 2
        F           T 
              F 
    
    w4 / 2 = 2 <> 4 > 2
       T            T
            T

function divide(weight) {

    if (weight % 2 === 0 && weight > 2) {
        return true 
    } else {
        return false
    }
}

// console.log(divide(2)) // false 
console.log(divide(4)) // true 