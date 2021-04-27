 /**
  * @tutorial https://www.codewars.com/kata/52fba66badcd10859f00097e 
  * @function removeVowel 
  * @param {String} str
  * @returns {String}
  */

//1. restate the problem
 //a. contraint
 //b. edge cases
//2. give example 
//3. break down the problem 
//4. solve problem, part of problem
//5. refactor

// [R] epeat
// [E] Example 
// [A] pproach
// [T] est
// [C] ode 
// [O] ptimization

//3. 
//a. declare a function that takes a string and returns something
//b. covert string to array
//c. iterate though array
//d. determine if array contains any vowel
//e. if vowel remove
//f. if no vowel return new "string"

// function disemvowel(str) {
// //  console.log('str', str);
// //  let regex = /[a, e, i, o, u]/;
// //  let newStr = str.toLowerCase(regex).split("")
//  let newStr = str.split("")
// //  console.log(newStr)
// //  console.log('newStr length')
//  let constructStr = ''
 
//  for(let i = 0; i < newStr.length; i++) {
//    let currentChar = newStr[i];
//   //  console.log(newStr);
//     // console.log('newStr[i]', newStr[i])
//     //var vowel = ["a", "e", "i", "o", "u"]
//     // console.log('test test test', newStr[i])

//     // if its a vowel O || 
//     // then we lowercase 

//     debugger
//     // if (currentChar === "A" || currentChar === "E"|| currentChar === "I" || currentChar === "O" || currentChar === "U") {
//     //   // newStr.splice(i, 1)
//     //   newStr.slice(i);
//     // }

//     // if(currentChar === "a" || currentChar === "e"|| currentChar === "i" || currentChar === "o" || currentChar === "u"){
//     //   // Since the o and the u are next to each other when we slice the the o the array element that o sat in is replaced 
//     //   // and moved over which the u sits in. So It doesnt captute it. 
//     //   // newStr.splice(i, 1)

//     //   newStr.slice(i);
//     // } 

//     if (currentChar === "A" || currentChar === "E"|| currentChar === "I" || currentChar === "O" || currentChar === "U" || 
//         currentChar === "a" || !currentChar === "e"|| currentChar === "i" || currentChar === "o" || currentChar === "u") {
//           continue
//         } else {
//           constructStr += currentChar;
//         }
//   } 

// //   return newStr.join("")
//   console.log('newStr', newStr);
//   console.log(newStr.join(""));
//   console.log('constructStr', constructStr)
// }
// }


// if (currentChar === "A" || currentChar === "E"|| currentChar === "I" || currentChar === "O" || currentChar === "U") {
//   newStr.splice(i, 1)
//   // newStr.slice(i);
// }

// if(currentChar === "a" || currentChar === "e"|| currentChar === "i" || currentChar === "o" || currentChar === "u"){
//   // Since the o and the u are next to each other when we slice the the o the array element that o sat in is replaced 
//   // nd moved over which the u sits in. So It doesnt captute it. 
//   newStr.splice(i, 1)
// }

// [Y,u,r]
//  0 1 2

// "No offense but,\nYour writing is among the worst I've ever read"

// splice(start, deleteCount, item1, item2, itemN)  <<<<<<<<

// solution 1 
function disemvowel(str) {
   let newStr = str.split("")
   let constructStr = ''
   
   for(let i = 0; i < newStr.length; i++) {
     let currentChar = newStr[i];
  
      if (currentChar === "A" || currentChar === "E"|| currentChar === "I" || currentChar === "O" || currentChar === "U" || 
          currentChar === "a" || currentChar === "e"|| currentChar === "i" || currentChar === "o" || currentChar === "u") {
            continue
          } else {
            constructStr += currentChar;
          }
    } 
  
    console.log('constructStr', constructStr)
    return constructStr
  }

disemvowel("No offense but,\nYour writing is among the worst I've ever read")
// "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"

// solution 2 with regular expression 
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}



// "Ths wbst s fr lsrs LL!"  