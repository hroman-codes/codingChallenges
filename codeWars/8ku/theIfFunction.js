/**
 * @tutorial https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript
 * @description Create a function called _if which takes 3 arguments: a boolean value 
 *              bool and 2 functions (which do not take any parameters): func1 and func2
 *              When bool is truth-ish, func1 should be called, otherwise call the func2.
 * @function _if
 * @param {Boolean} bool
 * @param {Function} func1
 * @param {Function} func2
 * @returns {Function}
 */

Input 

    >>> True

Process 
function _if(bool, func1, func2) {
    if (bool) {
        func1()   
    } else {
        func2()
    }
}

Complexity 
⏲ O(1) constant
🛰 O(1) constant 