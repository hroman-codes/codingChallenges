// [R]epeat 
/**
 * @tutorial https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
 * @description - Write a function to convert a name into initals.
 * @function abbrevName
 * @param {String} name - a string that contains a first name and last name
 * @returns {String} - the first letter of the first name and the first letter of the last name
 */

// [E]xample

//     Input:

//         'Heriberto Roman'
//     >>>  ❌        ❌           <<< grab the 1st initial 

//         I should Compartmentalize the first and last name what methods can I use to do this? 

//         Split up the words by space 

//         let name = ['Heriberto', 'Roman']

//         How do I grab the first letter from here?
        
//         name[0][0]

// [C]ode 

function abbrevName(name) {
    let nameState = name.split(' ');
    let nameConstructor = '';

    for (let i = 0; i < nameState.length; i ++) {
        nameConstructor += `${nameState[i][0].toUpperCase()}.`
    }
    
    nameConstructor = nameConstructor.slice(0, -1);
    console.log(nameConstructor);
    return nameConstructor
}

// [T]est 

    abbrevName('Heriberto roman')

// [O]ptimization

⏲️ Time Complexity (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer Reference 

    O(n) Linear Time Complexity <<< is this correct?? 🤷‍♂️

🛰 Space Complextiy: Input Size + Auxiliary Space 

    O(n) Linear Time Complexity <<< is this correct?? 🤷‍♂️



