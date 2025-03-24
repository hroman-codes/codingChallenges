https: //www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

Edge Case: First letter of words may not be capitalize

Example: "Sam Harris" >>> "S.H"

        ['Sam', 'Harris']
          ^      ^
          0      0

separate
Break Down
a. seperate word
   split(), 
b. get first letter of each word
    for(), indexOf()
c. add a .(dot) between first and second word
  join(".")
d. return new word as a string

// +=

// function abbrevName(name) {
//   let str = name.split(" ")
//   let result = []
//   let initial;
//   for(let i = 0; i < str.length; i++) {
//     let letter = str[i][0].toUpperCase()
//     result.push(letter)
// }
//   initial = result.join(".")
// }

// abbrevName("sam harris") //"S.H"

// Expected: 'E.D', instead got: 'e.d'




function abbrevName(name) {
    let str = name.split(" ")
    let result = ''

    for(let i = 0; i < str.length; i++) { 
      let letter = str[i][0].toUpperCase() 
      result += `${letter}.` 
    }

    return result.substring(0, result.length - 1) <<<
  }
  
  abbrevName("sam harris") //"S.H"

  ⏲️ Time Complexity is the idea of how your code slows as your data grows 🤔

  (FOCLP): Function call to outside + Operations + Comparisons + Loops + Pointer Reference 


    a. split()              O(n) Linear   >
    b. for loop             O(n) Linear   >
    c. toUpperCase()        O(n) Linear   >    K(n) > n > Worst Case O(n) Linear
    d. +=                   ????          >
    e. substring()          O(n) Linear   >