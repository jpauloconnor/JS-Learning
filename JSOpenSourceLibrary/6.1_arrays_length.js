var listOfHotPeppersEatenByContestants = [3, 4, 2, 10, 3, 5];

//Prints out the lenght of the array
console.log(listOfHotPeppersEatenByContestants.length);


listOfHotPeppersEatenByContestants[listOfHotPeppersEatenByContestants.length] = 12;
//You can append the array like this:
console.log(listOfHotPeppersEatenByContestants.length);


//PUSH is easier though
listOfHotPeppersEatenByContestants.push(21);
console.log("7 is now the last spot: " + listOfHotPeppersEatenByContestants[7]);

console.log(listOfHotPeppersEatenByContestants.length);

