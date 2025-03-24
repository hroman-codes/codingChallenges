/**
 * @tutorial https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript
 */

// Input: 

//     A string 
    
//         "The greatest victory is that which requires no battle"

//         ["The", 'greatest', 'victory']
//                                 ^ push to stack

//         use a stack as the DS >>> ['victory', 'greatest', "The"]

// Process: 

//     - create an empty array stack
//     - we need to take the string and split it up to an array
//     - iterate backwards through the array stating from the end
//     - grab each Element
//     - push element to empty stack 
//     - once loop ends take the stack and join them toghter to construct a string 
//     - return string

// Output:

//     ['victory', 'greatest', "The"]

// EdgeCase: N/A

function reverseWords(str) {
    let stack = []
    let convertString = str.split(' ');

    for (let i = convertString.length - 1; i >= 0; i--) {
        let currentEl = convertString[i]
        
        stack.push(currentEl);
    }

    console.log(stack.join(' '))
    return stack.join(' ');
}

reverseWords("The greatest victory is that which requires no battle")