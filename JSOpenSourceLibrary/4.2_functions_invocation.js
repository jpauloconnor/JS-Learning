//FUNCTION as a METHOD

var house = {
	value : 100000,
	increase : function(up){
		this.value += typeof up === 'number' ? up : this.value * 0.03;
	}
};

//Parameter is passed.
house.increase(1);
console.log(house.value);

//The parameter is optional for the above function.
house.increase();
console.log(house.value);



//Function Invocation Pattern
var houseValue = house.increase(3);
console.log(houseValue);