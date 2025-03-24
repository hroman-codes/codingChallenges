/**
 * @tutorial https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
 * @function uefaEuro2016
 * @param {Array} teams 
 * @param {Array} scores
 */

//  >>> Example 

    // Input: 

    //     ['Germany', 'Ukraine'], [2, 0]

    // Process: 

    //     Which array method can I use to determine which is the greatest element? >>> Math.Max 
    //     Once I get the index construct a string and make reference to the teams array?

    // Output

    //     "At match Germany - Ukraine, Germany won!"

// >>> Code
    // create a variable that stores returns the index of the greates value in the array
    // return the string with index reference pointing to the teams array

function uefaEuro2016(teams, scores) {
    let greatestValueInArray = scores.indexOf(Math.max(...scores))
    let arrayValueEqual = new Set(scores).size == 1;

    console.log(arrayValueEqual ? `At match ${teams[0]} - ${teams[1]}, teams played draw.` : `At match ${teams[0]} - ${teams[1]}, ${teams[greatestValueInArray]} won!`)
    // return arrayValueEqual ? `At match ${teams[0]} - ${teams[1]}, teams played draw` : `At match ${teams[0]} - ${teams[1]}, ${teams[greatestValueInArray]} won!`
}

// >>> Test 
uefaEuro2016(['Germany', 'Ukraine'], [1, 2]);

// >>> Optimization
⏲️ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer reference

    n(A) indexOf()  Function Call
    (B) Math.max   Function Call
    (C) Set()      Function Call 
    (D) tern       Comparison 

    List out:      (nA) + (B + C + D) 
    Group:          nK1 + K2
    Drop Const        n 
    Result:         O(n) Linear time complexity
