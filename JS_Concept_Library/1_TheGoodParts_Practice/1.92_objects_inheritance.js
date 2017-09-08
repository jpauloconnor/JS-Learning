//Methods - functions inside of objects.
//When we want to add a function to the object, we can create methods.
//We also need to know about the this keyword. 
//Think of 'this' as self. It's pointing to the object that it's being called it.
//It's pointing to itself.

var johnQualls = {
	//Properties
	name 			: "John Qualls",
	age  			: 39,
	email			: "jqualls@elevenfifty.org",
	vocation		: "President of Eleven Fifty Academy",
	isRetired		: false,

	//Methods
	greeting		: function(){
		console.log("Hello, I am " + this.name + ". " + "I am " + this.vocation);
	},
	contactMe		: function(){
		console.log("Contact me at " + this.email);
	},
	doBoth			: function(){
		//We can call functions inside of functions.
		this.greeting();
		this.contactMe();
	}
};



//Like the properties, we access the functions with the dot operator.
//When calling you need to add () at the end.
johnQualls.greeting();
johnQualls.contactMe();
console.log("                 ")
console.log("Here is what doBoth() does.")
johnQualls.doBoth();

//Work time: Copy and paste the objects you created before into the new Repl. Write a few methods for the objects.
