/**
 * @tutorial https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
 * @function arrayMadness
 */

//Edge cases: if a = b return false?, what if there are floating point numbers 
                            
//Example: arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

// arrayMadness([4, 5, 6], [1, 2, 3])
//                                 ^
//             i < arguments[a].length

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// https: //stackoverflow.com/questions/37167380/in-if-statement-undefined-equals-with-false

/*
Breakdown
i. create container for sum of a and sum of b
a. iterate through array a, square each element and return total sum
  for(), Math.pow(), i ** 2, 
b.iterate through array b, cube each element and return total sum
  i ** 3, 
c. compare array a to b
  if(), 
d. if array a is greater than array b return true, else return false
*/

/*
Refactor:
array.join(), arrray.concat(), arguments.length
*/

// i.e 
//             ([4, 5, 6], [1, 2, 3])
//             ([4, 5, 6, 1, 2, 3])
//               ^

// ([4, 5, 6], [1, 2, 3])

function arrayMadness(a, b) {
    const joinedArray = a.concat(b);
    let sumA = 0
    let sumB = 0

    for (let i = 0; i < joinedArray.length; i++) {
        let currentNum = joinedArray[i]

        if (i < a.length) {
            sumA += currentNum ** 2
        } else {
            sumB += currentNum ** 3
        }       
    }

    if (sumA > sumB) {
        return true
    } else {
        return false
    }
}

// console.log(arrayMadness([4, 5, 6], [1, 2, 3])) //77, 36
console.log(arrayMadness([4,5,6],[3,4,5])) // false

// function arrayMadness(a, b) {
//   let sumA = 0
//   let sumB = 0

//   for(let i = 0; i < a.length; i++) {
//     const powA = a[i] ** 2 
//     sumA += powA
//   }

//   for(let j = 0; j < b.length; j++) {
//     const powB = b[j] ** 3 
//     sumB += powB
//   }

//  if(sumA > sumB) {
//    return true
//  } else {
//    return false
//  }
 
// }

// console.log(arrayMadness([4, 5, 6], [1, 2, 3])) //true
// console.log(arrayMadness([4,5,6],[3,4,5])) // false





