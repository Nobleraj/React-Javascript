//Flatten deeply nested object
const flattenDeeplyNestedObj = (obj, parent) => {
  let flattenObj = {};
  for (var key in obj) {
    const newParent = parent + key;
    const value = obj[key];
    if (typeof value === 'object') {
      flattenObj = {
        ...flattenObj,
        ...flattenDeeplyNestedObj(value, newParent + '.'),
      };
    } else {
      flattenObj[newParent] = value;
    }
  }
  return flattenObj;
};

const obj = {
  A: 22,
  B: 'Hello',
  C: {
    D: 55,
    E: {
      F: [1, 2],
    },
    H: 'String',
  },
};
console.log('output', flattenDeeplyNestedObj(obj, ''));
