/**
 * @tutorial https://www.codewars.com/kata/55f8b5b09ec923860200000f/train/javascript
 * @description That given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
 *              You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 *              The kata description does not make it clear that an array of the maximum values is what needs to be returned. I suggest adding some more text to the Description eg:
                The return value will be an array of the maximum value from each of the sliding windows.
 * @function sliding
 * @param {Array} nums - 
 * @param {Number} k - 
 */


// R ✅
// E ✅
//  nums > [1,3,-1,-3,5,3,6,7] 
//  k > 3
//  return [3, 3, 5, 5, 6, 7]

// [1,3,-1,-3,5,3,6,7] 
//  ^ ^


// [-7, -8, 7, 5, 7, 1, 6, 0]
//  ^    ^
// SO for each sliding window grab the max value and dump the value in a seprate Array. 
// A ✅
// Sliding Window Approach 

//     - iterate through the loop 
//         - set up a pointer for the first element 
//         - set up a pointer for the seconf element 
//         - grab the max in between those pointers 
//         - push the a final results array 
// C ✅


function sliding(nums, k) { 

    let arr = []
    let tempArr = []
    // account for an array smaller than the window
    if (nums.length < k) return 'Nah Son'

    // find the max num of the initial window
    for (let i = 0; i < k; i++) {
        let initialWindow = nums[i]

        tempArr.push(initialWindow)
    }

    arr.push(Math.max(...tempArr))
    tempArr = [];


    let p1 = 1;
    let p2 = k;

    // continue until the edge of our window AKA end of our list 
    while(p2 < nums.length) {


        console.log('nums[p1]', nums[p1]);
        console.log('nums[p2]', nums[p2]);

        let testMax = Math.max(...nums.slice(p1, p2 + 1))
        console.log('testMax', testMax)
        arr.push(testMax)

        // slide the window along the list 
        p1++
        p2++
    }

    return arr
}

// T ✅
console.log(sliding([1,3,-1,-3,5,3,6,7], 3)) // should return [3, 3, 5, 5, 6, 7]
// console.log(sliding([-7, -8, 7, 5, 7, 1, 6, 0], 4)) // should return [7, 7, 7, 7, 7]
                            //    🔼_______🔼

// O ✅
// Time complexity of O(n) Linear. 