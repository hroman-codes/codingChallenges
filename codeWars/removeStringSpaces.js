// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
 * @description - Simple, remove the spaces from the string, then return the resultant string.
 * @function noSpace 
 * @param {string} x - a string sequence
 * @returns {string} - a string without the spaces 
 */

// [E]xample 

//                 'hey heriberto dont give up' 
//         >>>>>>   ^^^_^^^^^^^^^_^^^^_^^^^_^^ once I hit a space remove it or pass on it

// [A]pproach - for the first attempt I will go with a non interative approach regex?

// [C]ode 

    //TODO: find a regex that is able to match the string and remove spaces
    //TODO: return the condenced string 

// [Test] 

    // noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') // return '8j8mBliB8gimjB8B8jlB'

// [O]ptimization

// ⏲️ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer Reference 

//     ✅ This solution has a ⏲️ O(1) constant time complexity


// 🛰 Space Complexity: Input + Variable + Auxiliary Space

//     (A) x <<< Input                         4bytes
//     (B) noSpace <<< Auxiliary Space         4bytes

//                                 Total       8bytes

//     ✅ This solution has a 🛰 (O)1 constant space complexity


// solution 1
function noSpace(x) {
    console.log(x.replace(/\s+/g, ''));
}

// solution 2
const noSpace = x => console.log(x.replace(/\s+/g, ''));
          
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') // return '8j8mBliB8gimjB8B8jlB'
