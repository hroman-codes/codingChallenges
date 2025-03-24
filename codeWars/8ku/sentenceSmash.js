/**
 * @tutorial codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
 * @description Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
 * @function smash
 * @param {String} words
 * @returns {String} combined version of the string
 */

// Input: 

//     ['hello', 'world', 'this', 'is', 'great']

// Process: 

//     - how do we get each element and smash them into a sentence? 
//         - we can take the brute force approach by iteration
//         - we can take the slick approach and use a cool array method to join each element


//     - brute force approach with a loop and concat the string together with a space in between each word. 
//     - use the array.join() method. 

// solution 1 
function smash(words) {
    console.log(words.join(' '));
}

smash(['hello', 'world', 'this', 'is', 'great'])


// solution 2 
// function smash(words) {
//     var smashed = '';

//     for (var i = 0; i < words.length; i++) {
//         smashed += words[i];

//         if (i! = words.length - 1) {
//             smashed += ' ';
//         }
//     }

//     console.log(smashed)
//     return smashed;
// }

// smash(['hello', 'world', 'this', 'is', 'great'])