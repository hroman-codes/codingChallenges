/**
 * @tutorial https://www.algoexpert.io/questions/Two%20Number%20Sum
 * @function twoNumberSum
 * @param {Array, integer} 
 * @returns {integer}
 */

function twoNumberSum(array, targetSum) {
    let arr = array;
      let target = targetSum;
      let pairedNumbers = [];
      
      
      for (let i = 0; i < array.length; i++) {
          let firstPointer = array[i];
                  
          for (let j = i + 1; j < array.length; j++) {
              let secondPointer = array[j];
              let addTwoNumbers = (firstPointer + secondPointer)
              
              if (addTwoNumbers === target) {				
                  pairedNumbers.push(firstPointer, secondPointer);
              }
          }
      }
              
      console.log(pairedNumbers)
      return pairedNumbers
  }

  twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)