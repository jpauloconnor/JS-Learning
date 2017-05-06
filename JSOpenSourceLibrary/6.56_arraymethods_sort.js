//From the docs
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']
console.log(fruit);

var scores = [1, 10, 21, 2]; 
scores.sort(); // [1, 10, 2, 21]
// Note that 10 comes before 2,
// because '10' comes before '2' in Unicode code point order.
console.log(scores);

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.
console.log(things);

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




const nbaMVPs = [
		{first: "Steph", last: "Curry", year: 2016},
		{first: "Kevin", last: "Durant", year: 2014},
		{first: "Steph", last: "Curry", year: 2015},
		{first: "Lebron", last: "James", year: 2013},
		{first: "Lebron", last: "James", year: 2012},
		{first: "Derrick", last: "Rose", year: 2011}
	]

const byYear = nbaMVPs.sort(function(a, b){
	if(a.year > b.year){
		return 1;
	} else {
		return -1;
	} 
});

console.log(byYear);

console.log( "            ")
const nbaMVPsTernary = nbaMVPs.sort((a,b) => a.year > b.year ? 1 : -1);
console.log(nbaMVPsTernary);