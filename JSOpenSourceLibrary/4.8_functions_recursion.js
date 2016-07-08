//Recursive

//A recurisve function calls itself.

var hanoi = function hanoi(disc, src, aux, dst){
	if (disc> 0){
		hanoi(disc-1, src, dst, aux);
		console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
		hanoi(disc-1, aux, src, dst);
	}
};

hanoi(1, 'Src', 'Aux', 'Dst');

//currently
//lh in 3rd
//mb in 2nd
//cow in 1st

var countdown = function(value){
	if (value > 0){
		console.log(value);
		return countdown(value-1);
	}else{
		return value;
	}
};

countdown(10);