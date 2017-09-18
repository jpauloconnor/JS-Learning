alert("lorem ipsum zombie story stuff. What would you like to do?");
var weapon = prompt("You search for a weapon, what do you want? A bow and arrow, an ax, or a rubber chicken?");
var randomNumber = Math.round(Math.random());
console.log(randomNumber);
alert("You attack the zombie with your " + weapon);

if(randomNumber === 0) {
	alert("You were bitten by the Zombie dog...");
} else if(randomNumber === 1) {
	alert("You got him right in the head!!!");
}