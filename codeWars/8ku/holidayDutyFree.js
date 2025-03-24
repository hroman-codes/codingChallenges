/**
 * @tutorial https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
 * @description The purpose of this kata is to work out just how many bottles of duty 
 *              free whiskey you would have to buy such that the saving over the normal high street price 
 *              would effectively cover the cost of your holiday. You will be given the high street price (normPrice), 
 *              the duty free discount (discount) and the cost of the holiday. 
 * 
 *              For example, if a bottle cost £10 normally and the discount in duty free was 10%, 
 *              you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
 * 
 *              All inputs will be integers. Please return an integer. Round down.
 * @function dutyFree
 * @param {Number} normPrice 
 * @param {Number} discount
 * @param {Number} hol
 * @returns {Number}
 */

// Input 

//     >>> normPrice 12
//     >>> discount 50
//     >>> hol 1000
//     >>> 166

//     50% of 12 = 6 / 1000

// Process 

//     #It is asking you to find the DIFFERENCE between normal price and discounted price

//     #How many times that DIFFERENCE would sum to the equivalent of the holiday price

//     #Final part you can get away with geting rid of the decimals

function dutyFree(normPrice, discount, hol) {
    let getDiscount = normPrice * `.${discount}`
    let holidyCost = hol / getDiscount 
    let checkForDecimal = `${discount}`

    if (discount === 0) return Infinity

    if (checkForDecimal.length === 1) {
        getDiscount = normPrice * `.0${discount}`
        holidyCost = hol / getDiscount
    }

    return parseInt(holidyCost)
}

// Complexity
⏲️ Constant O(1)
🛰 Constant O(1)

// Test 
// console.log(dutyFree(12, 50, 1000)) // 166
console.log(dutyFree(1347, 4, 2133)) // 39