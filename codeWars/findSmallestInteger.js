// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
 * @description - Given an array of integers your solution should find the smallest integer.
 * @class SmallestIntegerFinder
 * @param {array} args - an array of integers
 * @returns {integer} - the smalles integer in the collection
 */

// [E]xample

//    args = [34, 15, 88, 2] // should return 2
//           >>>>>>>>>>>>>>> possible loop and compare each index 
//           >>>>>>>>>>>>>>> or I can sort it from least to greatest
          
// [A]pproach - I will try a non iterative approach first with the sort method 

// [C]
    // grab the array and sort it from least to gretest
    // grab the first index
    // return the first index
    
// [T]est

    // - [78,56,232,12,8] // should return 8
    // - [78,56,232,12,0] // should return 0

// [O]ptimization

⏲️ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer Reference 

    ⏲️ O(log n) Logarithmic time copmplexity

🛰 Space Complexity: Input + Variables + Auxiliary space

    (A) args                    4bytes 
    (B) sortedArray func        4bytes
    (C) sortedArray return      4bytes
    (D) findSmallestInt func    4bytes
    (E) sort function           4bytes

🛰 O(log n) Logarithmic Space Complexity

    function findSmallestInt(args) {

        let sortedArray = args;

        sortedArray.sort(function(a, b) {
            return a - b;
        })

        console.log(sortedArray)
        console.log(sortedArray[0]);

        return sortedArray[0]
    }

findSmallestInt([78,56,232,12,8]) // should return 8
findSmallestInt([78,56,232,12,0]) // returns 0