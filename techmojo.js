//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

//find sum of salaries in a nested object
let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 1600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

function dynamicObj(src) {
  let result = 0;
  let keys = Object.keys(src);
  for (var i = 0; i < keys.length; i++) {
    let innerObj = src[keys[i]];
    if (Array.isArray(innerObj)) {
      for (var j = 0; j < innerObj.length; j++) {
        result += innerObj[j].salary;
      }
    } else {
      result += dynamicObj(innerObj);
    }
  }
  return result;
}
