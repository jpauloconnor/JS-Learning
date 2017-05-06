
function addThree(a, b, c){
	return a + b + c;
}

//6
console.log(addThree(1,2,3));

//6 - extra argument gets ignored.
console.log(addThree(1,2,3,4));

//NaN - if an arg hasn't been provided, it's NaN.
console.log(addThree(1,2));

