//Update properties
var pizza = {
	//properties
	size : "large",
	price : 9.99,
	numberOfPieces: 8
};

//You can add/update properties with including them in the prototype
pizza.cheese = "Mozarella";
pizza['crust'] = "crispy";

console.log(pizza.cheese);