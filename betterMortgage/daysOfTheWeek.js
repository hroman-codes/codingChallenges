// [R]epeat 
/**
 * @description Days of the week are represented as three-letter strings ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")
 *              Write a function solution that, given S representation the day of the week and an integer K (between 0 and 500, inclusive)
 *              returns the day of the week that is K days later. 
 * @function solution
 * @param {string} S - "Wed"
 * @param {integer} K - 2
 * @returns - return the day of the week K days later
 */

// [E]xample 

//     Given S = 'Wed'
//     Given K = 2

//    This is the set data >>>>         "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
//    We should land at                                ✅
//    Then move 2 slots to the right                                  ✅


//    Store the days in an array 
//    So this means I need to find the index of S 
//    Save that index so I can use it as the starting point of the loop 
//    then iterate through the rest of the days K times 
//    then return the date 


// [C]ode 

    // create an array and store the days of the week
    // find the day of the week for S 
    // Store the index of the day in a variable 
    // Loop through but start the loop from the index we found
    // End the loop at K times 
    // Return the day 

// function solutions(S, K) {
//     let daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//     let findTheDay = (element) => element === S;
//     let findTheDayIndex = daysOfTheWeek.findIndex(findTheDay);

//     for (let i = findTheDayIndex; i <= K; i++) {
//         // console.log(i)
//         // console.log(daysOfTheWeek[i])
//         // console.log(daysOfTheWeek.length - 1)

//         // when we reach the end of the array do something?? reset i back to 0??
//         if (i === daysOfTheWeek.length - 1){
//             i = 0
//             console.log(daysOfTheWeek[i])
//         }
//     }
// }

function solutions(S,K) {
    const daysArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const days = {
        "Mon": 0,
        "Tue": 1,
        "Wed": 2,
        "Thu": 3,
        "Fri": 4,
        "Sat": 5,
        "Sun": 6
    }
    const sIndex = days[S]
    const offset = K % 7;
    console.log('offset', offset);

    console.log(sIndex + offset < 7 ? daysArr[sIndex + offset]: daysArr[Math.abs(7 - sIndex - offset)])
    return sIndex + offset < 7 ? daysArr[sIndex + offset]: daysArr[Math.abs(7 - sIndex - offset)]
}

solutions("Wed", 2); // should return Friday 