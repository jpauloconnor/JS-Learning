
///Objects & Inheritance + Methods
//We call this animal object the prototype object.
//Things inherit from it, and we can set default properties and universal methods.
var animal = {
	type : "",
	habitat : "",
	weight  : 0,
	commonInIndiana : false,

	//The objects will inherit this method.
	printDetails : function(){
		console.log(this.type, this.habitat, this.weight, this.commonInIndiana);
	},
};

//Creating objects from other objects.
var bear = Object.create(animal);
var cow = Object.create(animal);


//The objects we have will have the same default properties as the animal unless we give the properties new values.

bear.type = "Bear";
bear.habitat = "Woods";
bear.weight = 1500;
bear.commonInIndiana = false;
bear.printDetails();

//console.log(bear);
//console.log(bear.type);
//console.log(bear.weight); 

cow.type = "Cow";
cow.habitat = "Farmland";
cow.commonInIndiana = true;
cow.weight = 1500;
cow.printDetails();



//Practice
//Create two functions and call them on your objects.