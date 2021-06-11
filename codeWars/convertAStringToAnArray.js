/**
 * @tutorial https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
 * @function stringToArray
 * @param {string} string
 */

// Input 

//     >>> a string "I love arrays they are my favorite"

// Process 

//     - break up the string 

// Methods to consider 

//     - String.split()

// Edge Case 

//     - what happens when we get an empty string? 

// Output

//     >>> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
    console.log(string.split(' '));
}

stringToArray("I love arrays they are my favorite") // ["I", "love", "arrays", "they", "are", "my", "favorite"]