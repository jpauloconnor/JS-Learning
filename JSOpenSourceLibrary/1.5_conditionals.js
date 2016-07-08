//boolean
var isOn = true;
var isHot = false;
//1
if(isOn) {
	console.log("The light is on. It's bright.");
}

//2
if (isOn === true) {
	console.log("The light is on");
}

//3
if (isOn && isHot) {
	console.log("Lights on and it's hot");
}

//4
if (isOn || isHot) {
	console.log("lights on or it is hot")
} 

//5
if(!isHot) {
	console.log("it is not hot")
}

//6 - New variables - add these as you build the examples.

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

//7
if (elevatorUp === true) {    //Note: You don't have to have the ===
	console.log("Going up");
} else {
	console.log("Going down");
}  

//Write one for elevator broken:
if (elevatorBroken) {    //Note: You don't have to have the ===
	console.log("Bummer. Let's take the stairs.");
} else {
	console.log("Which floor?");
}  

//Write another one for stuck:
if (elevatorStuckWhileWeAreOnIt){
	console.log("Oh no! We're stuck!");
} else {
	console.log("This elevator is fast.");
}

//But maybe we're standing there waiting?
if(elevatorBroken && elevatorDown){
	console.log("I hope this thing doesn't start flying down!");
} else {
	console.log("How long are you in town for?");
}

if(elevatorBroken || elevatorStuckWhileWeAreOnIt){
	console.log("Hi Bob, this is Bob with maintenance. How can I help?");
}

//Using ints and other types
if(elevatorNumber === 13 && elevatorStuckWhileWeAreOnIt){
	console.log("This is not our lucky day!");
}


//CHALLENGE/WORK TIME: WRITE YOUR OWN CONDITIONAL WITH SOME KIND OF 
// STORY OR THEME LIKE THE ONE ABOVE


//Challenge:
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.
var bankAccount = 5000;
var debt = 4200;
var difference = bankAccount - debt;

console.log("I have $" + bankAccount + " in my bank account, and I am $" + debt + " in debt.");
  	
if ((bankAccount - debt) > 700) {
		console.log("I have some extra money. I should pay off my debt. I'll have $" + difference + " leftover.");	
	} else {
		console.log("It probably isn't a good time to pay off my debt.");
}  		
