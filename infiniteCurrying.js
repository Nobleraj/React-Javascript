function infiniteCurring(a) {
  return (b) => {
    if (b) {
      return infiniteCurring(a + b);
    }
    return a;
  };
}

const currying = (a) => (b) => b ? currying(a + b) : a;

console.log(infiniteCurring(2)(8)());

//currying function accetpes 5 arguments
let ARG_LEN = 5;

const sum = (...args) => {
  if (args.length === ARG_LEN) return args.reduce((acc, cur) => acc + cur);
  return (...arg2) => {
    args = args.concat(arg2);
    return sum(...args);
  };
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4)(5));
console.log(sum(1, 2, 3)(4, 5));
console.log(sum(1)(2, 3, 4, 5));
console.log(sum(1)(2)(3)(4)(5));
console.log(sum(1)(2)(3)(4)(5));

//curring function that returns sum of previos value
const curring = () => {
  let prev = 0;
  return (newValue = 0) => {
    prev += newValue;
    return prev;
  };
};
const add = curring();

console.log(add(1));
console.log(add(5));
console.log(add(4));
console.log(add());
console.log(add(1));
