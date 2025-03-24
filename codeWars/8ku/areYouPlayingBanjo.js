/**
 * @tutorial https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
 * @description - Create a function which answers the question "Are you playing banjo?".
                  If your name starts with the letter "R" or lower case "r", you are playing banjo!
* @function areYouPlayingBanjo
* @param {String} name 
* @returns {String}
 */

// >>> Example

    // Input: 
    
    //     "Martin"

    // Process:

    //     M A R T I N 
    //     ^ <<< does not start with an M 

    // Output: 

    //     "Martin does not play banjo"

// >>> Code

    // split up the incoming string 
    // grab the first char 
    // if the first char is === m or === M
    //     then return the correct string with name attached 
    // if first char is not
    //     then return the correct string with name attached 

function areYouPlayingBanjo(name) {
    let breakUpString = name.split('');
        let firstChar = breakUpString[0];
    
        if (firstChar === 'R' || firstChar === 'r') {
            return `${name} plays banjo`;
        } else {
            return `${name} does not play banjo`;
        }
}

// function areYouPlayingBanjo(name) {
//     name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }

areYouPlayingNamjo('Heriberto');


// >>> ⏲️ Time Complexity O(1) constant 