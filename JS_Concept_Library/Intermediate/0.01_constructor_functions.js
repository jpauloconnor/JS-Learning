'use strict'

function Student(name, grade){
	this.name = name;
	this.grade = grade;
}

var bob = new Student("Bob", "Senior");
var tom = new Student("Tom", "Junior");

display(bob, tom);