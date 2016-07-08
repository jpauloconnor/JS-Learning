
var arrayOfIndianaParks = ["Greatest Park", "Fun Park", "Happy Park", "Too Good to Be True Park"];
console.log(arrayOfIndianaParks);

//Iterate through the array with a for

for (var i=0; i < arrayOfIndianaParks.length; i++){
	console.log(arrayOfIndianaParks[i]);
}

for(var park in arrayOfIndianaParks.length){
	console.log(arrayOfIndianaParks[park]);
}