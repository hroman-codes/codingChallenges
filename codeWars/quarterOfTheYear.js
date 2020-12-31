// [R]epeat
/**
 * @function quarterOf 
 * @description given a month as an integer from 1 to 12 return to which quarter of the year it belongs as an integer number
 * @param {integer} month - a number from 1 to 12
 * @returns {integer} - a number representing the quarter the month sits
 */

//  [E]xample

//     Quarter 1   Month#   Quarter 2  Month#   Quarter 3  Month#   Quarter 4   Month#
//     Jan         1        April      4        July       7        October     10
//     Feb         2        May        5        August     8        November    11
//     March       3        June       6        September  9        December    12

    
//     if I get the number 6 I would need to look up which quarter June falls under. 

//     how do I represent this in a data structure? 

//     look up table/obejct ?

// [A]pproach

//     - my first approach will be a non iterative by using a look up table one object
//     - my second approach will be an interative one by looping through the array of objects  

// [C]ode 

    //TODO: figure out the type of data structure I am going to use
    //TODO: build out the DS
    //TODO: run a test on the first Data Structure by accessing the data I want on both test DS
    //TODO: look through the monthsOfTheYear keys loop
    //TODO: then a second loop to look through those to see if 6 is included
    //TODO: if its its included return the key 

// [T]est quarterOf(12)

// [O]ptimization

    ⏲️ Time Complexity (FOCLP): operations + comparisons + loops + pointer reference + function call to outside 

        A 
        n B forloop
        

    // 🛰 Space Complexity (FAVD): variables + data structures + allocations + function call 
                        

const quarterOf = (month) => {
    
    let monthsOfTheYear = {
        '1': [1, 2, 3],
        '2': [4, 5, 6],
        '3': [7, 8, 9],
        '4': [10, 11, 12]
    }

    for (let prop in monthsOfTheYear) {
        for (let groupOfMonths of prop) {
            let months = monthsOfTheYear[groupOfMonths];

            if (month === months[0] || month === months[1] || month === months[2]) {
                console.log(parseInt(prop));
                return parseInt(prop)
            }
        }
    }
}

// Solution 2
// const quarterOf = (m) => {
//     console.log(m/3);
//     return Math.ceil(m/3);
// }

quarterOf(11)
