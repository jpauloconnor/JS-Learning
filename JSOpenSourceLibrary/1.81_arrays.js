//Array Literals

var emptyArray = [];
var studentArray = ["Fred", "Jordan", "Bobbie"];
var mixedArray = ["Paul", 1, (39<40)];


//Important fact - Arrays start at 0
					//0        1        2
var countryArray = ["USA", "Russia", "China"];

//Accessing items
console.log(studentArray[1]); //1 item
console.log(mixedArray); // all items

//Knowing the .length method is key for later
console.log(mixedArray.length); //Gives the number of items in the array.


//Adding to an array - use  .push() ->This is a prebuilt function that needs a paramter.
studentArray.push("John");
console.log(studentArray); //Now has another person.

//Taking something away
countryArray.pop("China");
console.log(countryArray); //Only has two values now

