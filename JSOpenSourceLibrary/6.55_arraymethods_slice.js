//slice makes a copy of a part of the array

var numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers);

//First number is start.
//Second number is end. It will not print the end.
var numbersTwo = numbers.slice(0,3);
console.log(numbersTwo);

console.log(numbers);
var numbersThree = numbers.slice(4,9);
console.log(numbersThree);