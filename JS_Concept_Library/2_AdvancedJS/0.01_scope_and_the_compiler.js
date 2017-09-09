//Looking at the code like a JS Compiler
//Compiler will go through and find declarations.
	//Scope Manager: Which scope am I in?
	//Ok. Move on.

//Global declaration - move on
var foo = "bar"; //variable dec with initializer
				//two operations - declaration & initialization

//LHS  Left Hand Side is the target   - foo
//RHS  Right Hand Side - source value - bar

//Scope Manager: I have a LHS reference. Have you heard of foo in the global scope?
//Scope responds back....Ok, I've got it.

//Defer compilation - JIT
//JIT - Just in Time Compilation - it moves on
//The compilers are more complex that a top down approach and
//registering to a particular scope
//JIT - bar() is not being called. Skip over it.
function bar(){
	//This is in the scope of bar.
	//Compile converses with scope of bar

	//After compilation phase 
	var foo = "baz";
}

//No conversation in the global scope until it's called

bar();
//Hey scope of bar,(local scope of bar) I have an LHS ref for a var called foo...
//Hands back a reference...


//pop out to Global scope
	//foo is treated like a local var
	//declaration to declare in the scope of baz
function baz(foo) {
	foo = "bam";
	bam = "yay";
}


//Hey scope of baz do you have an lhs reference called foo?
//yea...It's foo
//Here's the crazy part
//He scope of baz, do you have a reference called "bam"?
//No, I don't. I'll go ahead an create a variable called bam in the
	//global scope

baz("Hey");
	//Notice that bam is global
	console.log(bam);
	//Why is it undefined here?
	console.log(baz());

//undeclared - no present declaration
//undefined - uninitialized - it's a type 

//This would be an RHS reference to a global scope called bar.
//Go and retrieve the value.
//Gets a function back.


/*
var foo = "bar";

function bar() {
	var foo = "baz";

	function baz(foo) {
		foo = "bam";
		bam = "yay";
	}
	baz();
}

hey global scope, have you heard of bar();
yes, i have. here you go

bar();
hey global scope, have you heard of foo
yes i have...
foo;
hey global scope, have you heard of 'bam'?
No, let me make it...
bam;
baz();

*/