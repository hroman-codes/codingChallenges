/**
 * @tutorial https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript
 */

// Input: Take in an Array of Strings 

// Process: sort the array from shortest to longest based on the length of each String. 

// Example: 

//     ["Telescopes", "Glasses", "Eyes", "Monocles"]
//         ^ check length on each element 
//         ie 10 
    
//     - create a container that holds the new sorted array >> newSortedArray
//     - create another container for current longest string >> tracker
//     - LOGIC:    
//         - if the length of the current element is greater than tracker 
//             - push() the element 
//         - if the length is short than 
//             - unShift() 

// function sortByLength(array) {
//     let newSortedArray = [];
//     let tracker = 0;

//     debugger
//     for (let i = 0; i < array.length; i++) {
//         let currentEl = array[i];

//         debugger
//         if (currentEl.length > tracker) {
//             newSortedArray.push(currentEl)
//             tracker = currentEl.length
//         } else {
//             newSortedArray.unshift(currentEl);
//             tracker = currentEl.length
//         }
//     }

//     console.log('newSortedArray', newSortedArray);
//     console.log('tracker', tracker);

// //splice(start, deleteCount, item1)

// }

// sortByLength(["Beg", "Life", "I", "To"]) // ["I", "To", "Beg", "Life"]
    
// tracker = 1
// currentEl = 'to' <<< length 2

// if currentEl > tracker && currentEl < 

// newSortedArray = ["I", "Beg", "Life",]

// //3rd iteration
// newSortedArr[i]

// Use an Object to store and keep track

// array = ["Beg", "Life", "I", "To"]
// newSortedArray = {}

// loop >>> ["Beg", "Life", "I", "To"] 
//             ^

// check length

//             beg.length = 3

// Add property to newSortedArray object        
//     add key >> beg 
//     add value >> newSortedArray[beg.length]


// Example 
// let result = newSortedArray["beg"]  

// newSortedArray = {
//     'beg': 3,
//     'life': 4,
//     'I': 1,
//     'To': 2
// }

// sort the obejct 
// then print out the keys



// solution 1 imperative approach
function sortByLength(array) {
    // create an object to track length of strings 
    let tracker = {};

    // loop through the array 
    for (let i = 0; i < array.length; i++) {
        // absract element and length in variables 
        let currentEl = array[i];
        let currentElLength = array[i].length;

        // as we loop through each element add its value and length to the object 
        tracker[currentEl] = currentElLength;
    }

    // sort the object in ascending order { Beg: 3, Life: 4, I: 1, To: 2 }
    const sortedObject = Object.entries(tracker)
    .sort(([,a], [,b]) => {
        return a-b
    }) // sortedObject >> multi-dimensional array >>> [ [ 'I', 1 ], [ 'To', 2 ], [ 'Beg', 3 ], [ 'Life', 4 ] ]

    // reduce to flatten the multi-dimensional array
    .reduce((r, [k, v]) => ({ ...r, [k]: v}), {}) // [ 'I', 'To', 'Beg', 'Life' ]

    console.log('tracker >>', tracker);
    console.log('sortedObject >>', sortedObject);
    console.log('final array >>', Object.keys(sortedObject));

    // return just the keys in an array 
    return Object.keys(sortedObject);

}

⏲️ time complexity: worst case is O(n log(n)) because the tim sort method uses
the insertion sort and mergesort algos.

⏲️ time complexity: best case in O(N) linear 

sortByLength(["Beg", "Life", "I", "To"]) // ["I", "To", "Beg", "Life"]

// solution 2 delcarative approach
function sortByLength(array) {
    console.log(array.sort((a, b) => a.length - b.length));
    return array.sort((a, b) => a.length - b.length)
}

⏲️ time complexity: worst case is O(n log(n)) because the tim sort method uses
the insertion sort and mergesort algos.

sortByLength(["Beg", "Life", "I", "To"]) // ["I", "To", "Beg", "Life"]
