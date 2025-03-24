[R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
 * @description - Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only. return correct age (int)
 * @function getAge 
 * @param {string} inputString - "4 years old"
 * @returns {integer} - returns the correct age int i.e 4
 */

[E]xample 

    input >>> "4 years old" >>> Output 4

    "4 years old"
 >>> ✅  <<< grab the first letter via [] notation since strings are array like structures
 
    then return string[0] and convert it into an int 

[C]ode

    // store the string in a variable as state
    // grab the first char via []notation
    // convert the string to int
    // return int

// solution 1
function getAge(inputString) {
    let stringState = inputString;
    let firstChar = stringState[0];
    let convertStrToInt = parseInt(firstChar);

    console.log(convertStrToInt);
    return convertStrToInt
}

// solution 2
function getAge(inputString) {
    return parseInt(inputString[0])
}

[T]est 

    getAge("4 years old")

[O]ptimization

    ⏲️ Time complexity will be constant O(1) where the size of the input will not grow exponentialy 
    🛰 Space complexity will also be constant O(1) 

