// [R]epeat 
/**
 * @function opposite 
 * @description given a number find its oposite
 * @param {integer} number - N amount of negative and positive numbers
 * @returns {integer} - the oposite number representation of @param {integer} number
 */

// [E]xample

//     1: -1
//     14: -14
//     -34: 34

// [A]pproach - This will be a non interative heuristic approach 

// [C]ode 

    // find a Number method that can handle the conversion
    // if the number is positive use the Math.abs()
    // if the number is negative use the -Math.abs()


// [T]est 
    // opposite(4)
    // opposite(-4)

// [O]ptimization 

// ⏲️ Time Complexity (FOCLP): Function Call to outside + Operations + Comparisons + Loops + Pointer Reference 

//     A if statement (comparison) 

//     List Out:                   A 
//     Group:                      K1
//     Drop Const:                 1
//     Result:                     ⏲️ O(1) Constant Time Complexity

// 🛰 Space Complexity: Input size + Auxilary Space

//     A opposite (Aux)            4 bytes
//     B number   (Input)          4 bytes
//     C return 1 (Aux)            4 bytes
//     D return 2 (Aux)            4 bytes

//     List Out:                   A + B + C + D 
//     Group:                          K1 
//     Drop Constant:                  1
//     Result:                     🛰 O(1) Constant Time Complexity           

// Solution 1
function opposite(number) {
    if (Math.sign(number) === -1) {
        return Math.abs(number)
    } else {
        return -Math.abs(number)
    }
}


opposite(-4)