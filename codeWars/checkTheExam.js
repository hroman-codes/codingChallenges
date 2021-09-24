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

//     >>> ["a", "a", "b", "b"] Answer Key 
            
//     >>> ["a", "c", "b", "d"] Student Answers
//           ^

// Process
    // create a helper function to handle to comparing 

    // - create variables above 
    // - run firstLoop 
    //     - grab currentElement
    //         - if currentElement is empty give 0 points 
    //         - if currentElement === answerOne || 
    //              currentElement === answerTwo || 
    //              currentElement === answerThree || 
    //              currentElement === answerFour
    //             >>> + 4 points
    //           else 
    //             >>> -1 points
    // return answer

function checkExam(array1, array2) {
    let total = 0;
    let = answerOne = array1[0]
    let = answerTwo = array1[1]
    let = answerThree = array1[2]
    let = answerFour = array1[3]
    console.log(answerOne, answerTwo, answerThree, answerFour)

    for (const currentElement of array1) {
        console.log(currentElement)

        // if (currentElement === '') total = 0
        if (currentElement === answerOne ||
            currentElement === answerTwo ||
            currentElement === answerThree ||
            currentElement === answerFour) {
                total += 4
            } else {
                total +- 1
            }
    }

    return total
}

// Test
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) // 6

// Complexity