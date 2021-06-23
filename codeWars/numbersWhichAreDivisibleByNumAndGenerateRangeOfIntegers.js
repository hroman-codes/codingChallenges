/**
 * @tutorial https://www.codewars.com/kata/55edaba99da3a9c84000003b
 * @param Array numbers - a list of #s
 * @param Number divisor - is the divisor
 */

// Input 

//     [1, 2, 3, 4, 5, 6], 2 // [2, 4, 6]
//                     ^
//     [0,1,2,3,4,5,6], 4 // [0,4]
//      ^
//     [1,3,5], 2 //[]
//          ^
//     [], 2 // ???

// Methods to consider

//     - % modulus 
//     - Array.filter() // returns a new one
//     - forLoop 
//     - forEach()
//     - splice()

// Process 

//     - create a variable called results 
//     - iterate through the list 
//         - if currentNum % divisor === 0
//             - take currentNum and push to results
//     - return results

    
// Edge Case 

//     - if there is no # that is divisiable then return []
//     - what happens if the Array is empty???

// Output 

//     - returns all numbers which are divisible by the given divisor []

//num.splice(start, deleteCount)

function divisibleBy(numbers, divisor) {
    let results = [];

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];

        if (currentNum % divisor === 0) {
            results.push(currentNum)
        }
    }

    return numbers;
}

// Optimization
FOCL = Fuction calls to outside + Operations + Comparisons + Loops

currentNum % divisor === 0 / n(Comparisons)
for Loop                   / n(loop)

                           n + n 
                            
                    O(n) Linear ⏲️ complexity 


function divisibleBy(numbers, divisor) {
   return numbers.filter(num => num % divisor === 0) // O(n) ???
}

// console.log(divisibleBy([0,1,2,3,4,5,6], 4)) // [0,4]
// console.log(divisibleBy([1,3,5], 2)) // []

/**
 * @tutorial https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
 */

// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// generateRange(2, 9, 2) // should return array of [2,4,6,8,10] => [2, 4, 6, 8]


//min: min number in array
//max: max number in array
//step: increment range by step value

//edge cases: 
//what if step is 0, what do we  return or how to we step?
//range does not have to include max, if max is oustide of step sequence

/*
breakdown:
  //no need to iterate
  //i. while(), for()
  a. take min and increase by step value
     //nextValue = min + step
  b. increase min by step all the way to max, if step does exceed do not include max 
    //nextValue = min + step
    //result.push(nextValue)
  c. return all of the range in min through max
*/

function generateRange(min, max, step) {
  let range = []

  while(min <= max) { //4 < 10
    range.push(min) //2, 4
    min += step //2 + 2 = 4
  }

  return range;
}

console.log(generateRange(2, 10, 2)) //[2,4,6,8,10]
