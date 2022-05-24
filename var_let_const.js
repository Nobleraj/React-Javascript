//var let const

//var - function scope
//we can declared and redeclared variable

var a = 10;
var a = 20;

//let const - block scope
//we can't redeclare the variable
let a = 10;
let a = 20; //will give u an error

//let -  can be initialized again but const won't
let a = 20;
a = 30;

//var and let can be declared without value
var a;
let a;
//but we can't declare const without variable
const a = 1;

//Hosting - normal function differ form arrow function
//if we assign the function to var variable and called before initialization we get undefined
// if we assign the function with let or const variable and called before initialization we get reference error
