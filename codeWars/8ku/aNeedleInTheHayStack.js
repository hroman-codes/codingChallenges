[R]epeat
/**
 * @tutorial https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
 * @description - write a function findNeedle() that takes an array full of junk but containng one 'needle'
 *                after your function find the needle it should return a message (as a string) that says: 
 *                'found the needle at position' plus the index it found the needle.
 * @function findNeedle 
 * @param {array} haystack - an array full of different primitive values
 * @returns {string} - 'found the needle at position {index}'
 */

[E]xample 

    Input: findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
    traverse >>>>>>>>>  ❌      ❌      ❌      ❌      ❌          ✅          ❌
    index:              0       1       2       3       4          5          6

    return 'Found the needle at position 5'

[A]pproach

   - My first approach will be an interative one I will traverse through the array until I reach the index
   - My second approach will be a non iterative one, I will attempt to use a ES6 array method i.e find(), includes(), findIndex() to find the element and return the index 

[C]ode 

    create a search term variable for the term nedle
    loop through the array 
    check to see if the current index is equal to the search term
            if so return the string with the index 
            else keep looping  
                return no term was found. 
// solution 1
function findNeedle(hayStack){
    let searchTerm = 'needle'

    for (const [i,v] of hayStack.entries()) {
        console.log(i ,v)
        console.log(hayStack[i]);

        if (searchTerm === hayStack[i]){
            console.log(`Found the needle at position ${i}`)
            return `Found the needle at position ${i}`
        }
    }
}

// solution 2
const searchNeedle = (element) => 'needle' === element;

function findNeedle(hayStack) {
    console.log(hayStack.findIndex(searchNeedle));
    console.log(`found the needle at position ${hayStack.findIndex(searchNeedle)}`);
    return `found the needle at position ${hayStack.findIndex(searchNeedle)}`

}

[T]est 

    findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]) // should return 3

[O]ptimization
// Solution 1
    ⏲️ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer Reference 

    (A) searchTerm === hayStack[i]                      Comparisons 
    (B) for of                                          Loop 

    List Out                                            A + n(B)
    Group                                               K1  n(K2)
    Drop Constant                                       n 
    Result                                              ⏲️ O(n) Linear Time Complexity 
    
    🛰 Space Complexity: Input Size + Auxilary Space 

    result O(n) linear space complexity 

// Solution 2
    ⏲️ Time Complexity: O(n) Constant time  
    🛰 Space Complexity O(n) linear space complexity 

