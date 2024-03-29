//Group the user array by role
const users = [
  {
    firstName: 'Ram',
    lastName: 'Kumar',
    role: 'SE',
    age: 40,
    DOB: '12-20-1981',
  },
  { firstName: 'Max', age: 35 },
  { firstName: 'Hari', lastName: 'Prasath', role: 'SSE', age: 30 },
];
// output
// {
//   SE: [
//     { name: 'Ram Kumar', age: 40, DOB: '12-20-1981' },
//   ],
//   SSE: [
//     { name: 'Hari Prasath', age: 30 },
//   ],
//   others: [
//     { name: 'Max', age: 35 },
//   ],
// }
//Approach 1
function groupUserRole(user, role) {
  let result = {};
  for (var i = 0; i < user.length; i++) {
    let currUser = user[i];
    let currKey = currUser[role] ? currUser[role] : 'others';
    if (!result[currKey]) {
      result[currKey] = [];
    }
    let name = (currUser.firstName || '') + ' ' + (currUser.lastName || '');
    let obj = { name: name.trim(), ...currUser };
    delete obj.firstName;
    delete obj.lastName;
    delete obj.role;
    result[currKey].push(obj);
  }
  return result;
}
console.log(groupUserRole(users, 'role'));

//Approach 2 with reduce
function roleWithReduce(user, key) {
  let result = user.reduce((result, currentValue) => {
    let currKey = currentValue[key] ? currentValue[key] : 'others';
    if (!result[currKey]) {
      result[currKey] = [];
    }
    let name =
      (currentValue.firstName || '') + ' ' + (currentValue.lastName || '');
    let obj = { name: name.trim(), ...currentValue };
    delete obj.firstName;
    delete obj.lastName;
    delete obj.role;
    result[currKey].push(obj);
    return result;
  }, {});
  return result;
}
console.log(roleWithReduce(users, 'role'));

//setTimeout run after defined second ?
console.time('time');
setTimeout(() => console.timeEnd('time'), 200);

//put and patch API
//POST -  is always for creating a resource ( does not matter if it was duplicated )
//PUT - is for checking if resource exists then update, else create new resource
//PATCH - is always for updating a resource
//GET - read
//DELETE - delete

//improve performance of web application

//Promise vs async await - fastest to execute
const prom = new Promise((res, rej) => {
  //setTimeout(res,2000,"Hello");
  res('Hello');
});

(async () => {
  console.time('async');
  const ans = await prom;
  console.timeEnd('async', ans);
})();

console.time('prom');
prom.then((res) => {
  console.timeEnd('prom', res);
});

//Array destructuring
let a, b, rest;
let arr = [1, 2, 3, 4, 6];
//destructure code
[a, b, c, ...rest] = arr;
console.log('ans', rest);

let obj = { a: 10, b: 20, c: 30, d: 40 };
//destructure code
({ a, b, ...rest } = obj);
console.log(a, b, rest);
