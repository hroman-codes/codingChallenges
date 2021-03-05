/**
 * @tutorial https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
 * @function warnTheSheep
 * @param {Array} queue
 * @returns {String} - "Pls go away and stop eating my sheep" || "Oi! Sheep number N! You are about to be eaten by a wolf!"
 */

// >>> Example 

    // Input:

    //     ["sheep", "sheep", "sheep", "wolf", "sheep"]
    //         X       X         X        ✅ >>>> 1
    
    // Output: 

    //     warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"

    //     warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"

// >>> Code 
// function warnTheSheep(queue) {

//     // create an increment tracker variable to identify where in the que I am and set it to the array.length
//     // iterate through the array
//         // decrement tracker variable
//         //TODO: if the currentEl is === wolf && and not sitting at the end of the array
//             //TODO: return "Oi! Sheep number ${tracker variable --}! You are about to be eaten by a wolf!"
//         //TODO: else "Pls go away and stop eating my sheep"

//     // let tracker = queue[0] = queue.length
//     debugger
//     let tracker = queue.length
//     // let tracker = 0;
//     console.log('tracker', tracker)

//     // debugger
//     for (let i = 0; i < queue.length; i++) {
//         let currentEl = queue[i]

//         if (currentEl === 'wolf' && currentEl != queue.length - 1) {
//             console.log(currentEl)
//             // console.log(`Oi! Sheep number ${tracker variable --}! You are about to be eaten by a wolf!`)
//             console.log(`Oi! Sheep number ${tracker}! You are about to be eaten by a wolf!`)
//         } else {
//             console.log('currentEl >>', currentEl)
//             console.log('tracker >>', tracker)
//             tracker --;
//         }
//     }

//     console.log('tracker', tracker);
// }

// redo the function and start the loop at the end of the Array
// decremnt down 
// if the current el is a sheep 
//     increase the counter 
// if the current el is a wolf 
//     spit out the sentecne with the ${current el} and ${tracker -1}

// solution 1 
// function warnTheSheep(queue) {
//     let tracker = 0;

//     for (let idx = queue.length - 1; idx >= 0; idx--) {
//         let currentEl = queue[idx];

//         if (currentEl === 'sheep') {
//             tracker++ 
//         } else if (currentEl === 'wolf' && idx === queue.length - 1) {
//             console.log(`Pls go away and stop eating my sheep`);
//             return `Pls go away and stop eating my sheep`
//         } else {
//             console.log(`Oi! Sheep number ${tracker}! You are about to be eaten by a wolf!`)
//             return `Oi! Sheep number ${tracker}! You are about to be eaten by a wolf!`
//         }
//     }
// }

// solution 2 
function warnTheSheep(queue) {
    // const position = queue.reverse();
    const position = queue.reverse().indexOf('wolf');
    console.log('position >>>', position);

    console.log(position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`)
}

warnTheSheep(["sheep", "sheep","sheep", "wolf", "sheep"]);
// warnTheSheep(["sheep", "sheep", "wolf"]); // "Pls go away and stop eating my sheep"

// >>> Optimization 
// ⏲️ Time Complexity O(n) Linear 