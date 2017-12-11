var color = "red";

function shineBlue() {
	var color = "blue";

	function turnElectric(color) {
		color = "electric blue";
		happy = "my favorite";
	}
	turnElectric();
}

//COMPILE PHASE
/* 
	CO = Compiler
	GS = Global Scope 
	BA = Scope of bar()
	BZ = Scope of baz();
*/

//1
//CO: Hey Global Scope, I have a dec called foo.
//GS: Got it.

//2
//CO: Hey GS, I have function called bar. Can I register?
//GL: Ok.

//CO finishes with 
//CO: Hey GS, I have a 

//EXECUTION PHASE