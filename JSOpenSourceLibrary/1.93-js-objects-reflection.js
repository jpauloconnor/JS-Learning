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

console.log(typeof playerOne.name);
console.log(typeof playerOne.rating);

