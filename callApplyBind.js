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
