[R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
 * @description - Make a simple function called greet that returns the most-famous "hello world!".
 * @function greet 
 * @returns {string} - a string that says 'hello world'
 */

[E]xample

    Func greet when called 
        return >>>'Hello world'

[Code]

    // stub out the function called greet
    // return a string with 'Hello World'

solution 1
function greet() {
    console.log('hello world')
    return 'hello world'
}

// solution 2
const greet = () => console.log('hello world')

// [T]est 

    greet()

[O]ptimization

    ⏲️ Time complexity is constant O(1)
    🛰 Space complexity is constant O(1)

