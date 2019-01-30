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


var hanoi = function (disc, src, aux, dst){
	if (disc>0){
		hanoi(disc -1, src, dst, aux);
		console.log("Move disc " + disc + 'from ' + src + 'to ' + dst);
		hanoi(disc-1, aux, src, dst);
	}
};

hanoi(3, 'src', 'aux', 'bot');




