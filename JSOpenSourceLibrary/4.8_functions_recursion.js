//Recursive

//A recurisve function calls itself.


//This could be done with a while loop, but this is a demo.
var timer = function(seconds){
	if (seconds > 0){
		console.log(seconds);
		return timer(seconds-1);
	}else{
		return seconds;
	}
};

timer(10);