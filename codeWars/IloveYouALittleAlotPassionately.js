/**
 * @tutorial https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
 */

// Input 

//        >>> 7   

//         1. I love you
//         2. a little
//         3. a lot
//         4. passionately
//         5. madly
//         6. not at all

//        let phrases =  ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
//                             0           1           2           3           4           5
//                             ^                 

// Things to consider: 

//     - When I think of pedals in a flower I think of the fact that those pedals are in "circular" Form

//     - For example, there are 6 phrases total, so every 6 pedals is a full rotation of phrases

//     - Just like with a pedal, if you have more than 6, you would keep going and start the phrases over from the top

//     - So this makes me think of a certain operator that returns a "remainder" which helps us simulate this "circular" pattern

//     - Arrays start at 0, and the Number of Pedals is > 0. Consider "offsetting" the pedals each instance you get.

//     - For loop()
//         - how do we have a loop continue

// Edge Case

// Process 

//     - create a variable phrases - a list of all phrases
//     // - iterate through the list 
//         // - init at 0 index 
//         - condition:
//             - num of pedals 
//             - num of phrases -> 6 
//             - If num of pedals (7) > num of phrases (6) 
//         // - create variable called currentFlower
//         - 

// Output 

//     - "I love you"

// JS Solution: Elvis and Heri Codewars
function howMuchILoveYou(nbPetals) {
    let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    let numberOfPhrases = phrases.length
    let phraseToCapture = (nbPetals - 1) % numberOfPhrases;
    let sheLovesMeSheLovesMeNot;

    (nbPetals > numberOfPhrases) ? sheLovesMeSheLovesMeNot = phrases[phraseToCapture] : 
    sheLovesMeSheLovesMeNot = phrases[phraseToCapture]

    return sheLovesMeSheLovesMeNot;
}

// console.log(howMuchILoveYou(7)); // I love you
console.log(howMuchILoveYou(4)); // 'passionately'
// console.log(howMuchILoveYou(6)); // "not at all"


/*
 
def how_much_i_love_you(nb_petals):
    #your code
    phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    
    numPhrases = len(phrases)
    
    #If the number of pedals minus 1 is greater than the number of phrases then run: 
        #numPedals - 1 % numPhrases 

    if(nb_petals - 1 > numPhrases):
        index = (nb_petals - 1) % numPhrases
        return phrases[index]
    else: 
        return phrases[(nb_petals - 1) % numPhrases]
*/


//Python Solution: Elvis and Heri Codewars
def how_much_i_love_you(nb_petals):
    #your code
    phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    
    numPhrases = len(phrases)
    
    #If the number of pedals minus 1 is greater than the number of phrases then run: 
        #numPedals - 1 % numPhrases 

    if(nb_petals - 1 > numPhrases):
        index = (nb_petals - 1) % numPhrases
        return phrases[index]
    else: 
        return phrases[(nb_petals - 1) % numPhrases]




            // function howMuchILoveYou(nbPetals) {
            //     //This is the list of phrases.
            //     let phrases = ["I love you", "a little", "a lot", "passsionately", "madly", "not at all"];
                
            //     //This represents the number of phrases
            //     let numPhrases = phrases.length;
                
            //     //If the number of pedals minus one is greater than the number of phrases
            //     if(nbPetals - 1 > numPhrases){
            //       //The index will be the modulus of the number of pedals minus one and number of phrases
            //       index = (nbPetals - 1) % numPhrases;

            //       //return the phrases at the index captured above in line 108
            //       return phrases[index];
            //     }else{
            //         return phrases[(nbPetals - 1) % numPhrases]
            //     }
                  
            //     }


              