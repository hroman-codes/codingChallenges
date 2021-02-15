// [R]epeat 
/**
 * @tutorial https://www.algoexpert.io/questions/Tournament%20Winner
 * @description - There is round robin tournament. Only two teams compete at a time. One team is home and the other away, 
 *                with one winner and one loser and no ties.
 * @description - Winners get 3 points and losers get 0 points.
 * @function tournamentWinner - A function that returns the winner 
 * @param {Array} competitions - An array of elements in the form of [homeTeam, awayTeam] where each team is a string of at most 30 chars. 
 * @param {Array} results - contains information about the winner of each corresponding competition, results[i] denotes the winner. 
 *                          1 = homeTeamPoint, 0 = awayTeamPoint
 * @returns {String} -  the winner of the competiton               
 */

// [E]xample

//     input:
//         competition = [
//             ['HTML', 'C#'],     <<< C# wins 
//             ['C#', 'Python'],   <<< Python wins
//             ['Python', 'HTML']  <<< Python wins 
//         ]

//         results = [0, 0, 1] <<< 1 = homeTeamPoint, 0 = awayTeamPoint

// How do I keep track of all of this? 

//         - an object {}
//         - with the team name as the keys
//         - and the score and the value 

// Which Data structure am I going to use to keep track of

//         - the competitors
//         - the score 
//         - the points givin 3

// How am I going to identify the competitors in the competition array?

//         - iterate through the competetions array and store all the teams in the object as keys 
//         - if the name already exist update the value with 3 points 
//         - if the name doesnt exist add the name of the team as a key and add 3 points as a value

// [C]ode

//TODO: create a variable that hold a pointer to the winning team indicator of 1
let HOME_TEAM_WON = 1

function tournamentWinner(competitions, results) {
    //TODO: create a variable to hold the current best team, value should be a string
    let currentBestTeam = '';

    //TODO: create a variable that holds the scores of the currentbestTeam
            // Key should hold the currentBestTeam
            // Value should hold the score
    let scores = {[currentBestTeam]: 0}

    //TODO: loop the the competitors
    for (let idx = 0; idx < competitions.length; idx++) {
        //TODO: create a variable result that stores a reference to the results array 
             // and iterates with the help of the loops index
        const result = results[idx]
        console.log('result >>>', result);

        //TODO: create a variable that deconstructs the reference to the [homeTeam, awayTeam] 
             // and stores competitions[idx]
        const [homeTeam, awayTeam] = competitions[idx]
        console.log([homeTeam, awayTeam]);

        //TODO: create a variable that holds the winning team for that competition, 
             // the value should hold a tenary
        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam

        //TODO: call the updateScore function with the (winningTeam, points, scores)
        updateScore(winningTeam, 3, scores);

        //TODO: if scores winningTeam is greater than the scores currentBestTeam
        if (scores[winningTeam] > scores[currentBestTeam]) {
            //TODO: set currentBestTeam = winningTeam
            currentBestTeam = winningTeam
        }
    } 
        //TODO: return currentBestTeam
        return currentBestTeam;
    
    }
    
    //TODO: create an updateScore function and pass in (teams, points, scores)
    function updateScores(team, points, scores) {
        //TODO: if (!(team in scores)) scores[team] = 0
        if (!(team in scores)) scores[team] = 0

        //TODO: update the points scores[team] += points
        scores[team] += points       
    }

// [T]est: 
tournamentWinner([["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0, 0, 1])