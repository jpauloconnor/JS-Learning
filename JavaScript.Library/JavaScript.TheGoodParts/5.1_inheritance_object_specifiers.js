//When parameters for a constructor get too big, we can make an object that hsa

//var anObject = maker(f, l, m, c, s);

var anObject = maker({
	first : f,
	last  : l,
	middle : m,
	state : s,
	city  : c
});

var object = Object.create(anObject);


console.log(anObject);