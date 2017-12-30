//Basic 
let samplePromise = new Promise((resolve, reject) => {
  // resolve(...) when what we were doing asynchronously was successful
  //reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); 
  }, 200);
});

samplePromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Righteous! " + successMessage);
});


//Basic not looking

let kickedFieldGoal = new Promise((resolve, reject) =>{
	setTimeout(function(){
		resolve("Got it!!!")
	}, 3000)
});

kickedFieldGoal.then((success) => {
	console.log("The audience waits to see if the field goal was made...." + success);
});

