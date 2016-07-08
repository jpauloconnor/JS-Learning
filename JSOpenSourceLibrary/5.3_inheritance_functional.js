//Functional Inheritance - making things private

//Function that produces objects takes four steps
//1. Creates an object
//2. Optionally defines private instance var and methods
//3. augments the new object with methods 
   //methods have priveleged access to the params and vars defined
//4. Returns that new object


var human = function (specific){
	var newObject = {};

	newObject.name = function ( ){
		return specific.name;
	};
	newObject.says = function( ){
		return specific.saying || '';
	};
	return newObject;
};


var paul = human({name: "paul"});
