//argument object

//available in all functions

//like an array, but not really an array

function someFunction(a, b, c){
	return a + b + c;
}


function anotherFunction(){
	var x = 0;
	for (var i = 0; i < arguments.length; i++){
		x = x + arguments[i];
	}

	return x;
}

console.log(anotherFunction());