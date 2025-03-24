/**
 * @tutorial https://www.codewars.com/kata/57f222ce69e09c3630000212
 * @function well 
 * @param {Array} x 
 * @description - In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
 *                If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
 *                If there are no good ideas, as is often the case, return 'Fail!'.
 * @return {String} 
 */

// input 

//     >>> ['bad', 'bad', 'bad']
//                          ^
//     >>> ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']
//                                                 ^
//     - list of strings 'bad' || 'good'
//     - Is iterable 
//     - Can use Array methods 

// process [Iterative approach]

    // - Create a counter called good 
    // - loop through the array  
    // - if I only have 2 "good" return 'Publish!' <<< I need to complete the loop
    // - if I reach 3 "good" stop the loop and return 'I smell a series!'
    // - else return 'fail'

function well(x){
    let good = 0;

    for (let isGood of x) {   
        if (isGood === 'good') good++ 
        if (good > 2) break 
    }
    
    let result = (good > 2) ? 'I smell a series!' : 
                 (good >= 1 && good <= 2) ? 'Publish!' : 
                 'Fail!'

    return result
}

// console.log(well(['bad', 'bad', 'bad'])) // fail
// // console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])) // publish
// // console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])) // I smell a series!

// Time Complexity O(n)
// Space Complexity O(n)


// solution # 2

// process [use .SET then count the length]


// function well(x) {
//     let lengthOfX = x.length;
//     console.log(lengthOfX)
//     let checkForGood = [...new Set(x)]
//     console.log(checkForGood);

//     if (checkForGood.length === 1 && checkForGood[0] === 'bad') console.log('Fail!')
//     if (checkForGood.length === 2 && checkForGood[0] === 'good') console.log('Publish!')
//     if (x.length > 3 && checkForGood[0] === 'good') console.log('I smell a series!')
// }


// console.log(well(['good', 'good', 'good', 'bad'])) // fail
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])) // publish
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])) // I smell a series!