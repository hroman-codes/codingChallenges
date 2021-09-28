/**
 * @tutorial https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript
 * @description The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. 
 *              The second one contains a student's submitted answers.
 *              The two arrays are not empty and are the same length. 
 *              
 *              Return the score for this array of answers, giving +4 for each correct answer, -1 
 *              for each incorrect answer, and +0 for each blank answer, represented as an empty string 
 *              (in C the space character is used).
 * 
 *              If the score < 0, return 0.
 * @function checkExam
 * @param {Array} array1
 * @param {Array} array2
 * @returns {Number}
 */

// Input

//     total = 
//     answerOne = array1[0]
//     answerTwo = array1[1]
//     answerThree = array1[2]
//     answerFour = array1[3]
//     correctAnswer = 4
//     wrongAnswer = -1
//     emptyAnswer = 0

//     >> where do I inject logic to compare? 

    // >>> ["a", "a", "b", "b"] Answer Key
    //       0    1    2    3 
    //                 ^     
    // >>> ["a", "c", "b", "d"] Student Answers
    //       0    1    2    3
    //                      ^

// Process

//     - run 1st loop 
//         - grab currentElFirstLoop 
//         - run second loop
//             - grab currentElSecondLoop
//             - if the currentIndex of the first loop is the same as the currentIndex of the second loop 
//                 - if currentElFirstLoop is the same as currentElSecondLoop
//                     increase total by 4 points
//                 - else 
//                     decrease toal by - 1 point 
//             else 
//                 continue
//     - return total

function checkExam(array1, array2) {
    let total = 0;

    for (let i = 0; i < array1.length; i++) {
        let currentElFirstLoop = array1[i];

        for (let j = 0; j < array2.length; j++) {
            let currentElSecondLoop = array2[j];

            if (i === j) {
                if (currentElFirstLoop === currentElSecondLoop) {
                    total += 4 
                } else if (currentElSecondLoop === '') {
                    total += 0
                } else {
                    total--
                }
            } else {
                continue
            }

        }
    }

    return (total < 0) ? total = 0 : total
}

// Test
// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) // 6
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])) // 7
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])) // 0

// Complexity
⏲️ Time Complexity = quadratic O(n2) due to the nested loops 
🛰 Space Complexity = Linear O(n) due to line 57 and 60 where array1 and array2 grows in a linear format, my best educated guess 🤔 

