//call apply bind
var person = {
  name: 'JS Starter',
  hello: function (value) {
    return this.name + ' ' + value;
  },
};
console.log('obj', person.hello('Hi'));

//call
var Noble = {
  name: 'Demo',
};
//call takes an object which is going to become the context of this particular function

console.log('call', person.hello.call(Noble, 'Good to go'));

console.log('apply', person.hello.apply(Noble, 'Good to go'));

//Bind does't take second param, it takes a context
//its returns completely a new function with this context
const hello = person.hello.bind(Noble);

console.log('bind', hello('Demo'));

//oputput based questions

//Append an array to another array
const array = [1, 2, 3];
const elem = ['a', 'b'];

console.log('append', array.push.apply(array, elem));

//Find min max
console.log('Max ', Math.max.apply(null, array));
console.log('Min ', Math.min.apply(null, array));

//Custom call apply and bind
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this != 'function') {
    throw new Error(this + ' not callable');
  }
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myApply = function (context = {}, args) {
  if (typeof this != 'function') {
    throw new Error(this + ' not callable');
  }
  if (!Array.isArray(args)) {
    throw new TypeError('CreateListFromArray like called on non object');
  }
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this != 'function') {
    throw new Error(this + ' not callable');
  }
  context.fn = this;
  return function (...newArg) {
    return context.fn(...args, ...newArg);
  };
};

//1.
const person = { name: 'Coder' };

function hello(age) {
  return `${this.name} is age: ${age}`;
}

console.log('call', hello.call(person, 24)); //it executes the function
console.log('bind', hello.bind(person, 24)); //it return new function

//2.
const age = 10;
var person = {
  name: 'Noble',
  age: 25,
  getAge: function () {
    return this.age;
  },
};
var person2 = { age: 29 };
console.log('output ', person.getAge.call(person2)); // 29
console.log('output ', person.getAge()); //25
