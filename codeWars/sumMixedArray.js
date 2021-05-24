/**
 * @tutorial https://www.codewars.com/kata/57eaeb9578748ff92a000009
 * @function sumMix
 */

Input: 

    - An array of String and Numbers 

Process: 

    arr= [9, 3, 7, 3] .reduce() || .sum()
    ie: [9, 3, 7, 3]
                  ^
         
    - iterate through the array
    - do a check if currentEl is a num 
        - then push to new container 
    - otherwise 
        - need to convert currentEl to num 
        - then push to new Container 
    - Once we finsh the loop then sum up the newContainer Array.
    
Refactored Version:

    - this would consist of removing the IF statement 
    - apply a Number() || parseInt directly 
    - ...

Output:

    Return sum Number 

// solution #1
function sumMix(x) {
    let newContainer = []
    
    for (let i = 0; i < x.length; i++) {   // O(n)
        let currentEl = x[i];
        
        if (typeof currentEl === 'string') {
            newContainer.push(Number(currentEl));
        } else {
            newContainer.push(currentEl);
        }
    }
    
    return newContainer.reduce((a,b) => a + b) // O(n)
}

// Optimization:
⏲️ Time Complexity Linear N is the array O(n)

// Solution #2 
function sumMix(x) {

    return x.map(element => Number(element)).reduce((a, b) => a + b); // O(n) //O(n)
}

// Optimization:
⏲️ Time Complexity Linear N is the array O(n)

// Test
sumMix([9, 3, '7', '3'])