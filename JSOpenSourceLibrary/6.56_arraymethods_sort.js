var intArray = [6, 2, 5, 8, 10];
console.log(intArray);

intArray.sort();
//This puts 10 in first because of the 1. Not good.
//This turns the numbers to strings first and compares.
console.log(intArray);

intArray.sort(function(a, b){
	return a-b;
});
console.log(intArray);

//How this works:
//  6-2 = 4 - if it's a + number, put b first
//  2-6 = -4 - 

//Sorting a mixed array
var mixedArray = ['aa', 'bb', 'a', 'c', 'cc', 3, 4, 10];
mixedArray.sort();
console.log(mixedArray);


mixedArray.sort(function(a, b){
	if(a===b){
		return 0;
	}
	if(typeof a=== typeof b){
		return a < b ? -1 : 1;
	}
	return typeof a < typeof b ? -1 : 1;
});

console.log(mixedArray);