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
//put and patch API
//improve performance of web application
//Promise vs async await - fastest to execute
