var btn = document.querySelector('.button-one');
var btnTwo = document.querySelector('.button-two');
var btnThree = document.querySelector('.button-three');
var btnFour = document.querySelector('.button-four');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  console.log(rndCol);
  document.body.style.backgroundColor = rndCol;
}

btnTwo.ondblclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  console.log(rndCol);
  document.body.style.backgroundColor = rndCol;
}

btnThree.onfocus = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  console.log(rndCol);
  document.body.style.backgroundColor = rndCol;
}

//try onmouseout

btnFour.onmouseover = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  console.log(rndCol);
  document.body.style.backgroundColor = rndCol;
}

window.onkeypress = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  console.log(rndCol);
  document.body.style.backgroundColor = rndCol;
}


var buttons = document.querySelectorAll('.buttons');

for (var i = 0; i < buttons.length; i++) {
	console.log(buttons);
  buttons[i].onclick = bgChange;
}

//Don't call this sucker inline. Bad practice. 
function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

function bgToRed() {
  var redColor = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
  document.body.style.backgroundColor = redColor;
}

document.getElementById('the-box').addEventListener('click', function () {
	console.log('Stuff');
});

var boxButton = document.getElementById('the-box');

document.getElementById('the-box').addEventListener('click', bgChange);
// document.getElementById('the-box').addEventListener('click', bgToRed);
