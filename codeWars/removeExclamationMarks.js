/**
 * @tutorial https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
 * @description Write function RemoveExclamationMarks which removes all exclamation marks from a given string
 * @function removeExclamationMarks
 * @param {string} s
 * @returns string without the exclamation mark
 */

// input

//     >>> "Hello World!" 

//     - will all inputs be strings 
//     - Do I need to account for captilization
//     - will there be more than one ! i.e !!

// process

//     ? I will be going with a brute force iterative approach first 
//     ? which data structure am I going to use
//         - for the brute force I will use an array to store the result
        
//     - create a container to hold the result 
//     - loop through the string
//         - if we find a '!'
//         - continue the loop and do nothing with it 
//         - otherwise push the currentEl to the container 
//     - join the string back together
//     - return the rest of the string 

// output 

//     >>> "Hello World" 

// 1st solution
function removeExclamationMarks(s) {
    let resultString = [];

    for (let i = 0; i < s.length; i++) {
        let currentEl = s[i]
        console.log(currentEl)

        if (currentEl === '!') {
            continue
        } else {
            resultString.push(currentEl)
        }
    }

    console.log(resultString.join(' '))
    console.log(resultString)

    return resultString.join('')
}

console.log(removeExclamationMarks("Hello World!"))

// FOCL = Function call to outside + Operations + Comparisons + Loops

// 1. function call >>> join() >>> O(n)    
// 2. loop >>> for loop >>> O(n)           

// Worst case will be a linear time complexity O(n) where n is the size/length of the string

// Optimizations
// function removeExclamationMarks(s){
//     // - split the array 
//     // - search the array for '!'
//     // - remove it 
//     // - join the array back together 
//     // - return the array 

//     let cutArray = s.split('');
//     let removeExclamation = cutArray.splice(s.indexOf('!'), 1);
//     let joinArray = cutArray.join('');


//     return joinArray
// }

// console.log(removeExclamationMarks("Hello World!"))

// Regex solution & Split Join solution 
function removeExclamationMarks(s){
    return s.replace(/!/gi, '');
    return s.split('!').join('');
}


console.log(removeExclamationMarks("Hello World!"))
