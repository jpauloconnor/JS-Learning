//CLOSURE

//A closure gives you access to the variables set in a function
//after the function has completed and returned.
//Helps keep variables from getting pushed into global scope.
//Degree of protection. Variable can't be overwritten

var friend = {};

var setAge = function(myAge){
	//not using this yet
	//private var will returned undefined	
	var birthday = "8/11/76";
	return{
		getAge : function(){
			console.log(myAge);
			return myAge;
		
		}
	};
};

friend.age = setAge(30);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.birthday);

var smartCar = {};
var smartCarMPG = function(totalMiles, totalGallons){
	return{
		calculateMpg : function(){
			console.log("MPG: ");
			return totalMiles / totalGallons;
		}
	};
};

smartCar.mpg = smartCarMPG(400, 15);
console.log(smartCar.mpg);
console.log(smartCar.mpg.calculateMpg());
//Inner function has access to outer's variables & parameters
function printName(first, last){
	var intro = "My name is ";

	function makeFull(){
		return intro + first + " " + last;
	}
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





