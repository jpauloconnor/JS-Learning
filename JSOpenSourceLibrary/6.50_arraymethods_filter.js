
//Idea from JS30
const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1953 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }
]


//Array.prototype.filter()
var fifteenHundreds = inventors.filter(function(inventor){
	if(inventor.year >= 1500 && inventor.year < 1600)
		return true;
});

console.log(fifteenHundreds);

//ES6 Arrow in single line
var sixteenHundred = inventors.filter(inventor => (inventor.year >= 1600 && inventor.year < 1700));
console.log(sixteenHundred);


var albert = inventors.filter(inventor => (inventor.first =="Albert"));
console.log(albert);