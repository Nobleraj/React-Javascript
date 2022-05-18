//Iterators - can iterate the array with new keyword Symbol.Iterators

const array = [1, 2, 3, 4];

const iterator = array[Symbol.iterator]();

//with the help of next() function, we can able to itearte the array with one by one. the next() function returns an object {value : '', done : false };
console.log(iterator.next());

//Generators - In iterator we iterated the array but in genarator we can dynamically iterate the function with yield.
//yield produce the value and pause the state
//on next time, when we call with next() method, it yields the value and pause it
function* gen() {
  yield 3;
  yield 4;
  yield 5;
}
const it = gen();
console.log(it.next());
console.log(it.next());
console.log(it.next());

//Real time scenarios - we can use it for ajax call, once we ge the first api response then we ll call the sencond one

const api = (url) => {
  return new Promise((res, rej) => {
    res('dd');
  });
};
function* dyn() {
  yield api('hello');
  yield api('hi');
}
