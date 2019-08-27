// Create variables to hold data



var crystalRed = 0;
var crystalYellow = 0;
var crystalGreen = 0;
var crystalBlue = 0;

var userGuess = 0;
var randomGuess = 0;

var wins = 0;
var losses = 0;

// Build randomization function for crystals and answers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameOver() {
    console.log("test");
        // check if player has lost
    
        if(userGuess > randomGuess) {
            alert("You lose! Try again!");
            console.log("Player Lost");
    
            losses++;
            startGame();
        }
    
        else if (userGuess == randomGuess) {
            alert("You win!");
            console.log("Player Won");
            wins++;
            startGame();
        }
    
        else {
            $("#yourScore") = userGuess;
    
        }
    
        $("#wins").html(wins);
        $("#losses").html(losses);
    
    }

function startGame (){

randomGuess = 0  

randomGuess = getRandom(29, 140);
console.log(randomGuess);

crystalBlue = getRandom(1, 12);
crystalYellow = getRandom(1, 12);
crystalRed = getRandom(1, 12);
crystalGreen = getRandom(1, 12);
$("#randomGuess").text(randomGuess);
console.log(crystalRed + " | " + crystalYellow + " | " + crystalGreen + " | " + crystalBlue);
}
// Create click functions


$("#red").click(function(){
    userGuess = userGuess + crystalRed;
    console.log(userGuess);
    $("#yourScore").text(userGuess);
    gameOver();
});
$("#yellow").click(function() {
    userGuess = userGuess + crystalYellow;
    console.log(userGuess);
    $("#yourScore").text(userGuess);
    gameOver();
});
$("#green").click(function() {
    userGuess = userGuess + crystalGreen;
    console.log(userGuess);
    $("#yourScore").text(userGuess);
    gameOver();
});
$("#blue").click(function() {
    userGuess = userGuess + crystalBlue;
    console.log(userGuess);
    $("#yourScore").text(userGuess);
    console.log("gameover", gameOver);
    gameOver();
});


// Create click functions to run the game
// debugger;


startGame ();




// Call the function to start the game


