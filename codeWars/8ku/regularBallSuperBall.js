/**
 * @tutorial https://www.codewars.com/kata/53f0f358b9cb376eca001079
 * @function Ball
 * @param {Constructor} ballType
 * @returns {String}
 */

var Ball = class {
    constructor(type = 'regular') {
        this.ballType = type
    }
}

console.log(new Ball().ballType, "super")