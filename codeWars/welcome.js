/**
 * @tutorial https://www.codewars.com/kata/577ff15ad648a14b780000e7
 * @function greet
 * @param {String}
 * @returns {String}
 */

// Input 

//     >>> 'english'

//     - String primitive data type 

// Process
//     - create a lnaguage object
//     - set param defult to = 'English'
//     - loop through the object 
//         - if currentLanguage equals to language
//             - return  "Your function should have returned '{Language}'. Try again."
//         - otherwise
//             - return "Your function should have returned 'Welcome'. Try again."

let obj = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso' 
}

function greet(language){
    for(const currentLanguage in obj) {
        if (currentLanguage === language) return obj[currentLanguage]  
    }
    return "Welcome"
}

// Test
// console.log(greet('engli'))
console.log(greet('IP_ADDRESS_INVALID'))
// console.log(greet('dutch'))

// Complexity
⏲️ O(n) Linear Time Complexity
🛰 O(1) Constant Space Complexity