// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
 * @description - create a function that does four basic mathematical operations
 * @function basicOp
 * @param {String} operation
 * @param {Number} value1
 * @param {Number} value2
 * @returns {Number} - result of the the numbers after applying the chosen operation
 */

// [E]xample 

//     Input:  
        
//         '+', 4, 7

//     Process: 

//         '+', 4, 7
//          ^   ^  ^

//          let doMath = arg2 arg1 arg3
//                        4    +    7
//         convert the string into an actual operator <<< I did some research and the eval() method should do the trick

// [Code]

    //TODO: grab the inputs and store them in the right order of operation
    //TODO: use the eval function and return it


function basicOp(operation, value1, value2) {
    console.log(typeof arguments);
    console.log(arguments)
    console.log(`${arguments[1]} ${arguments[0]} ${arguments[2]}`)
    console.log(eval(`${arguments[1]} ${arguments[0]} ${arguments[2]}`))
    return eval(`${arguments[1]} ${arguments[0]} ${arguments[2]}`)
}   

// [T]est
basicOp('+', 4, 7)

// [O]ptimization

// ⏲️ O(1) constant time complextiy where 1 is the size of the input 
// 🛰 O(1) constant space complexity 
        