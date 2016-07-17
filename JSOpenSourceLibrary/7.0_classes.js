//Must use strict mode to be able to use classes.
"use strict";
//As of ECM6, we can now make traditional functions
class Player {
	constructor(name, number){
		this.name = name
		this.number = number
	}
}

var andrewLuck = new Player("Andrew Luck", 19);
console.log(andrewLuck);