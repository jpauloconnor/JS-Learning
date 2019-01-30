/*
1/30/2019 -> Learning Generators to gain a better understanding of how they 
are implemented with redux-saga.
*/

//Generators are functions which can be exited and later re-entered. 
//Their context (variable bindings) will be saved across re-entrances.

function* idMaker() {
    let foo = 0

    while (foo < foo + 1)
      yield foo++;
  }
  
  let gen = idMaker();
  console.log(gen) //<-- Generator object.
  console.log("First val:", gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().done); // 3
