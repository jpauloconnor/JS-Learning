
//From the docs.
// Array.prototype.map throws things into a new array.
var numbers = [1, 5, 10, 15];
var roots = numbers.map(function(x) {
   return x * 2;
});
// roots is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]
console.log(numbers);
console.log(roots);

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);

// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
console.log(numbers);
console.log(roots);



var family = [{first: "Paul", first: "Laurissa", first: "Ava", first:"Sophie"}];
var fullNames = family.map(function(names){
	var names = names.first + " OConnor";
	return names;
});

console.log(fullNames);