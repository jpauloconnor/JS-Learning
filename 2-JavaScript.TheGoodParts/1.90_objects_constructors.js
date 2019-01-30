//This type of object lets us creating multiple instances of an object.

function Person(name, age){
	//Note that the argument aligns with the RHS(Right Hand Side) 
	//The variable created will take the place of this
	this.name = name;
	this.age = age;
}

var paul = new Person("Paul", 41);
console.log(paul.name);

var sophie = new Person("Sophie", 5);
var ava = new Person("Ava", 15);

console.log(sophie.name);
