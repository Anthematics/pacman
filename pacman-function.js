//There are 2 main ways to define functions in JS

//Named function

function eatDot() {
	console.log("MUNCH!");
}

//Anonymous function - where we assign the function to a variable instead of giving it a direct name.

var eatDot = function() {
	console.log("MUNCH!");
}

//Call it with

	eatDot();

var highScores = [];

function addHighScore(highScoreList, playerInitials, score) {
	var record = {player: playerInitials, score: score};
	highScoreList.push(record); // add record to array
}

highScores
 //empty array to start
addHighScore(highScores,'SDL',2000);
highScores
[ {player:'SDL',score: 2000} ]
addHighScore(highScores, 'JSL', 10000);
highScores
[{player: 'SDL',score: 2000} ,
{player: 'JSL', score: 10000}]
