// [R]epeat
/**
 * @tutorial https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
 * @description Given a random non-negative number, you have to return the digits of the number within an array in reverse order. 
 * @function digitze
 * @param {integer} n - (348597)
 * @returns {array} - [7,9,5,8,4,3]
 */

// [E]xample 

//     empty box: [8, 4, 3]

//     Input: 3       4       8       5       9       7
//     >>>>>  ✅ grab 3 and push it to the front of the empty box
//     >>>>>         ✅ grab 4 and push it to the front of the empty box
//     >>>>>                  ✅ grab 8 and push it to the front of the empty box

// [A]pproach

//     - My first approach will be an iterative one where I will traverse through every int
//     - My second appraoch will be a non iterative one where I will use an array method to handle the load for me 

// [C]ode 

    // create an empty box 
    // convert set of #'s to a string
    // split the set of #'s to make it iteritable 
    // loop through the set
    // grab each number
    // push it to the front of the box
    // join the box back together as a set of integers
    // return the box when done

    // solution 1
    function digitize(n) {
        let reversedArray = [];
        let nState = n.toString().split('');

        for (let i = 0; i < nState.length; i++) {
            let currentEl = nState[i]
            
            reversedArray.unshift(parseInt(currentEl, 10));
        }

        console.log(reversedArray);
        return reversedArray
    }

    // solution 2
    function digitize(n) {
        console.log(n.toString().split('').reverse().map(Number));
    }
// [T]est

    digitize(35231); // should return [1,3,2,5,3]

[O]ptimization

    ⏲️ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer Reference:  

        Solution #1: O(n) Linear time complexity where n is being looped and has exponential growth potentional
        Solution #2: O(n) Linear time complexity where n is being looped by the map and has exponential growth potentional

    🛰 Space Complexity: Input Size + Auxiliary Space: 

        Solution #1: O(n) Linear time complexity ??
        Solution #2: O(n) Linear time complexity ??