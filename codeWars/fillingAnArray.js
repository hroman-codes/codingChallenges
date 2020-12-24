// [R]epeat 
/**
 * @description write a function that produces an array with the numbers 0 to N-1 in it
 * @description Kata: https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
 * @param {number} 
 * @returns {array} with N amount of numbersfrom param >>>>>>> N
 */

// [E]xample 
// i.e 

//  >>> arr(5) 
//  >>> [0,1,2,3,4]

//  we get 5 

//  then count from 1 2 3 4 5 
//           >>>>>> 0 1 2 3 4 
//  iterate through   

// [A]pproach
//     this will be an iterative approach

// [C]code

//     [x] as a default param 
//         - if the param is undefined return an empty array
//     [x] create an empty array to store the final result of N numbers
//     [x] write a function called N
//     [] Grab the N and loop through it
//     [] N will represent the condition in the loop 
//     [] for every number we pass push to the empty array 
//     [] return array store

// [T]
// [O]


const arr = N => {
    console.log('this is N >>>', N);

    let arrStore = []

    if (N === undefined) return []

    for (let i = 0; i < N; i++) {
        console.log('i >>>', i);
        arrStore.push(i)
    }

    return arrStore
}

console.log(arr(5))