/**
 * @tutorial https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
 * @function betterThanAverage
 * @param {Array} classPoints
 * @param {Number} yourPoints
 * @returns {Boolean} 
 */

// >>> Example

    // Input: 

    //     classPoints = [2, 3]
    //     yourPoints  = 5

    // Process: 

    //     find the average of the class points 

    //         2 * 3 = 6 / total amount of scores aka Array.length = 3

    //     The compare is yourPoints > classPointsScore ? true : false 

    // Output: 

    //     false 

// >>> Code 
function betterThanAverage(classPoints, yourPoints) {
    let classPointsScore = classPoints.reduce((a, b) => a + b) / classPoints.length;
    console.log(classPointsScore)

    console.log(yourPoints > classPointsScore ? true : false);
}

// betterThanAverage([2, 3], 5)
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)

// >>> Optimization 
⏲️ Time Complexity of O(n) 