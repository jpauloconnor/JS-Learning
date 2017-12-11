
/* REVIEW: Two types of functions in JS */

	/***** 1 *****/
// **FUNCTION EXPRESSION**
var yellFoo = function(){
	console.log("FOOOOOOO!!!!");
};
yellFoo();


	/***** 2 *****/
/***** FUNCTION DECLARATION*****/
function sayFoo(){
	console.log("Foo.");
};


	/****  IFFE  *****/
/****  IMMEDIATELY INVOKED FUNCTION EXPRESSION  *****/
/****  The surrounding parens make it a Function Expression(like #1) ****/

(function IIFE(){
  var whisperFoo = "shhhh.... foo....";
  console.log(whisperFoo);
})();  //<----The closing parens make it run immediately. Don't need to call it.


//Function Declaration
function counter(){
  for (var i = 0; i < 3; ++i){
   console.log(i)
 }
}
counter(); //<----Needs to be called.


(function counter(){ //notice the open parenthens at the start of this line
  for(var i = 10; i < 13; ++i){
    console.log(i);
  }
})(); //<----Immediately runs and value is exposed to the global scope.