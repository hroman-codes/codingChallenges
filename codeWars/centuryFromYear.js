[R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
 * @description - The first century spans from the year 1 up to and including the year 100, 
 *                The second - from the year 101 up to and including the year 200, etc.
 *                Given a year, return the century it is in.
 * @function century
 * @param {integer} year - 1705, 1900, 2020 🤮
 * @returns {integer} - the century the year lives in
 */

[E]xample 

    1)
        so if we have the following >>> centuryFromYear(1705)  returns (18)

        so for every 100 years its = 1 century 

        so if we said 1,705 % 100 in theory should give us a close answer = 17.5
        
        we take 17.5 and round up to 18 which will make this the 18th century 

    2)
        If we have >>> centuryFromYear(1900)  returns (19)

        and divide 1900 % 100 = 19th century <<< no need to worry about a float to round up. 


    How do I identify a float in javascript? 
    If there is a float I need to round up. 

[C]ode 

    create a state variable for the year param
    create a vairable that does the math of dividing the year by 100
    return the result with rounding up the result with Math.Ceil

// Solution #1
function century(year) {
    let yearState = year;
    let yearMath = yearState / 100;

    console.log(Math.ceil(yearMath));
    return Math.ceil(yearMath);
}

// Solution #2
const century = (year) => Math.ceil(year / 100);

[T]est 

    century(1705) // 18
    century(1900) // 19

[O]ptimization

    ⏲ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer Reference 
    
        (A) yearMath = Operation >>> 
        A >>> 
        K1 >>> 
        1 >>> 
        O(1) Constant time complexity    


    🛰 Space Complexity: Input size + Variables + Auxiliary space

        (A) year = input size
        (B) yearState = input size
        (C) yearMath = input size 
        (D) return = Aux Space 

        A + B + C + D >>> 
        K1 + K2 + K3 + K4 >>> 
        Drop the constants >>> 
        1 + 2 + 3 + 4 >>> 
        take the lower bounds = O(1) Constant Space Complexity 
