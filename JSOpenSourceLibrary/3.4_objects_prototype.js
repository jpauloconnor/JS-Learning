//All objects are linked to this:

var protoTypePlayer = {
	name : "",
	number: 0,
	rating: 0
};

var playerOne = Object.create(protoTypePlayer);

var playerOne = {
	name : "Joe Jingle Heimer Smith",
	number : 1,
	rating : 1
};

//We can create other objects from player
var playerTwo = Object.create(protoTypePlayer);
playerTwo.number = 2;

console.log(playerTwo.number);

//Since we haven't set the name prop for playerTwo, it will
//go up the prototype chain.
console.log(playerTwo.name);
console.log(playerOne);
console.log(playerTwo);
console.log(playerTwo.rating);
console.log(playerTwo.number);


//Dynamic relationship
//If we add something to the proto Object, it will affect
//all other objects down the chain


//Try this in Chrome
if (typeof Object.create !== 'function'){
	Object.create = function(object){
		var F = function (object){};
		F.prototype = object;
		return new F();
	};
}

var playerThree = Object.create(protoTypePlayer);
console.log("Player Three: ", playerThree);
console.log(protoTypePlayer.name);

protoTypePlayer.salary = 5000000;
console.log(protoTypePlayer);


