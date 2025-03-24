/**
 * @tutorial https://www.codewars.com/kata/5875b200d520904a04000003
 * @tutorial https://www.codewars.com/kata/563e320cee5dddcf77000158
 */

// Input

//     (cap, on, wait)
//       10,  5,   5

//     cap = is the amount of passengers allowed on the bus 
//     on =  is the amount of passengers on the bus 
//     wait = is the que

    // Queue Data Structure 

    //  The order is First In First Out (FIFO) 
    //  >>>> https://www.geeksforgeeks.org/queue-data-structure/
    //  [x,x,x,x]

    // .length

// Process

//     - create a variable busCap and fill up an array with cap also grab length 
    // - create variable called canTheyGetOn = 'on' - busCap.length 
    // - if canTheyGetOn is >= wait 
    //     - then return 0 
    // - otherwise return 
    //     - wait - canTheyGetOn

// Methods to consider 

//     Array.fill() 

// Edge Case

// Output 

//     If there is enough space, return 0, 
//     if there isn't return the number of passengers he can't take.

// const tables = { single: Array(a).fill(0), double: Array(b).fill(0) };  


// if(cap >= on + wait) { 
//   return 0
// } return on + wait = cap

function enough(cap, on, wait) {
    let busCap = Array(cap).fill(0)
    let canTheyGetOn = busCap.length - on

    if (canTheyGetOn >= wait) {
        return 0
    } else {
        return wait - canTheyGetOn
    }
}

// console.log(enough(10, 5, 5)) // 0
// console.log(enough(100, 60, 50)) // 10


// Simon >>> Get the mean of an array
// https://stackoverflow.com/questions/2304052/check-if-a-number-has-a-decimal-place-is-a-whole-number

//Example: 
  //Input: [2,2,2,2]
  //Ouput: 2

/*
Breakdown
a. add up all of the integer in array
b. get the average, by dividing the sum by integer count
  if all of the interger are the same return interger value
c. round down average and return 
  Math.floor()
*/

/*
Test Results:
Tests
test
expected 3 to equal 2
Completed in 3ms
Completed in 6ms
*/

/*
Test Results:
Tests
test
expected 1.125 to equal 1
Completed in 3ms
Completed in 7ms
*/


// function getAverage(marks) {
//   let averageMark = marks.reduce((acc, curr) => (acc + curr / marks.length))
//   console.log(averageMark)
//   console.log(Math.floor(averageMark))
//   return Math.floor(averageMark)
// }

// function getAverage(marks) {
//   let averageMark = marks.reduce((acc, curr) => Math.floor(acc + curr / marks.length))
  
//   let totalMark = marks.reduce((acc, curr) => acc + curr) //15
//   // console.log(totalMark)
//   let markAverage = totalMark/marks.length
//   // console.log(totalMarkAverage) 
//   return Math.floor(markAverage)
// }

function getAverage(marks) {
  debugger
  let averageMark = marks.reduce((acc, curr) => {
    debugger
    return Math.floor(acc + curr / marks.length)
  })
  return averageMark
}

//code war solution:
function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}


// console.log(getAverage([1,2,3,4,5,])) //the answer should be 3 they wrote 3. wtf?!
// console.log(getAverage([1,1,1,1,1,1,1,2])) // 1
console.log(getAverage([1,2,3,4,5,])) //3

