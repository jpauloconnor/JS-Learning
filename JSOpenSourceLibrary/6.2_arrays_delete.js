
//Notice the hole this leaves
var deleteNumberDemo = [1,2,3,4,5,6];
delete deleteNumberDemo[2];
console.log(deleteNumberDemo);

//Notice how this moves it
var spliceNumberDemo = [1,2,3,4,5];
spliceNumberDemo.splice(2,1);
	//The first number picks the spot in the array.
	//The second number says how many numbers to delte.
console.log(spliceNumberDemo);


//Another splice example
var anotherSpliceExample = [1,2,3,4,5,6];
anotherSpliceExample.splice(2,4);
	//Start at the second ordinal. 
	//Delete the next four spots.
	//Push everything back.
console.log(anotherSpliceExample);
