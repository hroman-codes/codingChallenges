/**
 * @tutorial https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
 * @function zeroFuel
 * @param {Number} distanceToPump
 * @param {Number} mpg
 * @param {Number} fuelLeft
 */

// >>> Example 

    // Input:

    //     distanceToPump = 50 miles
    //     mpg = 25 miles 
    //     fuelLeft = 2 gallons

    //     // write a function that tells you if its possible to get to the pump or not 

    // Process: 

    //     take distanceToPump / 50 
    //     if fuelLeft * mpg = distanceToPump
    //         then return true 

    // Output: 

    //     true 


// >>> Code 
function zeroFuel(distanceToPump, mpg, fuelLeft) {
    if (fuelLeft * mpg >= distanceToPump) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// zeroFuel(50, 25, 2)
zeroFuel(100, 50, 1)