// Input

//     - A string of numbers 
    
//                 '80123467839' << this is a valid ID, starts with the #8 and length of 11. 
//            if #8 ^
//    start counter 1 
//                 '80123467939'
//                  ^
//                   ^
//                 [8, 0, 1, ...]
    
// Edge Cases 

//     - In order for the ID to be valid it must start with the #8
//     - must have length of 11 chars

// Process 

//     - create an empty array tag = []
//     - create a variable to count how many ID's we have howManyId = 0
//     - Iterate through the string 
//         - if the currentNum is 8 
//         - start the second pointer on currentEl and run loop up to the length of 11
//             - push currentEl to tag 
//         - if the length of array Tag is 11 increment howManyID
//         - then empty out the tag Array.
//     - return howManyID 

// Output
    
//         - an integer howManyID

function numOfIds(pool) {
    // Write your code here
    
    let tag = []
    let howManyID = 0
    
    debugger
    for (let i = 0; i < pool.length; i++) {
        let currentEl = pool[i];
        let nextEl = pool[i + 1]
        
        debugger
        if (currentEl === '8' && nextEl != '8') {
            tag.push(currentEl)
            for (let j = currentEl; j < pool.length; j++) {
                let secondPointer = pool[j];
                console.log(secondPointer);

                tag.push(secondPointer)
                if (tag.length === 11) {
                    howManyID++
                    break
                }
            }
        }

        tag = []
    }
    
    console.log(howManyID)
    return howManyID;

}

// console.log(numOfIds('81111111111'))
// console.log(numOfIds('80123456789'))
// console.log(numOfIds('888888555555555555555')) // should return 1
console.log(numOfIds('888888888888888888888888888888')) // should return 2