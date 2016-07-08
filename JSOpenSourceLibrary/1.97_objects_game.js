
var player = {
	name		   : "",
	life           : 100,
	damage         : 0,   //attackPower
	protection     : 0,
	hasSword       : true,
	hasPistol	   : true,
	hasSniperRifle : true,
	healthBonus    : 0,
	rank           : ["soldier", "captain", "mage", "beast"], 
	
	challenge : function(){
		console.log("Would anyone care to fight?");
	},

	attack: function(target){
		console.log(this + " attacks " + target + "for" + this.damage + "damage");
		target.life -= this.damage;
	},

	healthBonus : function(player){
		var extraLife = 10;
		console.log(this + " picked up " + extraLife + " life from a health pack.");
		player.life += extraLife;
	},

	toString : function() {
		return "player";
	},	
	
	swatWithSword : function() {
		var damage = 25*this.damage;
		console.log(this + " did " + damage + " damage to " + target + " with the sword." )
		target.life -= damage;
	},

	pickedUpSword : function() {
		if (this.hasSword == true)
		{
			console.log(this.name + " picked up the sword.")
		}
	},

	snipe: function(target){
		var damage = 20*this.damage;
		console.log(this + ' did ' + damage + " damage to " + target + " with the sniper rifle.");
		target.life -= damage;
	},	

	gameOver : function(player) {
		var lifeLevel = player.life;
		if (lifeLevel === 0) {
			console.log(this + ' has ' + lifeLevel + " life. The game is over.");
		} 
	},

	rankBonus : function(player) {
		var rankLevel = player.rank;
		if (rankLevel === "Captain") {
			console.log(this + " is a " + rankLevel + " and is 10% stronger.");
		} else if (rankLevel = "Soldier"){
			console.log(this + " is a " + rankLevel + " and hit power is normal.");
		} else {
			console.log("He is not alive.");
		}
	}
};


//create the instance of the object
var doug = Object.create(player);
doug.life += 150;
doug.name = "Doug";
console.log(doug.life);
console.log(doug.hasSniperRifle);
doug.pickedUpSword();
