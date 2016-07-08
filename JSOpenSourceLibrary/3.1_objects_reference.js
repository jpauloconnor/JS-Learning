//Passing 

var badSinger = {
	name : "Jon",
	last : "Bon Jovi"
}

var otherBadSinger = badSinger;
otherBadSinger.age = 55;
var yo = otherBadSinger.age;
console.log(yo);

console.log(badSinger);
console.log(otherBadSinger);

