/*  
Write an anonymous self-invoking function to take only numbers 
as parameters and print addition of all.
Ex: if 1,2,3 passed as parameter then result will be 6
*/

(function addParams() {
  var result = [...arguments];
  var count = 0;
  for (var i = 0; i < result.length; i++) {
    count += result[i];
  }
  console.log('output', count);
})(1, 2, 3, 4);

//const addParamsArrow = a => b => b ? addParamsArrow(a+b) : b;

const addParamsArrow = (...args) => {
  console.log(
    'output2',
    args.reduce((acc, curr) => acc + curr)
  );
};

console.log('output2', addParamsArrow(1, 2, 3));

/*  
/*Change name and add the languages you know to candidate object 
and print on console. 
ex: {name:"Anjan", languages:['English', 'Odia'], country:'India'}*/
const candidate = { name: 'your name', country: 'India' };
Object.freeze(candidate);
/* Write your code below this line */

let res = { ...candidate, name: 'Noble', language: ['English', 'Odiaa'] };

//candidate.name = "Noble";
//candidate.language = ["English","Odia"];

console.log('output ', res);

//case : "Updatevalue":
//let res = action.payload;
//return {...state, productDetails : res };
