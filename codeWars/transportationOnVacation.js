/**
 * @tutorial https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
 * @function rentalCarCost
 * @param {Number} d
 * @returns {Number}
 */

// >>> Example

    // Input: 

    //     $40 per day to rent a car

    //     7 days a week

    //     You get $50 off for rentals pass 7 days

    //     Alternatively if you rent the car for 3 or more days, you get $20 off the total

    //            $20                  $50 off pass 7 days
    //     M   T   W   T   F   S   S 
    //             ^   ^   ^   ^   ^  
                
    // Process: 

    //     if days are less than 2 each day cost $40 
    //     if the days are pass 3 sum up the total *40 then take off 20 discount
    //     if the days are pass 7 sum up the total *40 then take off 50 discount 


// >>> Code 
function rentalCarCost(d) {
    let perDayTotal = 40
    let threeDayDiscount = 20
    let sevenDayDiscount = 50

    if (d <= 2) console.log(d * perDayTotal);
    if (d >= 3 && d <= 6) console.log((d * perDayTotal) - threeDayDiscount);
    if (d > 6) console.log((d * perDayTotal) - sevenDayDiscount);
}

// rentalCarCost(2)    
// rentalCarCost(6)
// rentalCarCost(10)