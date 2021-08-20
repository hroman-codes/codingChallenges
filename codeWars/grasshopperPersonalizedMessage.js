/**
 * @tutorial https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
 * @param {String} name
 * @param {String} owner
 */

function greet(name, owner) {
    // if name equals owner return 'Hello boss'
    // otherwise return 'Hello guest'

    if (name === owner) return 'Hello boss'

    return 'Hello guest'
}