
var sport = {
	name : "",
	origin: "",
	numberOfPlayers : 0,
	isEasy : false
};

//New object
var basketball = Object.create(sport);
basketball.name = "Basketball";
basketball.origin = "Indiana";
basketball.numberOfPlayers = 10;
basketball.isEasy = true;
basketball.setting = "indoors";
basketball.worstCoachEver = "Gene Keady";
basketball.bestPlayerEver = "Reggie Miller";
basketball.lamestNBAMove = "Kevin Durant to the Warriors";


console.log(basketball.isEasy);
console.log(basketball.setting);
delete basketball.isEasy;
delete basketball.setting;

//Notice that this one will default to the proto.
console.log(basketball.isEasy);

//Notice that this one is undefined.
console.log(basketball.setting);
