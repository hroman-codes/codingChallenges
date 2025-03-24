/**
 * @tutorial https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript
 * @function greet 
 * @param {String} name 
 * @returns {String} - returns the correct string
 */

function greet(name) {
    console.log('Hello, ' + name + '!')
    
    if (name === 'Jhonny') {
        console.log('Hello, my love!')
        return 'Hello, my love!'
    }
    return 'Hello, ' + name + '!';
}


greet('heriberto')
greet('Jhonny')

⏲️ O(1) constant time complexity 
🛰 O(1) constant space complexity 