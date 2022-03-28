//Map vs forEach
//map return new array with transformed elements
// we can chain stuffs on map FILTER
const array = [1, 2, 3, 4, 5];

const map = array.map((ar) => {
  return ar + 2;
});

//we can alter the main array
//line ar[index] = ar + 2';
const each = array.forEach((ar) => {
  return ar + 2;
});

console.log('map', map, 'forEach', each);

//NULL vs undfined
//Null is an actual value
//undfined means that the variable is decalred, but it's not initialized
console.log('null', typeof null);
console.log('undefined', typeof undefined);

//output for this
console.log(null == undefined); //true
console.log(null === undefined); //false

//Flatten the array
let ar = [[1, 2], [2, 4, 5], [6, 7, 8, 9], [2]];
let ar1 = [[1, 2], [2, 4, 5], [6, 7, [8, 9]], [2]];
//flatten array
const flatten = [].concat(...ar);
//inbuilt method
//flat(2) means depth two levels
const flatten_ = ar.flat(2);

//custom code to flatten array
function flatArray(array, depth = 1) {
  let temp = [];
  array.forEach((a) => {
    if (Array.isArray(a) && depth > 0) {
      temp.push(...flat(a, depth - 1));
    } else {
      temp.push(a);
    }
  });
  return temp;
}
flatArray(ar, 2); //we can give depth as a parameter
