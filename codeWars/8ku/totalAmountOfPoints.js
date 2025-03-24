/**
 * @tutorial https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
 * @function points 
 * @param {Array} games 
 * @returns {Number} - the accumilation on points 
 */

// >>> Example

    // Input: 

    //     ["3:1", "2:2", "0:1", ...]

    // Process:

    //     if x>y - 3 points
    //     if x<y - 0 point
    //     if x=y - 1 point

    //     ['3:1']
    //        ^
    //     need to break up this string sitting in el[0] how do we do that?
        
    //     Is there a method out thier that can break up strings and recognize numbers? 

    //         RegExp

    //     let str = ['3:1']

    //     let matches = str.match(/(\d+)/) <<< returns an array containers the numbers 

    //     we can extract the [0] and [1] el and compare 

    //     // create a tracker totalScore variable
    //     // iterate through the array
    //     // extract each element 
    //     // apply the following regex (/(\d+)/) which returns an array 
    //     //TODO: apply the logic for all use casses 
    //         if x>y - assign 3 points to the total score variable
    //         if x<y - assign 0 point points to the total score variable
    //         if x=y - assign 1 point points to the total score variable

    // Output: 4 points

// >>> Code 
function points(games) {
    let totalScore = 0;

    debugger
    for (const el of games) {
        let matchNums = el.match(/\d+/g);
        
        if (matchNums[0] > matchNums[1]) totalScore += 3
        if (matchNums[0] === matchNums[1]) totalScore += 1
    }

    console.log(totalScore)
    return totalScore
}

// >>> test 
points(["3:1", "2:2", "0:1"]); // 

// >>> Optimization
⏲️ Time complexity (FOCLP): function call to outside + Operations + Comparisons + Loops + Pointer Reference 

n(A) matchNums .match is a function call to outside 
n(B) total score is a operation 
n(C) for loop

n(A + B + C)

⏲️ O(N) Linear time complexity 