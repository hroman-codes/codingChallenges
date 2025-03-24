// [R]epeat
/**
 * @description - kata: https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript
 * @function toBinary - should take in a number and return the binary representation of that number
 * @param {integer} n - A non-negative integer
 * @returns {number} - a binary representation of @param {integer}
 * 
 */

// [E]xample 

//     how do I find the binary number?
//     - To convert integer to binary, start with the integer in question and divide it by 2
//     keeping notice of the quotient and the remainder. Continue dividing the quotient by 2
//     until you get a quotient of ZERO. 

//     Then just write out the remainders in the reverse order. 

// to_binary(12)

//                  %
//     12 : 2 = 6 + 0
//      6 : 2 = 3 + 0
//      3 : 2 = 2 + 1
//      1 : 2 = 0 + 1

//      Write out the remainder in the reverse order = 1100

// to_binary(5)

//     5 : 2 = 2 + 1
//     2 : 2 = 1 + 0
//     1 : 2 = 0 + 1

//     Binary reprentation of 5 = 101

// [A]pproach

//     This will be a iterative approach where looping through the number provided down to 0

// [C]ode 

//     : create a new variable to hold the new state of n 
//     : create a variable called resultOfDivision 
//     : create a variable called binaryNumber which is the modulus remainder which in turn will be the construct binary number 
//     : create a while loop for resultOfDivision
//         - while resultOfDivision is !0
//         - divide n / 2 && n % 2
//         - store the result of the division in resultOfDivision
//         - store the result of the modulus in binaryNumber
//         - once we reach the end of the loop
//         - return the binaryNumber Array

// [T]est 

    // toBinary(5) // binary representation should be 101
    // toBinary(2) // binary representation should be 10

// [O]ptimization

   ⏲ Time Complexity: Operation + Comparisons + Loop + Pointer Reference + Function Calls to outside

        A if (state === 2)    + >           
      n B While               +   >         list out  >>  A+n(B+C+D+E)   >
      n C state > 0           +     >         group   >>   K1   K2         >   ⏲️ O(n) Linear time Complexity
      n D resultOfDivision    +   >           group   >>   K1 + n(K2)      >
      n E binaryNumber        + >          drop const >>      n          >


   🛰 Space Complexity: Variables + Data Structures + Allocations + Function Call 
   (Booleans & Numbers O(1))(Strings Arrays Objects O(n))

    A toBinary()            >         
    B n                         >       List Out >> A+B+C+D  Group them >> K1 Drop Constant >  1 🛰 O(1) Constant Space Complexity
    C resultOfDivision          >
    D binaryNumber          >



// Solution #1
function toBinary(n) {

    let state = n;
    let resultOfDivision = 0;
    let binaryNumber = '';

    // toBinary(5)
    // 5 : 2 = 2 + 1
    // 2 : 2 = 1 + 0
    // 1 : 2 = 0 + 1

    // toBinary(2)
    // 2 : 2 = 1 + 0
    // 1 : 2 = 0 + 1

    if (state === 2) {
        console.log(state.toString(2))
        return Number(state.toString(2));
    }

    while (state > 0) {
        resultOfDivision = Math.floor(state / 2)
        binaryNumber += state % 2
        state = resultOfDivision;
    }

    // resultOfDivision != 0
    console.log('state >>>', state);
    console.log('resultOfDivision >>>', resultOfDivision);
    console.log('binaryNumber >>>', binaryNumber);
    
    return parseInt(binaryNumber);

}

// Solution #2 💟
// function toBinary(n) {
//     return Number(n.toString(2));
// }


// toBinary(5) // binary representation should be 101
toBinary(2) // binary representation should be 10