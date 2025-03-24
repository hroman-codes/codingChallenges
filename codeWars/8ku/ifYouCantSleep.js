/**
 * @tutorial https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
 */

Input: 

    Integer non negative ie 3 

Process:

    iterate through n times 
    construct a string '{n} sheep...'

Output:

    "1 sheep...2 sheep...3 sheep..."    

Approach:

    iterative / loop

Edge Case:

    if given 0 then what? 

// Heriberto Solution
var countSheep = function(num) {
    let constructString = ''

    for (let i = 1; i <= num; i++) {
        constructString += `${i} sheep...`
    }

    return constructString
}

// ⏲️ Linear Time complexity: O(n) 
// (n) being num and the amount of times we iterate through num

countSheep(3);


//Simon solution 
var countSheep = function (num){

  let result = "";
  let sheep = " sheep..."
  let count = 1
  
  while(count <= num) {
    result += count
    result = result.concat(sheep)
    count++
  }
  return result
}

countSheep(3);