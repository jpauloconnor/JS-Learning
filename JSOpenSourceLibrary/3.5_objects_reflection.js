//Using typeof to inspect things

var protoTypePlayer = {
	name : "",
	number: 0,
	rating: 0
};

var playerOne = Object.create(protoTypePlayer);

var playerOne = {
	name : "Joe Jingle Heimer Smith",
	number : 1,
	rating : 1,
	stats  : [
	{points: 100, steals: 5}
	],

	sayName : function(){
		return this.name;
	}

};

//Do some in Chrome, too.
console.log(typeof playerOne.name);
console.log(typeof playerOne.rating);
console.log(typeof playerOne.stats);
console.log(typeof playerOne.sayName());
console.log(typeof playerOne.name.toString());

var test = playerOne.hasOwnProperty('name');
var test2 = playerOne.hasOwnProperty('sayName');

console.log(test, test2);