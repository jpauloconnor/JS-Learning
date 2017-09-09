//6 
// 'use strict'

//1
var sound = "kaboom";
//5 - see note

function outGoTheLights() {
	//2
	var sound = "boom boom";
	console.log(sound);
}

function makeNightSounds(sound) {
	//3
	sound = "hoot hoot";
	//4
	wind = "whish";
}

console.log(sound);
outGoTheLights();

//Execution Perspective:
//1 
//SM: Hey global, I have an lhs ref to sound? Heard of it?
//SC: Yep, you're good. You declared in the compilation.

//2
//SM: Hey scope of outGoTheLights(); I have an lhs reference for sound, ever heard?
	//asking local scope of bar first before going elsewhere.
//SC: Yes, you declared him when we compiled the function.

//Execute makeNightSounds();

//3 
//SM: Hey scope of mNS, I have an lhs reference for sound?
	//Do you have a reference?
//SC: Yes, I have a local variable called sound in the parameter. 
	//Assign to that param

//4
//SM: Hey scope of makeNight I have an LHS reference called to wind
	// Heard of it?
//SC: No I haven't. Go Fish. 
	//Go out one level, outside of the scope of mNS.

//5
//SM: Then, Hey global scope, I've got an LHS reference to 'wind'. 
	//Heard of it?
//SC: Yes I have. I created this one for you in the global scope. 

//This causes the idea of leakage and is one reason JS drives people nuts.

//6
//SC: In strict mode: Nope, never heard of him.

//Notes
//Try console.log on wind.

//If it was declared, there is a var or function. 
//No declaration, it's in undeclared.
	//Unable to fulfill request to find reference.
	//Undeclared means we were unable to find lhs reference in any scope.

//Undefined & Undeclared are very different.

//Undefined: Was declared, but has an empty value.
	// A better way to put it is uninitialized.
	//Undefined is a value that injects itself.
	//It's a proper value. Type that exists that has a value of undefined.
