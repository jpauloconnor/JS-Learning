var foo = "foo";

//Top two most popular patterns
(function(){
	var foo = "foo2";
	console.log(foo);
})(); //wrapped in parens to make it an expression
	  //it runs immediately
	  //protect stuff in global namespace
	  //100 functions that need to be private

//Runtime says: I have an immediate value.
//We can immediately execute it....
//Compiled ahead of time, but executes when it get to the line.


var foobar = "foobar";

(function(bar){
	var foobar = bar;
	console.log(foobar + " inside anonymous function");
})(foobar);

console.log(foobar);


var hello = "hello";

(function helloFolks(howdy){
	var greeting = howdy;
	console.log(greeting + howdy);
})(hello);

