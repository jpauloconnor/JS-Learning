//Ojbect Literals with properties

var emptyObject = {};
console.log(emptyObject);
var johnQualls = {
	//Properties
	name 			: "John Qualls",
	age  			: 39,
	vocation		: "President of Eleven Fifty Academy",
	isRetired		: false

};

//Access the values.
console.log(johnQualls);
console.log(johnQualls.name);
console.log(johnQualls.age);
//Students do the others.

//Do one more together?


var animal = {
	type : "bear",
	habitat : "woods",
	weight  : 500,
	commonInIndiana : false
};



var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};

console.log(person.name[0]);


var person = {
  name: { 
  	first: 'Bob', 
  	last: 'Smith'
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};

console.log(person.name.first);
person.name.first = "Jonas";
console.log(person.name.first);

person['name']['last'] = 'Cratchit';

console.log(person['name']['last'])
