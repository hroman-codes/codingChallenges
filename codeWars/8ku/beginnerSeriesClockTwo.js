// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
 * @description - clock shows H hours, M minutes and S seconds after midnight. 
 *                Your task is to write a function which returns the time since midnight in milliseconds
 * @function past 
 * @param {Integer} h - hour
 * @param {Integer} m - minute
 * @param {Integer} s - seconds
 * @returns {Integer} - the time since midnight in milliseconds
 */

// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// [E]xample 
    // ie 1
    // Input:

    //     0   1   1   =   23  1   1
    //     h   m   s       h   m   s 

    // Process:

        // I need to figure out how many minutes did I revolve around after midnight up to 11:01:01
        // How many minutes in one hour? >>> 60
        // How many milisconds in one hour? >>> 3,600,000 ms
        // How many miliseconds in one minute? >>> 60,000 ms
        // how many miliseconds in one second? >>>  1,000

    // Output 

    //     61000 MS

    // ie 2
    // Input: 
    
    //     1   1   1
    //     h   m   s 

    // Process: 

    //     1h = 3,600,000 + 60,000 + 1,000 = 3,661,000

// [C]ode 
// create a variable for how many miliseconds are in an hour
// create a variable for how many miliseconds are in an minute
// create a variable for how many miliseconds are in an second 
// if h === 0 dont count the hour
// if m === 0 the minutes are now 59 min 


function past(h, m, s) {
    let result;
    let milliInAnHour = Number('3600000');
    let milliInOneMinute = Number('60000');
    let milliInOneSecond = Number('1000');

    if (h === 0 && m === 0 && s === 0) return 0   
    result = eval((h *  milliInAnHour) + (m * milliInOneMinute) + (s * milliInOneSecond));

    return result
}

// past(0,1,1) // should return 61000
// past(1,1,1) // should return 3661000
// past(0,0,0) // should return 0
past(1,0,1) // should return 3601000