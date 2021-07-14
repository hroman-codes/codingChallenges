function numPlayers(k, scores) {
    
    // Deconstruct problem
    //     - On game
    //     - Each player earns a # of points
    
    // Input 
    
    //     k = the cutoff rank >>> 4
    //     scores >>> [20, 40, 60, 80, 100] .length = 5
    //     rank   >>> [5, 4, 3, 2, 1]
     
    // Edge Case
    
    //     - if player scores 0 they DONOT level up
    //     - players with equal scores will have equal ranks
    
    // Process
    
        // - log out k
        // - log out scores 
        // - take scores and sort it via decending order 
        // - create a rank container
        // - create a rank counter and set it to 0
        // - create a container called element to evaluate
        // - create a container called duplicate that will hold a boolean
        // - iterate through the array 
            // - grab each element  
            // - rank each element So because its sorted the ranking is kind of done for us. 
            // - is the current element === element to evaluate 
                // - push rank counter to rank container
                // - change duplicate boolean to true
            // - evaluate the element
                // - if duplicateBoolean === true 
                    // - set rank counter to be the currentIndex of currentElement
                    // - push rank counter to rank container
                    // - update element to evaluate to current element
                    // - set duplicateBoolean = false
                    // - continue with the loop and pass the below logic
                // - increment rank counter
                // - push rank counter to rank container
                // - update element to evaluate to current element
            
    
    // Output 

    //     - An Integer 
    
    let sortedScores = scores.sort((a, b) => b - a);
    let rankedContainer = [];
    let rankCounter = 0;
    let elementToevaluate = 0;
    let duplicate = false;
    
    debugger
    for (let i = 0; i < sortedScores.length; i++) {
        let currentEl = sortedScores[i];
        console.log('currentEl', currentEl)
        
        if (currentEl === elementToevaluate) {
            rankedContainer.push(rankCounter)
            duplicate = true;
        } else {
            debugger
            if (duplicate === true) {
                rankCounter = i + 1;
                rankedContainer.push(rankCounter);
                elementToevaluate = currentEl;
                duplicate = false;
                continue
            }
            debugger
            rankCounter++
            rankedContainer.push(rankCounter)
            elementToevaluate = currentEl;
        }
        
        console.log('rankedContainer', rankedContainer)
    }

    rankCounter = 0

    if (rankedContainer.every(n => n === 0)) {
        console.log('Nah son 0')
        return 0
    } else {
        for (let num of rankedContainer) {
            console.log('num', num)
            if (num <= k) {
                rankCounter++
            }
        }
    }


    console.log('rankCounter', rankCounter)
    return rankCounter
    
    
    // console.log('sortedScores', sortedScores)
    // console.log('k', k)
    // console.log('scores', scores)
    
}

// console.log(numPlayers(3, [100, 50, 50, 25])); // return 3
// console.log(numPlayers(4, [ 20, 40, 60, 80, 100 ])); // return 4
// console.log(numPlayers(4, [ 100, 100, 100, 100, 100 ])); // return ?
console.log(numPlayers(4, [ 0, 0, 0, 0, 0 ])); // return ?