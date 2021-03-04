/**
 * @tutorial https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
 * @summary - create a function which translates a given DNA string to RNA
 * @function DNAtoRNA
 * @param {String} dna 
 * @returns {String}
 */

//  >>> Example 
    // Input:
    //     GCAT
    
    // Process:
    //     convert all the 'T' to 'U'

    // Output:
    //     GCAU

// >>> Appraoch: Iterative

// >>> Code 
// Solution #1 
function DNAtoRNA(dna) {
    let finalString = '';
    let dnaSplit = dna.split('');
    
    dnaSplit.map((el) => {
        if (el === 'T') {
            finalString += 'U'
        } else {
            finalString += el
        }
    })
    
    return finalString
}

// Solution 2
function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

// >>> Test 
DNAtoRNA("TTTT");

// >>> Optimization 
⏲ Time Complexity for solution 1 is O(n)