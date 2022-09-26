function memorize(fn) {
  let res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(this, ...args);
    }
    return res[argsCache];
  };
}

const catching = (num1, num2) => {
  for (var i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};
const M = memorize(catching);

console.time('function call');
console.log(M(3, 4));
console.timeEnd('function call');

console.time('S function call');
console.log(M(3, 4));
console.timeEnd('S function call');

//Memorize factorial and faibanocci series
const fac = memorize((x) => {
  if (x == 1 || x == 0) return x;
  return fac(x - 1) + fac(x - 2);
});
console.log('output 5', fac(5));
