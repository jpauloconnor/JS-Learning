


function Person(name){
	this.name = name;
}

var paul = new Person("Paul");
console.log(paul.name);



//Inner function has access to outer's variables & parameters
function printName(first, last){
	var intro = "My name is ";

	function makeFull(){
		return intro + first + " " + last;
	};
	return makeFull();
}

//Even after the outer function has returned, the inner function
//still has access to the outer function's variables.
var scoreDoubler = function(score){
	var currentScore = score;
	var generator = function(){
		currentScore *= 2;
		return currentScore;
	};
	return generator;
};

//Return a function from another function
var updateScore = scoreDoubler(20);
console.log(updateScore());


var statusCheck = function (score){
	var currentScore = score;
	var message = function(){
		if(currentScore >= 50){
			console.log("You Win");
		} else{
			console.log("You can do it!");
		}
		return currentScore;
	};
	return message;
};

var scoreMessage = statusCheck(40);
console.log(scoreMessage());





