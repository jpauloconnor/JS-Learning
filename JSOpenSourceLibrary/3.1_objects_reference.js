//Objects are passed around by reference.
//They are never copied.

var badSinger = {
	name : "Jon",
	last : "Bon Jovi",
	band : "Bon Jovi"
};

//This variable is now badSinger, because it is a reference
var otherBadSinger = badSinger;
console.log(otherBadSinger);
otherBadSinger.age = 55;
var anEvenWorseSinger = otherBadSinger.age;

console.log("Bad singer: ",badSinger);
console.log("Other bad singer: ", otherBadSinger);
console.log("Even Worse: ", anEvenWorseSinger);



var a = { helloa: "Hello A"};
var b = { hellob: "Hello B"};
var c = { helloc: "Hello C"};

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

console.log("Reference types below:")
b = a;
console.log("b:", b);
c = b;
console.log("c:", c);
