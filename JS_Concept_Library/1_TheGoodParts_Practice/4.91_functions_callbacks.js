//Callbacks
//Deal with discontinuous events
//an asynchronous request that provides a callback function taht will be invoked when the server's response is received
//async requests is received immediatey so that the client isn't blocked
/*TODO: Come up with examples. 
request = prepare_the_request();
send_request_asynchronously (request, function(resonse){
	display(response);
});
*/

//Help us do things asynchronously
//If the user has to wait for each request, then we're done.
//Use setTimeout to run code later

//Use callbacks to run code after something has happened.
//setTimeout will run a callback after teh number of milliseconds you declare.

//Basic structure:

//1 varaible to hold the timeOut
//2 function to declare after the timeOut
//3 length of the timeout

//1							2			3
//var setATimer = setTimeout(callback, delay);

//This will print in 5

//1
var printNameInFiveSeconds = setTimeout(function(){
	console.log("Paul");	
}, 2000);

//2 Just to show that this is asynchronous
console.log("Hey? Tell me your name.");
var printNameInThreeSeconds = setTimeout(function(){
	console.log("Paul");	
}, 5000);
console.log("Nice to meet you.");



console.log("Loading item #1");
var itemOne = setTimeout(function(){
	console.log("Item #1 is ready.");
}, 2000);

console.log("Loading item #2");
var itemTwo = setTimeout(function(){
	console.log("Item #2 is ready");
}, 1000);

console.log("Loading item #3");
var itemThree = setTimeout(function(){
	console.log("Item #3 is ready");
}, 5000);


console.log("Ready to load something else.");


