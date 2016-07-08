
var empty_object = {};


var movie = {
	name : "The Godfather",
	director: "Martin Scorsese"
};

//Use . to access
console.log(movie.name); 
console.log(movie["name"]);//No one does this

//Quotes are optional around property names
var band = {
	"name" : "Weird Al Yankovic",
	"numberAlbums": 1,
};

console.log(band.name);
console.log(band.numberAlbums);



//Nesting - More complex stuff
var netflix = {
	id: 1,
	name: "",
	seasonInfo: {
		episodeInfo : [
			{ episode: 1, episodeName: "Hey Paul"},
			{ episode: 2, episodeName: "Yes Paul"}
		]
	}
};

console.log("All data:", netflix);
console.log("Just season info: ", netflix.seasonInfo);
console.log("Episode Number: ", netflix.seasonInfo.episodeInfo[0].episode);


//We could loop over the episode info array like this

for (var container in netflix.seasonInfo.episodeInfo.episodeName){
	console.log(netflix.seasonInfo.episodeInfo[container].episodeName);
}