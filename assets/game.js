// Create variables to hold data



var crystalRed = 0;
var crystalYellow = 0;
var crystalGreen = 0;
var crystalBlue = 0;

var userGuess = 0;
var randomGuess = 0;

var wins = 0;
var losses = 0;
// Create click functions

$("#red").click(function(){
    alert("test red")
});
$("#yellow").click(function() {
    alert("test yellow")
});
$("#green").click(function() {
    alert("test green")
});
$("#blue").click(function() {
    alert("test blue")
});

// Build randomization function for crystals and answers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) +min;
}

function startGame (){

randomScore = 0
userGuess = 0  

randomGuess = getRandom(29, 140);

crystalBlue = getRandom(1, 12);
crystalGreen = getRandom(1, 12);
crystalRed = getRandom(1, 12);
crystalGreen = getRandom(1, 12);
console.log(CrystalRed + " | " + crystalYellow + " | " + crystalGreen + " | " + crystalBlue);


// Create click functions to run the game

// Create scoring rules

// Call the function to start the game
startGame ();