/**
 * @tutorial https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
 * @function bonusTime
 * @param {Integer} salary
 * @param {Boolean} bonus
 */

function bonusTime(salary, bonus) {
    // create a variable salaryIncrease to do the math (salary * 10)
    let salaryIncrease = salary * 10;
    
    if (bonus) return `£${salaryIncrease}`;
    return `£${salary}`;
    // if bonus is true 
    //     return salaryIncrease
    // else 
    //     return salary
}

bonusTime(10000, true)
