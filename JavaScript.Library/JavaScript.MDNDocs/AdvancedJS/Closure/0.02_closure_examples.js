function foo(){
	var bar = "bar";

	return function() {
		console.log(bar);
	};
}

function bam(){
	foo()();
}

bam();

// bam - first set of parens gets function back
//second set of parens send it ouside of lexical scope

function fooTwo() {
	var bar = "bar";

	setTimeout(function(){
		console.log(bar);
	}, 1000);
}

fooTwo();

//If you did something to bar between declaration and setTimeout second,
//it takes the current value...
// var i = 10;
// (function(i){
// 	 	setTimeout(function(){
// 	 		console.log("i: " + i);
// 	 	}, i*1000); 

// 	 })(i);
// console.log(i);
 for (var i=1; i<=15; i+=4){
 	
 	(function(i){
	 	setTimeout(function(){
	 		console.log("i: " + i);
	 	}, i*1000); 

	 })(i);

 }

 //prints out 6 each time...
 //normally belabor as an exercise
 //