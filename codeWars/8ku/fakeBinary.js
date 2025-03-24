/**
 * @tutorial https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
 * @description given a string of digits, you shold replace any digit below 5 with '0' and any digit 5 and above with '1'
 * @function fakeBin
 * @param {String} x - a string of fake binary numbers
 * @returns {String} - the resulting string
 */

// >>> Example
    // Input:

    //     '543678'

    // Process: 

    //     Loop through the string 
    //     if element is less the 5 convert to 0
    //     else converto to 1

    // Output:

    //     '000111'

// >>> Code
    // create a variable that will hold the new constructed string
    // loop through the string
    // if the element is < 5 then push 0 to the variable
    // else push 1 to the variable
    // convert veariable to a string
    // return string

function fakeBin(x) {
    let binString = ''

    for (let i = 0; i < x.length; i++) {
        let currentEl = x[i]
        
        if (currentEl < 5) {
            console.log('>>> 0')
            binString += '0'
        } else {
            console.log('>>> 1')
            binString += '1'
        }
    }

    console.log(binString)
    return binString
} 

// >>> Test 
// fakeBin('543678')
fakeBin('45385593107843568')

// >>> Optimization
⏲️ Time complexity is O(n)