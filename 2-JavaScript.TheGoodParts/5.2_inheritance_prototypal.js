//Discpense with classes

//Make a useful object

var player = {
	sport : "",
	name : "",
	team : "Indiana Pacers",

	//Mehods
	printQuote : function(){
		console.log(this.name + " of the " + this.team + this.sport + " stated: ");
	}

};



var luck = Object.create(player);
luck.name = "Andrew Luck";
luck.team = "Indianapolis Colts";

//differential inheritance - customizing a new object
luck.cryAfterSuperBowlWin = function(){
	this.printQuote();
	console.log('"We won! We won!"');
};

luck.cryAfterSuperBowlWin();