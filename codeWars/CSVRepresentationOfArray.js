[R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript
 * @description Create a function that returns the CSV representation of a two-dimensional numeric array.
 * @function toCsvText
 * @param {array} array - a two-dimensional array
 * @returns {string} - a string representation of the two-dimensional array
 */

 [E]xample 

    >>> input [ [ 0, 1, 2, 3, 4 ],  <<< we have to go through each array and append it to a string 
                [ 10,11,12,13,14 ], <<< once we hit the end of the the array which is the first element [0] we add a new line char /n
                [ 20,21,22,23,24 ],
                [ 30,31,32,33,34 ]
              ] 


    >>> Outputs     '0,1,2,3,4\n'
                    +'10,11,12,13,14\n'
                    +'20,21,22,23,24\n'
                    +'30,31,32,33,34'


            >>> input [ [ 0, 1, 2, 3, 4 ],
  >>> iterate through     ^
                          we get to pointer 0
                          we strigify it
                          and append it to a variable 

            >>> input [ [ 0, 1, 2, 3, 4 ],
  >>> iterate through                 ^             
                        when we get to the end of the array 
                        we strigify it 
                        append it to the variable
                       👇 bounce out the inner loop👇
                        then append a new line char /n
                      ] 

[A]pproach - my first attempt will be an iterative where the first loop will handle the indexes
             and the second loop will handle iterating through the arrays and each num and applying the logic

[C]ode 

    create a variable to store the construct string 
    create the first loop to handle the outer array
      create a second for loop
            - grab the current index store it in a variable
            - take the current index strigify it
            - append it to the variable 
      - when we get out of the inner loop add a new line char /n + 
    return the construct string 

// solution #1 
function toCsvText(array) {
  let finalString = '';

  for (let i = 0; i < array.length; i++) {
    let arrayEl = array[i];

    for (let j = 0; j < arrayEl.length; j++) {
      let currentNum = arrayEl[j];

      if (j === (arrayEl.length -1)) {
        finalString += `${currentNum}`
      } else {
        finalString += `${currentNum},`
      }
    }

    if (i === (array.length -1)) {
      break
    } else {
      finalString += '\n'
    }
  }

  console.log(finalString)
  return finalString
}

// solution #2 
function toCsvText(array) {
  return array.join('\n');
}

// [T]est
  toCsvText([  [ 0, 1, 2, 3, 45 ],
               [ 10,11,12,13,14 ],
               [ 20,21,22,23,24 ],
               [ 30,31,32,33,34 ]
            ] )

// should return 
// '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'

[O]ptimization

  solution #1
  
  ⏲️ Time Complexity (FOCLP): Function call to outside + Operation + comparisons + Loops + Pointer reference

  (A)n finalString            operation
  (B)  finalString            operation
  (C)n for loop 1             loop
  (D)n for loop 2             loop 

  List out            n (A + C) + n(D) + B
  Group                 nK1       nK2    K3
  drop constant          n         n     3
  group                        n2
  Result                ⏲️ O(n)2 quadratic time complexity where the time grows exponentioaly base on the input size

  🛰 Space Complexity: Input Size + Auxiliary Space

  (A) array         input size              4bytes
  (B) toCsvText     function Aux space      4bytes
   Result           🛰 O(1) constant space complexity. No other memory is utilized. 

