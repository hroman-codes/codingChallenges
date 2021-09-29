/**
 * 
 * @tutorial https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
 * @description Timmy & Sarah think they are in love, but around where they live, 
 *              they will only know once they pick a flower each. If one of the flowers 
 *              has an even number of petals and the other has an odd number of petals 
 *              it means they are in love.
 * 
 *              Write a function that will take the number of petals of each flower 
 *              and return true if they are in love and false if they aren't.
 * @function lovefunc
 * @param {Number} flower1
 * @param {Number} flower2
 * @returns {Boolean}
 */

// input 

    // >>> (1, 4) // true
    // >>> (2, 2)// false

    // - will there be floating point numbers to account for? 

// process 

    // if !(flower1 modulus 2 with 0 left over &&
    //    !flower2 modulus 2 with 0 left over)   
    // return true 
    // otherwise return false 

// solution 1
function lovefunc(flower1, flower2) {
    if ((flower1 % 2 === 0) === false && (flower2 % 2 === 0) === false) {
        return false
    } else {
        return !((flower1 % 2 === 0) && (flower2 % 2 === 0))
    }
}

// solution 2
function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}

// test 
console.log(lovefunc(1,4)) // true
// console.log(lovefunc(0,1)) // true
// console.log(lovefunc(2,2)) // false
// console.log(lovefunc(457,553)) // false

// complexity
⏲️ Constant time O(1)
🛰 Constant time O(1) // flower1 and flower2 are taking the shape of a Number whether 1 or 1mill they take up the same amount of space