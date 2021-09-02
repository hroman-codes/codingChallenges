/**
 * @tutorial https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
 * @description Your function takes two arguments:
 *              current father's age (years)
 *              current age of his son (years) 
 *              Сalculate how many years ago the father was twice as old as his son 
 *              (or in how many years he will be twice as old).
 * @function twiceAsOld
 * @param {Number} dadYearsOld
 * @param {Number} sonYearsOld
 * @returns {Number} - how many years he will be twice as old
 */ 

// input 

//     >>> 36
//     >>> 7 

//     - both are #️⃣ 
//     - can aply the Math methods on it 

// process 

//     - take 7 x 2 = 14
//     - 14 years old is the age that is twice as old of his son 
//     - take the fathers age 36 and subtract 14 = 22 

// Solution 1
function twiceAsOld(dadYearsOld, sonYearsOld) {

    let twiceAsAgeOfSon = sonYearsOld * 2;
    let fatherTwiceAsOld = dadYearsOld - twiceAsAgeOfSon;

    return Math.abs(fatherTwiceAsOld);
}

// Solution 2
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((sonYearsOld * 2) - dadYearsOld);
}

// console.log(twiceAsOld(36,7)) // 22
twiceAsOld(55,30) // 5

Time Complextiy is Constant O(1)
Space Complexity is Constant O(1)