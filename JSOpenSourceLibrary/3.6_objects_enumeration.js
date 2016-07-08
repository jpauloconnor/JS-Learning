//for in 

var country = {
	capitol : "Tegucigalpa",
	country: "Honduras",
	mainExport: "Bananas"
}

//for in 
//This enumerates everything
for (var name in country){
	if (typeof country[name] !== 'function'){
		console.log(country[name]);
	}
}


var properties = [
	'capitol',
	'country',
	'mainExport'
];

//If we want to ensure a particular order, we can do something like this:
for(var i=0; i < properties.length; i+=1){
	console.log(country[i] + ': ' + country[properties[i]]);
}

//TODO: Figure out - Can't think of why it's coming back undefined.