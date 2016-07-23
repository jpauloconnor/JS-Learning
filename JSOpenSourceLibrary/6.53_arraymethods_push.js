var cheeses = ["gouda", "mozarella", "cheddar"];
var meats = ["ham", "turkey", "roast beef", "bacon"];
cheeses.push("goat");

for (var i = 0; i < cheeses.length; i++){
	console.log(cheeses[i]);
}

meats.push("chorizo")
for (var i = 0; i < meats.length; i++){
	console.log(meats[i]);
}


var times = [
	["5:43", "5:33"], 
	["5:23", "5:44"],
	["5:23", "5:44"],
];

var timesArray = [];

for (var i = 0; i < times.length; i++){
	for (var x = 0; x < times[i].length; x++){
		timesArray.push(times[i][x]);
	}
}

console.log(timesArray);



