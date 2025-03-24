// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
 * @description - You get an array of numbers, return the sum of all of the positives ones.
 * @function positiveSum
 * @param {array} arr - an array of numbers
 * @returns {integer} - the sum of all the positive numbers
 */

// [E]xample

//     - [1,-4,7,12] should return 1 + 7 + 12 = [20]

// [A]approach: will be an interative approach looping through each index in the Array 

// [C]ode 

    // create a variable called total to track the sum of postive integers 
    // loop through the list of numbers
    // if the number is positive 
    // append/add the number to the total variable
    // once the loop ends return the total variable 

// [T]est: positiveSum([1,2,3,4,5])

// [O]ptimization

// ⏲️ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer reference

//     (nA) for loop             Loop
//     (nB) total += index       Operation

//     List out                  n(A + B)
//     Group                     nK1
//     Drop Constant             n 
//     Result                    ⏲️ O(n) Linear Time Complexity where run time is proportional to the size of (n)

// 🛰 Space Complexity: Input Size + Auxiliary Space + Variable

//     (A) positiveSum             Auxilary Space          4bytes
//     (B) arr                     Input Size              4bytes
//     (C) total                   Variable                4bytes
//    n(D) index                   Variable                4bytes

//    List Out:                    A + B + C + n(D)
//    Group:                          K1  + n(K2)
//    Drop Constants:                    N  
//    Result:                      🛰 O(n) Linear Space Complexity     
    

// Solution #1
function positiveSum(arr) {
    let total = 0;

    for (let index of arr) {
        
        if(Math.sign(index) === 1) {
            total += index
        }
    }

    return total
}

positiveSum([1,2,3,4,5]) // should return 15
// positiveSum([1,-2,3,4,5]) // should return 13