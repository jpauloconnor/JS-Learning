
///Objects & Inheritance + override Methods
//Override is when we want specific objects to be able to override the method that is set up. See example one.
var animal = {
	type : "",
	habitat : "",
	weight  : 0,
	commonInIndiana : false,

	//The objects will inherit this method.
	printDetails : function(){
		console.log(this.type, this.habitat, this.weight, this.commonInIndiana);
	},

	saySomething : function(){
		console.log("To be or not to be");
	}
};

//Creating objects from other objects.
var bear = Object.create(animal);
var cow = Object.create(animal);


/* Bear Object */
bear.type = "Bear";
bear.habitat = "Woods";
bear.weight = 1500;
bear.commonInIndiana = false;
bear.printDetails();

// OVERRIDE 
bear.saySomething = function(){
	console.log("I am a big bad bear.");
}

//Now call the function on the object.
bear.saySomething();

/* Cow Object*/
cow.type = "Cow";
cow.habitat = "Farmland";
cow.commonInIndiana = true;
cow.weight = 1500;
cow.printDetails();

//You try it: override the saySomething method on the cow.
cow.saySomething = function(){
	console.log("I am a big brown cow.");
}


//Challenge
//Create one or two new functions on the prototype object and override them in your child objects.





