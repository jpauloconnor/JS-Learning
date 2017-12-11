//The indexOf() method returns the first index 
//at which a given element can be found in the array,
//or -1 if it is not present.

var a = [2, 9, 9]; 
a.indexOf(2); // 0 
a.indexOf(7); // -1

if (a.indexOf(7) === -1) {
  // element doesn't exist in array
}
console.log(a);


var array = [1, 2, 9, 9];  
var checkOne = array.indexOf(2, 1);
console.log("1:", checkOne);

var arrTwo = array.indexOf(7);     // -1
console.log(arrTwo);

var arrThree = array.indexOf(9, 2, 5);  // 2
console.log("3:", arrThree);

array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';


var idx = array.indexOf(element);

while (idx != -1) {
  indices.push(idx);
  console.log("indice:", indices);
  idx = array.indexOf(element, idx + 1);
  console.log("idx:", idx);
}
console.log("indices:", indices);
// [0, 2, 4]