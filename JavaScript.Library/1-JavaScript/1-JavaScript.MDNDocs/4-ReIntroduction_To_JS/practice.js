// Reintro source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript


//Types in JS: 
//Number, String, Boolean, Function, Object, Sybmol
//undefined & null, Array, Date, and RegExp


// Number
// String
// Boolean
// Symbol (new in ES2015)
// Object
	// Function
	// Array
	// Date
	// RegExp
// null
//undefined


//Numbers
//no such thing as an integer in JS
var x = 7;
console.log(x);

//The Math object is awesome
Math.sin(3.5);

var r = 2;
var circumference = 2 * Math.PI * r;
console.log(circumference);


//Parse 
var y = parseInt('1234', 10); // 1234
console.log(y);
// isNaN(y);
console.log(isNaN(y));

parseInt('010', 10); // 10

//Strings
const greet = 'hello';
const firstLetter = greet.charAt(0);
console.log(firstLetter);

const replaceWord = greet.replace('hello', 'goodbye');
console.log(replaceWord);

const toUpper = greet.toUpperCase();
console.log(toUpper);

const anotherUpper = replaceWord.toUpperCase();
console.log(anotherUpper);

//NULL vs. UNDEFINED
var anUndefinedVariable;
console.log(anUndefinedVariable);

var check = Boolean(anUndefinedVariable);
console.log(check);

var checkCircumference = Boolean(circumference);
console.log(checkCircumference);

if(check)
	console.log("hey");

if (anotherUpper){
	console.log("Hey, it worked.");
}



//Variables: let, const, var

let a;
let name = 'Jonas';

const stuff = 1;
//Can't do it: stuff = 2;

var greatestTVShow = 'The Wire';

for(var visibleOutside = 0; visibleOutside < 2; visibleOutside++){
	console.log("Inside: ", visibleOutside);
}

console.log("Hey: ", visibleOutside);

//let and const allow you to create block scope

function blockDemo(){
	var x = 'Is this visible?';
}

//Objects

var obj = new Object();

//same as & more common:
var objLiteral = {}; 

var player = {
	name : 'Paul',
	details : {
		age : 41,
		occupation : 'Software Developer'
	}
};

//chaining attributes together:
console.log("Name:", player.name);
console.log("Age:", player.details.age);

//Object Prototype
function Athlete(name, age){
	this.name = name;
	this.age = age;
}

var swimmerInLaneEight = new Athlete('Jethro', 14);
console.log("Name:", swimmerInLaneEight.name, "Age:", swimmerInLaneEight.age);


//Arrays

var animals = new Array();
animals[0] = 'dog';
animals[1] = 'cat';
animals[2] = 'frog';

var lengthOfAnimals = animals.length;
console.log("Number of animals on the farm:", lengthOfAnimals);

// //The length of the array is one more than the highest index,
// //not necessarily the number of items in the array:

// a.toString()	Returns a string with the toString() of each element separated by commas.
// a.toLocaleString()	Returns a string with the toLocaleString() of each element separated by commas.
// a.concat(item1[, item2[, ...[, itemN]]])	Returns a new array with the items added on to it.
// a.join(sep)	Converts the array to a string — with values delimited by the sep param
// a.pop()	Removes and returns the last item.
// a.push(item1, ..., itemN)	Appends items to the end of the array.
// a.reverse()	Reverses the array.
// a.shift()	Removes and returns the first item.
// a.slice(start[, end])	Returns a sub-array.
// a.sort([cmpfn])	Takes an optional comparison function.
// a.splice(start, delcount[, item1[, ...[, itemN]]])	Lets you modify an array by deleting a section and replacing it with more items.
// a.unshift(item1[, item2[, ...[, itemN]]])	Prepends items to the start of the array.


var namesOfUncles = ['John', 'Dan', 'Jim'];
namesOfUncles[100] = 'Mike';
var lengthOfUnclesArray = namesOfUncles.length;
console.log("Uncles array length:", lengthOfUnclesArray);

var undefinedPlaceInArray = typeof namesOfUncles[91];
console.log("Nothing there:", undefinedPlaceInArray);

namesOfUncles[91] = "John";
var stringPlacedInArray = typeof namesOfUncles[91];
console.log("Now there is a sstring type: ", stringPlacedInArray);

var arrayMethodDemo = ['a', 'b', 'c'];
var arrayToString = arrayMethodDemo.toString();
console.log(arrayToString);

var arrayToLocaleString = arrayMethodDemo.toLocaleString();
console.log(arrayToLocaleString);

var concatDemo = arrayMethodDemo.concat('d', 'e');
console.log(concatDemo);
console.log(concatDemo.toString());

var anotherDemo = concatDemo.join();
console.log("hey", anotherDemo, animals);

//FUNCTIONS
function add(x, y) {
	var total = x + y;
	return total;
}

var sum = add(1, 3);
console.log(sum);

function addAgain() {
  var sum = 0;
  console.log('Arguments: ', arguments);
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum;
}

//Now it will take any number of arguments....
var sumOfSecondFunction = addAgain(4, 5, 6, 'stuff');
console.log(sumOfSecondFunction);

function averageNums(){
	var sum = 0;
	for (var i = 0, j = arguments.length; i < j; i++){
		sum += arguments[i];
	}
	return sum / arguments.length;
}

var averageDemo = averageNums(1, 4, 5, 6, 7, 7);
console.log(averageDemo);

//Rest Parameter Syntax
function avgWithRPSyntax(...args){
	var sum = 0;
	for (let value of args){
		sum += value;
	}
	return sum / args.length;
}

var rpSyntaxDemo = avgWithRPSyntax(25, 25, 25);
console.log(rpSyntaxDemo);

//anonymous functions

var averageAnonDemo = function(){
	var sum = 0;
	for (var i = 0, j = arguments.length; i < j; i++){
		sum += arguments[i];
	}
	return sum / arguments.length;
}




console.log(averageAnonDemo(5, 6, 4));


//
var numOne = 1;
var numTwo = 2;
console.log("One?:", numOne);

(function(){
	var numTwo = 5;
	numOne += numTwo;
	console.log(numOne);
})();


console.log(numOne);
console.log(numTwo);

//Recursive call

function countCharacters(elm){
	if (elm.nodeType == 3){
		return elm.nodeValue.length;
	}
	var count = 0;
	for (var i=0, child; child = elm.childNodes[i]; i++){
		count += countCharacters(child);
	}
	return count;
}



