[R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
 * @description take the provided string and convert it to a number 
 * @function stringToNumber
 * @param {string} str - '1234'
 * @returns {integer} - 1234
 */

[E]xample
   Get an input "1  2   3   4"
   convert the whole string to an integer using a built in Number method || * 1;
   
   
[A]pproach
    - non iterative approach

[C]ode 
    var stringToNumber = function(str) {
        console.log(str * 1)
        console.log(typeof (str * 1))
        return str * 1;
    }

[T]est
    stringToNumber("1234")

[O]ptimization
    ⏲️ Time Complexity (FOCLP): Fucntion call to outside + Operations + Comparisons + Loops + Pointer Reference

    (A) str * 1                         Operation 

    List out                            A
    Group                               K1 
    Drop Constant                       1
    Result                              ⏲️ O(1) constant time Complexity

    🛰 Space Complexity: Input Size + Auxiliary Space  

    (A) String                          Input
    (B) stringToNumber                  Aux 
    (C) return                          Aux

    List Out                            A + B + C
    Group                               K1 + K2 + K3 
    Drop Constant                       1 
    Result                              🛰 (O)1 constant space complexity 
