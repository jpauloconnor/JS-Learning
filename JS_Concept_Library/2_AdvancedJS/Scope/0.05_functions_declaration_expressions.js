//function declaration

//Registered in the global scope
function bar(){
	var foo = "baz";
}

//named function expression
var foo = function barr(){

}

//When you use anonymous function expressions
// 1. when you have an anonymous function, we can't refer to ourself. Recursion
// 2. error in production code, anonymous functions don't play well in debugging.
// 3. self-documents



