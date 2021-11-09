/**
 * @description Write a function called sumZero which accepts a sorted array of integers. 
 *              The function should find the first pair where the sum is 0. 
 *              Return an array that includes both values that sum to zero or undifined if a pair
 *              does not exist. 
 * @function sumZero
 * @param {Array} arr
 * @returns {Array}  
 */

// 1st solution brute force
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// Complexity
⏲️ O(n)2 Quadratic Time Complexity
🛰 O(1) constant time 

// 2nd Solution 
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
       let sum = arr[left] + arr[right];
       if (sum === 0) {
           return [arr[left], arr[right]]
       } else if (sum > 0) {
           right --;
       } else {
           left ++;
       }
    }
}

// Complexity
⏲️ O(n) Linear Time Complexity
🛰 O(1) constant time 

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]