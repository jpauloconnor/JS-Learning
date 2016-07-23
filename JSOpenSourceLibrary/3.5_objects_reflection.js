//Reflection is the process of inspecting an object tow determine the properties it has
//It is very hand to use typeof to inspect things

var protoTypePlayer = {
	name : "",
	number: 0,
	rating: 0
};

var playerOne = Object.create(protoTypePlayer);

var playerOne = {
	name : "Joe Jingle HillHeimer Smit",
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
console.log(typeof playerOne.number);
console.log(typeof playerOne.rating);
console.log(typeof playerOne.stats);
console.log(typeof playerOne.sayName());
console.log(typeof playerOne.name.toString());

//The .hasOwnProperty method will return true if the object
//has a property 
//Does not look at the prototype chain
var test = playerOne.hasOwnProperty('name');
var test2 = playerOne.hasOwnProperty('sayName');

console.log(test, test2);