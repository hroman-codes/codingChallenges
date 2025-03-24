// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
 * @description - Consider an array/list of sheep where some sheep may be missing from their place. 
 *                We need a function that counts the number of sheep present in the array (true means present).
 * @function countSheeps
 * @param {array} arrayOfSheep - an array filled with boolean values
 * @returns {integer} - the total amount of TRUE boolean values
 */

// [E]xample 

//     Input: [true, false, true, true, false]   return 3
//         >>>  ✅     ❌      ✅   ✅     ❌    

// [A]pproach - Im going to use a non iterative approach using an array method. 
//              I can always try to naive approach with a loop if the array method doesnt work out.

// [C]ode 

    // grab the array and store it in a variable for immutability purposes [STATE]
    // filter out the array and find all true boolean values 
    // filter method returns a new array with the filtered results, check the length
    // return the length of the filtered array. 

function countSheeps(arrayOfSheep) {
    const sheepState = arrayOfSheep;
    const filteredArray = sheepState.filter(bool => bool === true);
    
    console.log(filteredArray.length);
    return filteredArray.length;
}
    
// [T]est 

countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]) // should return 17

// [O]ptimization

// ⏲️ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer References 

//     - ⏲️ O(n) Linear Time Complexity where the size of the input arrayOfSheep will operate on every item

// 🛰 Space Complexity: Input Size + Variables + Auxiliary Space 

//     (A) arrayOfSheep                    Input Size                  (N)4bytes
//     (B) sheepState                      Variables                   4bytes
//     (C) filteredArray                   Variables                   4bytes
//     (D) return                          Auxiliary                   4bytes
//     (E) countSheeps                     Auxiliary                   4bytes 

//     - 🛰 O(N) linear Space Complexity
