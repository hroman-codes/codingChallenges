/**
 * @description Anagrams -  Given two strings, write a function to determine if the second string is an 
 *                          anagram of the first. An anagram is a word, phrase, or name formed by rearrannging the letters
 *                          of another, such as cinema, formed from iceman. - frequency counter problem
 * @function anagram
 * @param {String} firstWord
 * @param {String} secondWord
 * @returns {Boolean}
 */

// Input 

    // >> 'aaz' & 'zz'  // false 
    //      ^      ^

    // >> 'has' & 'ash' // True
    //     ^       ^

    // H ✅
    // A ✅
    // S ✅

    // Return True 

    // What do we know about input? 

    //     - data type of String
    //     - can use String methods on it 
    //     - can have any length
    //     - need to keep track of letters
    //     - has an index tied to each letter
    //     - is iterable 
    
    // How do I keep track of letters? 

        // - create an object 

// Process
function anagram(first, second) {
    if (first.length !== second.length) return false;

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i]
        // if letter exist, increment, otherwise set to 1 
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    console.log('lookup >>', lookup)

    // debugger
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // cant find letter or letter is zero then it's not an anagram 
        if (!lookup[letter]) {
            return false 
        } else {
            lookup[letter] -= 1
        }
    }

    console.log('lookup >>', lookup)

    return true;
}
    

// Output
// console.log(anagram('aaz', 'zza')) // false
console.log(anagram('anagram', 'nagaram')) // true

// Complexity
⏲️ Time O(N) linear time 
🛰 Space O(N) linear time 