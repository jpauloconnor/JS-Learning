//Promises are not about replacing callbacks
//intermediary between calling code and async code(performs task)
//manages callbacks

//event listener
	//register to listen for event that lets you know task is complete
	//event that fires only once

//can be chained
	//series of async steps
	//provide an approximation of async flow control

//It's a future value
	//time-independent container wrapped around a value

//more......


//https://scotch.io/tutorials/javascript-promises-for-dummies

//3 states
	//pending
	//resolved
	//rejected


var dataExists = false;
//ES5 Promise
// Promise
var willReceiveData = new Promise(
    function (resolve, reject) {
        if (dataExists) {
            var data = {
                type: 'JSON',
                source: 'The Cosmos'
            };
            resolve(data); // fulfilled

        } else {
            var reason = new Error('Noting came in, man. The void lives');
            reject(reason); // reject
        }
    }
);

//MSDN Syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise