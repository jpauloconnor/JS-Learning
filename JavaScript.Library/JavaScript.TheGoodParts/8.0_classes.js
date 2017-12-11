//Must use strict mode to be able to use classes.
"use strict";
//As of ECM6, we can now make traditional functions
class Player {
	constructor(name, number){
		this.name = name,
		this.number = number
	}
}

var andrewLuck = new Player("Andrew Luck", 19);
console.log(andrewLuck);




function isRightTriangle(side, base, hypo){
	var hypotenuese = hypo * hypo;
	var baseAndSide = (side * side) + (base * base) 
	if(hypotenuese === baseAndSide){
		return true;		
	} else {
		return false;
	}
}

console.log(isRightTriangle(3,4,5))
console.log(isRightTriangle(5,6,7))