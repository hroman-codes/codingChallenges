/**
 * @tutorial https://www.codewars.com/kata/5388f0e00b24c56git35e000fc6
 */

// Input

//     >>> [1, 2];

// Process 

//     I would like to be able to pass an array with two elements to my swapValues function to swap the values. 
//     However it appears that the values aren't changing.
//     Can you figure out what's wrong here? 

//     Things to consider:

//         - missing params 
//         - why is call is chained to slice? 
//         - there is no return statement 

//     Output from Codewars test case
//     var arr = [1, 2] => arr[0] = 2 and arr[1] = 1
    //Failed swapping numbers: expected 1(arr[0]) to equal 2

// Output 


//  function swapValues(arr, number, string) {
//     var arrCopy = arr; // [ 1, 2 ]
//     console.log(arrCopy[0]) // 1

//     var args = Array.prototype.slice.call(arguments);
//     console.log('args', args) // args [ [ 1, 2 ]]
//                                      //    0   
//                                      //   0 1  

//     var temp = args[0]; 
//     console.log('temp', temp); // temp [ 1, 2 ]

//     console.log('args[1]', args[1]) // undefinded
//     console.log(args[0][0]) //1
//     console.log(args[0][1]) //2

//     args[0][0] = args[0][1]; // 2
//     console.log(args[0][0]) // 2
//     console.log(temp) // [ 2, 2 ]

//     console.log(args[0][1]) ??
//     temp[0][1] = 1; //1
//     // args[1] = temp;

//     console.log(temp) // [ 2, 2 ]
//     // return temp
// }

function swapValues(arr, number, string) {
    const args = Array.prototype.slice.call(arguments);
    console.log('args', args) // args [ [ 1, 2 ] ]
                                     //    0   
                                     //   0 1  

    var temp = args[0]; // [ 1, 2 ]
    let elOne = temp[0];
    let elTwo = temp[1];
    console.log(elOne, elTwo)

    args[0][0] = elTwo
    args[0][1] = elOne
    
}


arr.reverse();




// console.log(swapValues(arr[0], 2, "Failed swapping numbers"))
// var arr = [1,2] 

// It wants you to swap the index of the items in the list. So if the input is [1,2], it wants the output to be [2,1]
// You created a new array instead of swapping the values of the original array. 
// In this case, args[0] and args[1] still have the same values.