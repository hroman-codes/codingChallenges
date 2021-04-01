/**
 * @tutorial https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
 * @function check
 * @param {Array} a 
 * @param {Number} x
 * @returns {Boolean}
 */

// solution 1 
function check(a, x) {
    console.log(a.includes(x));
}

// solution 2
function check(a, x) {
    console.log(a.indexOf(x) > -1 ? true : false);
}

check([66, 101], 66)
check(['what', 'a', 'great', 'kata'], 'kat')

// >>> Optimization
// ⏲️ Time complexity of solution 1 is O(n) Linear time where the .includes loop though the aray once 