//Update properties
var pizza = {
	//properties
	size : "large",
	price : 9.99,
	numberOfPieces: 8
};

//You can add/update properties and include them in the prototype
pizza.cheese = "Mozarella";

//No one uses this...
pizza['crust'] = "crispy";

console.log(pizza.cheese);