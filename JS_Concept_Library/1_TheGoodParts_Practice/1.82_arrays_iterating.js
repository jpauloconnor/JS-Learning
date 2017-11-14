
var youtubeVideos = ["Fee", "Balance", "Stuff", "More Stuff", "One More"];

youtubeVideos.push('Push');
console.log(youtubeVideos);
youtubeVideos.pop();

var pos = youtubeVideos.indexOf('Fee');
var remove = youtubeVideos.splice(pos, 1);
for (var i = 0; i < youtubeVideos.length; i++){
	console.log(youtubeVideos[i]);
}

console.log("                ")
console.log("                ")
console.log("                ")

//THis is tricky at first, but necessary.


var movies = [ "The Godfather", "Cool Hand Luke", "The Matrix"];

//We need a way to print out a long array. 
//We use a loop.
//We call this iterating over an array.

 /*   Same as the for loop
 here, but instead we loop until
 the end of the array -> movies.length             
 */
for (var i = 0; i < movies.length; i++){

	console.log(movies[i]);
	//We put var i into an array, and
	//each time it loops/iterates,
	//it fills the container with the
	//next item in the movies array
}


//Create an array of actors and iterate over it.

var actors = ["Robert Downey Jr.", "Harrison Ford", "Betty White"];

for (var i = 0; i < actors.length; i++){
	console.log(actors[i]);
}

//Write two to three arrays with for loops that print out the contents of the array.
