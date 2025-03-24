/**
 * @tutorial https://www.codewars.com/kata/5935ecef7705f9614500002d/train/javascript
 * @function detect
 * @param {String} str 
 * @returns {Boolean} 
 */

// >>> Example 

    // Input:

    //     'Can someone explain to me what this kata is about?'

    // Process:

    //     the first three words has to be 'Can someone explain' case sensitive. 

    //     we can split up the words into there own buckets

    //     ['Can', 'someone', 'explain', 'to', 'me', 'what', 'this', 'kata', 'is', 'about?']
    //        0       1            3

    //     the we iterate through the list 
    //     if the first word is equal to 'Can' &&
    //     if the second work is equal to 'someone' &&
    //     if the third word is equal to 'explain'
    //     we return True

    // Output: 

    //     True

// >>> Code
function detect(str) {
    let breakUpWords = str.split(' ');
    console.log(breakUpWords)
    console.log(breakUpWords[0])
    console.log(breakUpWords[1])
    console.log(breakUpWords[2])

    if(breakUpWords[0] === 'Can' && 
    breakUpWords[1] === 'someone' && 
    breakUpWords[2] === 'explain') {
        console.log(true)
    } else {
        console.log(false)
    }
}

// detect('can someone explain to me what this kata is about?');

// >>> Optimization 
// ⏲️ Time complexity of this solution is O(n) where the split method has to iterate through the length of the Array

// >>> Solution 2
function detect(str) {
    console.log(str.startsWith('Can someone explain')); 
}

detect('Can someone explain to me what this kata is about?');

// >>> Optimization
// ⏲️ Time Complexity of this solution is also O(n) linear. Starts with defaults to 0 index and iterates through the lenght of the Array. 