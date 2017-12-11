var quarterBacks = ["Simian", "Luck", "Brady", "Carr"];

//Regular Syntax
var longNames = quarterBacks.filter(function(name){
	return name.length > 4;
})
console.log(longNames);

//ES6
var shortNames = quarterBacks.filter(name => name.length <= 4);
console.log(shortNames);