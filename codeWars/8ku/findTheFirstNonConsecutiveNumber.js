/**
 * @tutorial https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
 * @function firstNonConsecutive 
 * @param {Array} arr 
 * @returns {Number} 
 */

// >>> Example 

    // Input: 
    
    //     [1,   2,   3,   4,   6,   7,   8]
    //        +1   +1   +1 +1 = 5🛑

    // Process:

    //     store the currentElement
    //     store the nextElement = currentElement + 1

    //     Iterate through the list 

    //     if the (currentElement + 1) is equal to the nextelement 
    //         we keep moving down the loop 
    //     if not 
    //         we return the next element 

    // Output:

    //     6

//     [1,   2,   3,   4,   6,   7,   8]
    //        +1   +1   +1 +1 = 5🛑
// >>> Code 
function firstNonConsecutive(arr) {

    for (const [idx, val] of arr.entries()) {
        let currentElement = val + 1;
        let nextElement = arr[idx + 1]

        console.log('currentElement', currentElement)
        console.log('nextElement', nextElement)

        if (currentElement + 1 !== nextElement) console.log(nextElement)
    }

    console.log(null)
    return null
}

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }


 //     [1,   2,   3,   4,   6,   7,   8]
    //        +1   +1   +1 +1 = 5🛑

// function firstNonConsecutive(arr) {
//     let iterator = arr[Symbol.iterator]();
//     let nextElementToMatch;
//     // let nextElementCounter = 0;

//     // console.log(iterator.next());
//     // console.log(iterator.next())
//     // console.log(iterator.next())
//     // console.log(iterator.next())
//     // console.log(iterator.next())
//     debugger
//     for (const el of arr) {
//         let currentElement = el;
//         let addOneToCurrentElement = currentElement+1
//         // let nextElementToMatch = arr[el+1]
//         nextElementToMatch = iterator.next().next();
//         // nextElementCounter++

//         console.log('currentElement', currentElement);
//         console.log('addOneToCurrentElement', addOneToCurrentElement);
//         console.log('nextElementToMatch.value', nextElementToMatch.value);

//         debugger
//         // if (currentElement+1 != nextElement.value) console.log(nextElement.value)
//     }

//     // console.log(null)
//     // return null
// }

firstNonConsecutive([1,2,3,4,6,7,8]);
