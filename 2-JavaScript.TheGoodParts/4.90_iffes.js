//Example #1 - What is an IFFE?
//IIFE - Immediately invoked function expression

var myIIFEExampleWithUglyVariableName = (function(){
	var aPrivateVar = "just some good ole private secrets that get exposed in the return only";
	return {
		sampleMethod: function(){
			console.log( "Private Variable: ", aPrivateVar );
		}
	};
})();

/* Notice that this breaks */
	//console.log(aPrivateVar);

//Notice that the data is exposed in the return...
myIIFEExampleWithUglyVariableName.sampleMethod();


//Example #2
//creating private data
var bass = (function() {

    // private
    var quarterNote = 'ta ';
    var eigthNote = 'ta ta';
    var sixteenthNote = 'ta ca di me';
    
    return {
        slogan: "Let's do an old fashioned thump off!",

        playQuarterNotes: function() {
            console.log( quarterNote );
        },

        playEigthNotes: function() {
            console.log( eigthNote );
        },

        playSixteenthNotes: function(){
        	console.log( sixteenthNote );
        }
    };
})();

//console.log(quarterNote);
bass.playQuarterNotes();
bass.playEigthNotes();
bass.playSixteenthNotes();

(function () {
var holler = 'Woohoo!'
  console.log(holler);
})();


document.getElementById('#turn-red');
