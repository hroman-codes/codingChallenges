// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript
 * @description - Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
 *                You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
 * @function litres 
 * @param {float} time - both a whole integer and float
 * @returns {integer} - a whole number rounded to the smalles value  
 */

// [E]xample 

// time = 3 ----> litres = 1

// 0.5 X 3 = 1.5 >>> round down to 1

// [A]pproach - this will be a non iterative mathamathical approach 

// [C]ode 

    // create a state variable for time
    // create the equation to multiply time x 0.5, then round it down to smallest value with floor
    // Store it a variable 
    // Return variable 

function litres(time) {
    let timeState = time;
    let math = Math.floor(timeState * 0.5)

    console.log('math>>>', math);
    return math
}

// [T]est 
litres(1.4) // 0
litres(12.3) // 6

// [O]ptimization

// ⏲️ Time Complexity wil be constant time O(1)
// 🛰 Space Complexity will be constant time O(1)

