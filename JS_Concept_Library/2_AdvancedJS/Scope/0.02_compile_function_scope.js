var foo = "foo";

function bar(){
	var foo = "baz";
}

function baz(foo){
	foo = "bam";
	bam = "yay";
}

console.log(foo);
console.log(bar());

// var show = "The Wire";

// function printEpisodeName(){
// 	var printEpisodeName = "Deadwater";
// }

// function printCharacterName(name){
// //	name = "Robb Snow";
// //	seasonNumber = "2";
// }

// console.log(printCharacterName());