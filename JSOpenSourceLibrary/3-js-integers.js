
//JavaScript has a single number type.
var x = 7;
var y = 7.1;

//In another language you might have something like this:
// int x = 7;
// double y = 7.1;

console.log(7 + 7.1);


//Some basics 
var multiply = x * y;
var divide = x / y;
var subtract = x - y;

console.log(multiply);

//What does this do?
var a = 14;
var b = 10;

var modulus = a % b;
console.log(modulus);


//exponents 1e2 
//Number before e * 10 raised to the power after the e.
var exponent = 1e2; // 10 X 10
console.log(exponent);

var anotherExponent = 1e3; //10 X 10 X 10
console.log(anotherExponent);

var thirdexponent = 2e2; //2 x 10 X 10
console.log(thirdexponent);

console.log(3e1); //3 x 10
console.log(3e2); //3 x 10 x 10
console.log(3e3); //3 x 10 X 10 X 10 


var negativeNumbers = -5;

//This will break the Node console
// var Not_a_Number = 5 * buttermilk;
// console.log(Not_a_Number);

//Detects NaN for you
var notNum = isNaN("Gummy Worm");
console.log("is it true that gummy worm is not a number? ->", notNum);

console.log(Infinity + 5);

//A look ahead at prebuilt methods
var z = Math.floor(y);;
console.log(z);