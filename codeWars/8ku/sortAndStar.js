/**
 * @tutorial https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
 */

// Details / Input:

//     - List a of strings aka Array 

// Process: 

//     - Sort it alpha 
//         - case sensitive // edge case 
//         - based on ASCII values of chars

// Output: 

//     - then return the first value
//     - must be a string 
//     - must have "***" between each of the letters 

// Constraint: 

//     - you should not remove or add elements from/to the array

// Example: 

//     twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) 
//     >>>> 'a***r***e'


//     let sortedArray = ['are', 'basic', 'cases']
//                         ^ 0
// let stringConversion = 'are'.charCodeAt(2);
// console.log(stringConversion);

// let arr = ["are", "ant"]; 
//             345    380

// let storage = {
//     "are": 345,
//     'ant': 380
// }

// let sortedArray = arr.sort((a, b) => b - a)

// console.log(sortedArray);

// part 1
// - iterate through array 
// - store each element in a variable 
// - split each element >>>>> 'a r e' split("") // ["a", "r", "e"]
// - iterate throuhg the string that was split >>>> map()
//     - inside the map find the ascii value >>> charCodeAt()
//     - add all the values 
//     - we have to keep track of the entire word >>> array method that can help? 

// part 2
// - grab the first element in the array 
// - split up the element and inject '***' between each letter >>>> str = "are" str.split("***")
// - return the word

// function twoSort(s) {
//     let storage = {}

//     debugger
//     for (let i = 0; i < s.length; i++) {
//         let currentElement = s[i];
//         let splitCurrentElement = currentElement.split('');
//         let charValue = splitCurrentElement.map(letter => letter.charCodeAt(0));
//         let totalCharValue = charValue.reduce((a, b) => a + b);

//         console.log('splitCurrentElement', splitCurrentElement);
//         console.log('charValue', charValue);
//         console.log('totalCharValue', totalCharValue);

//         storage[currentElement] = totalCharValue
//     }

//     console.log('storage', storage);
//     let sortedStorage = Object.entries(storage)
//                         .sort(([,a], [,b]) => a - b)
//                         .reduce((r, [k,v]) => ({...r, [k]: v}), {})
//     console.log('sortedStorage', sortedStorage);

//     let test = Object.keys(sortedStorage)
//     console.log(Object.keys(sortedStorage))

//     console.log(test[0].split().join("***"));
//     // return sortedStorage[0].split("").join("***");
//  }

//  cleaned up version
//  function twoSort(s) {
//     let storage = {}

//     for (let i = 0; i < s.length; i++) {
//         let currentElement = s[i];
//         let splitCurrentElement = currentElement.split('');
//         let charValue = splitCurrentElement.map(letter => letter.charCodeAt(0));
//         let totalCharValue = charValue.reduce((a, b) => a + b);

//         storage[currentElement] = totalCharValue
//     }

//     let sortedStorage = Object.entries(storage)
//                         .sort(([,a], [,b]) => a - b)
//                         .reduce((r, [k,v]) => ({...r, [k]: v}), {})

//     let starWord = Object.keys(sortedStorage);

//     console.log(starWord[0].split("").join("***"))
//     return starWord[0].split("").join("***");
//  }

// twoSort(["ant", "are"]);
// twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) 
// 'b***i***t***c***o***i***n'

// final working solution 
function twoSort(s) {
    return s.sort()[0].split("").join("***")
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) 
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])