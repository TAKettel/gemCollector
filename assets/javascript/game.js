// Four crystals on screen, each with their own randomly-generated value.
// On click, value of crystal added to player score.
// Randomly-generated goal number, check the player score against this.
// Score remains, tally of wins AND losses.

let firstGem;
let secondGem;
let thirdGem;
let fourthGem;
let playerScore;
let scoreGoal;
let winTally = 0;
let loseTally = 0;

function newGame() {
    playerScore = 0;
    firstGem = setPoints(1, 12);
    secondGem = setPoints(1, 12);
    thirdGem = setPoints(1, 12);
    fourthGem = setPoints(1, 12);
    // push to an array if you NEED the numbers to be different.
        // Look up Array.prototype.includes() on MDN web docs for more details.
        // Also slice is really interesting as an option.
// Each gem has a point value between 1-12, goal is to be between 19 and 120.
    scoreGoal = setPoints(19, 120);
    console.log(firstGem, secondGem, thirdGem, fourthGem);
    console.log(scoreGoal);
    $("#goal").text(scoreGoal);
    $("#score").text("0");
};

// Found on MDN web docs - to get a random integer BETWEEN two numbers:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
function setPoints(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) +min);
}

function scoreCheck() {
    if(playerScore === scoreGoal) {
        console.log("Victory")
        winTally++;
        $("#wins").text(winTally);
        setTimeout(newGame, 5000);
    };
    
    if(playerScore > scoreGoal) {
        console.log("Whoopsie")
        loseTally++;
        $("#losses").text(loseTally);
        setTimeout(newGame, 5000);
    };
};

$("#firstGem").click(function() {
    playerScore = (playerScore + firstGem);
    $("#score").text(playerScore);
    console.log(playerScore);
    scoreCheck();
});

$("#secondGem").click(function() {
    playerScore = (playerScore + secondGem);
    $("#score").text(playerScore);
    console.log(playerScore);
    scoreCheck();
});

$("#thirdGem").click(function() {
    playerScore = (playerScore + thirdGem);
    $("#score").text(playerScore);
    console.log(playerScore);
    scoreCheck();
});

$("#fourthGem").click(function() {
    playerScore = (playerScore + fourthGem);
    $("#score").text(playerScore);
    console.log(playerScore);
    scoreCheck();
});


newGame();