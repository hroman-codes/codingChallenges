/**
 * @tutorial https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
 * @description Given three integers a ,b ,c, return the largest number obtained after 
 *              inserting the following operators and brackets: +, *, ()
 *              In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
 * @function expressionMatter
 * @param {Number} a
 * @param {Number} b 
 * @param {Number} c
 * @returns {Number}
 */

Input 

    >>> 2 1 2 // should be 6

    What do we know about the amount of params? 

        - we have a consistant set of 3 params 🤔
    
    What do we know about some of the restrictions 

        - we can only use a combination of 3 operators +, *, () 🤔
    
    How many combinations can I set with a 3 x 3 🤔 

        - 17,576,000 (seventeen million) <<< not sure about this 😲 🤔

Process 
function expressionMatter(a,b,c) {

    let largestNumber = 0;

    let comboOne = a * b * c
    let comboTwo = a + b + c
    let comboThree = (a + b) * c
    let comboFour = a + (b * c) 
    let comboFive = (a * b) + c
    let comboSix = a * (b + c)

    if (comboOne > largestNumber ) largestNumber = comboOne
    
    if (comboTwo > largestNumber) largestNumber = comboTwo

    if (comboThree > largestNumber) largestNumber = comboThree

    if (comboFour > largestNumber) largestNumber = comboFour

    if (comboFive > largestNumber) largestNumber = comboFive

    if (comboSix > largestNumber) largestNumber = comboSix

    return largestNumber

}

// console.log(expressionMatter(2,1,2)) // 6
console.log(expressionMatter(5, 6, 1)) // 35

// Time Complexity 
Time = Constant O(1)
Space = Constant O(1) <<< yes or no 🤔