
//While Loops

//Create a variable
var score = 0;
		//Set a condition in parens
while(score < 10){
	//Set an increment operation
	score++;
	//Print to the console
	console.log("Score: ", score);
}

//Another example
var age = 0;
while(age < 100){
	age+=10;
	console.log("Age:", age);
}

if (age === 100){
	console.log("I made it!");
}

//A challenge -create a while loop that prints 10-100 by 10s. AT 50
// print "Halfway there!"

var counter = 0;
while(counter < 100){
	counter+=10;
	if(counter === 50){
		console.log("There's halfway");
	} else {
		console.log(counter);
	}
}

