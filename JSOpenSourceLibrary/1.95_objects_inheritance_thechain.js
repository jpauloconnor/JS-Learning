
//You can inherit pretty far down the chain.
/*
var person = {
	firstname : "John",
	lastname  : "Doe",
	printName : function(){
		console.log(this.firstname, this.lastname);
	}
}

//Object 1
var noName = Object.create(person);
noName.printName();

//Object 2
var kensmith = Object.create(person);
kensmith.firstname = "Ken";
kensmith.lastname = "Smith";
kensmith.printName();

var littlesmith = Object.create(kensmith); //Notice here that we pass in kensmith instead of person.
littlesmith.firstname = "Baby";            //It hinges on passing that in correctly.
console.log(littlesmith.lastname);         //Notice we don't have to set the lastname property
littlesmith.printName();
*/




var grandpaBrown = {
	firstname : "grandpa",
	lastname  : "Brown",
	town      : "St. Louis",
	ethnicity : "English",

	printName : function(){
		console.log(this.firstname + " " +this.lastname);	
	}
}

var grandpa = Object.create(grandpaBrown);
grandpa.printName();


var linda = Object.create(grandpaBrown);
linda.firstname = "Linda";
linda.town = "Carmel";
linda.ethinicity = "Norwegian"
linda.printName();

var justin = Object.create(linda);
justin.firstname = "Justin";
justin.printName();
console.log(justin.ethnicity)
console.log(justin.town);

















/*Think of it like actual genetic inheritance....
			person
			   ^	
			kensmith(parent)
			   ^
			littlemsith(child)

*/


//What's wrong with this? //Fix it.

/*
var otherLittleSmith = Object.create(person);
otherLittleSmith.firstname = "Little Smith";
otherLittleSmith.printName();
*/





