// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
 * @description - Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 * @function boolToWord
 * @param {boolean} bool - a boolean value of true or false
 * @returns {string} - a string 'yes' || 'no' 
 */

// [E]xample - if passed the boolean value of true function should return 'yes'

// [A]pproach - will be a non interative approach utilizing conditional logic 

// [C]ode 

    // write a conditional that checks if the bool === true return 'Yes'
    // otherwise return false 
    
// [T]est 

//     - boolToWord(true) // return yes
//     - boolToWord(false) // return false

// [O]ptimization 

// ⏲️ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer Reference 

//     (A) (bool === true) ? 'Yes' : 'No'                  Comparison 

//     List Out                                            A
//     Group                                               K1
//     Drop Constant                                       1
//     Result                                              ⏲️ O(1) constant time complexity 


// 🛰 Space Complexity: Input + Variables + Auxiliary Space 

//     (A) bool                Input                   4bytes
//     (B) boolToWod           Auxiliary Space         4bytes

//     List out                A + B 
//     Group                   k1 + k2
//     Drop Constants             1
//     Result                  🛰 O(1) constant space complexity                   

function boolToWord (bool) {
    return console.log((bool === true) ? 'Yes' : 'No'
}

boolToWord(true) // return yes
boolToWord(false) // return no
