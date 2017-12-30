// The bind() method creates a new function that, when called,
//  has its this keyword set to the provided value, with a given sequence 
// of arguments preceding any provided when the new function is called.


this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { 
  	console.log(this.x);
  	return this.x; 
  }
};

module.getX(); // 81

var retrieveX = module.getX;
console.log(retrieveX());   
// returns 9 - The function gets invoked at the global scope
// Create a new function with 'this' bound to module.
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81