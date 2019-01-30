//Closures come from Lambda calculus

//Definition: When a function remembers its lexical scope
	//even when the function is executed outside that lexical scope


function zebra() {
	var ape = "ape";

	function cat() {
		console.log(ape);
	}

	monkey(cat);
}


function monkey(cat){
	cat();
}

zebra();

