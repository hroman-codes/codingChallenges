/**
 * @tutorial https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript
 */

// Input 

//     >> an array parts=  ["tail", "body", "head"]
//                             ^              ^^
//                            [0]     [1]     [2]
// Process 

    // methods to consider:

        // - push()
        // - pop()
        // - shift()
        // - unshift()

    // logic without looping: 

    //     - create an empty finalAssembly = []
    //     - create variable elOne = parts[2]
    //     - create variabel elTwo = parts[1]
    //     - create variable elThree = parts[0]  

    //     - assign finalAssembly = [elOne, elTwo, elThree]

    // logic with looping: 

    //     - create an empty container finalAssembly[]
    //     - iterate through the array 
    //         - grab the currentEl 
    //         - push the currentEl to finalAssembly[]
    //     - test...


        
// Edge Case 

//     - is it possible that an array length is 4 vs 3. 
//     - lets assume that [1] will always remain at [1] ... in place
//     - 

// Output 

//     >> ["head", "body", "tail"]


function fixTheMeerkat(arr) {

    >> an array parts=  ["tail", "body", "head"]
                           ^              ^^
                          [0]     [1]     [2]

    let finalAssembly = []
    let elOne = arr[2]
    let elTwo = arr[1]
    let elThree = arr[0]

    finalAssembly = [elOne, elTwo, elThree]

    console.log(finalAssembly)

}

fixTheMeerkat(["tail", "body", "head"]); // ["head", "body", "tail"]

// Optimization









// function fixTheMeerkat(arr) {

//     let finalAssembly = []

//     for (let i = 0; i < arr.length; i++) {
//         let currentEl = arr[i]

//         finalAssembly.unshift(currentEl)
//     }

//     console.log(finalAssembly);
// }

// fixTheMeerkat(["tail", "body", "head"]); // ["head", "body", "tail"]

// Optimization

// function fixTheMeerkat(arr) {
//   let finalAssembly = [];

//   arr.forEach(function(part){
//     console.log('part>>', part)
//     finalAssembly.unshift(part)
//   })

//   return finalAssembly
// }

// fixTheMeerkat(["tail", "body", "head"]); // ["head", "body", "tail"]

// Optimization





// HW 

 - when do we not define a DS to an empty variable
 - Optimization
 - for loop vs forEach vs for...of