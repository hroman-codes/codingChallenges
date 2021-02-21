// [R]epeat
/**
 * @tutorial https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript
 * @description - you take your some to the forest to see the mon 
 * @funtion monkeyCount
 * @param {Integer} n 
 * @returns {Array} - all numbers up to and including the number n, but exluding zero. 
 */

// [E]xample 

//     monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
// [A]pproach - iterative approach 

// [C]ode 

 // creat variable that holds an empty array
 // loop up to n
    // while looping push n to the stack
// return the stack once loops end

function monkeyCount(n) {
    let stack = [];

    for (let i = 1; i <= n; i++) {
        console.log(i)
        stack.push(i);
    }

    console.log(stack)
    return stack 
}

// [T]est 
monkeyCount(10) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// [O]ptimization

⏲️ O(n) Linear Time Complexity 