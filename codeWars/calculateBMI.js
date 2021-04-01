/**
 * @tutorial https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
 * @function bmi
 * @param {Number} weight
 * @param {Number} height
 * @returns {String} 
 */

// store the calculation in a variable = bmi = weight / height^2
// write a condition that checks the following 

//     if bmi <= 18.5 return "Underweight"

//     if bmi <= 25.0 return "Normal"

//     if bmi <= 30.0 return "Overweight"

//     if bmi > 30 return "Obese"

function bmi(weight, height) {
    let findBMI = (weight / Math.pow(height, 2));

    console.log(findBMI)

    if (findBMI <= 18.5) return 'Underweight'
    if (findBMI <= 25.0) return 'Normal'
    if (findBMI <= 30.0) return 'Overweight'
    if (findBMI > 30.0) return 'Obese'
    
}

bmi(80, 1.80);