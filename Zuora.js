// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// let array = [4, 5, 6, 7, 0, 1, 2],
//   target = 0;

// const getTarget = (arr, target) => {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == target) {
//       return i;
//     }
//   }
//   return ans;
// };

// console.log("ans", getTarget(array, target));

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// const getNumber = (arr) => {
//   let ans = [];
//   for (var i = 0; i < arr.length; i++) {
//     let count = 1;
//     for (var j = 0; j < arr.length; j++) {
//       if (i != j) {
//         count *= arr[j];
//       }
//     }
//     ans.push(count);
//     count = 1;
//   }
//   return ans;
// };
// let nums = [1, 2, 3, 4];
// const getNumber = (arr) => {
//   let ans = [];
//   let totalMul = 1;
//   for (var i = 0; i < arr.length; i++) {
//     totalMul *= arr[i];
//   }
//   ans.push(totalMul);
//   for (var j = 1; j < arr.length; j++) {
//     ans.push(totalMul / arr[j]);
//   }
//   return ans;
// };
// console.log("ans", getNumber(nums));

//Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
// Output: [1, 1, 2, 3, 4, 4];

let a = [1, 2, 4],
  b = [1, 3, 4];

// i 0 1 2
// j 1 1 1
const sortNumber = (arr1, arr2) => {
  const n = arr1.length;
  const n2 = arr2.length;
  let i = 0,
    j = 0;
  ans = [];
  while (i < n && j < n2) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }
  while (i < n) {
    ans.push(arr1[i]);
    i++;
  }
  while (j < n2) {
    ans.push(arr2[j]);
    j++;
  }
  return ans;
};

console.log('ans', sortNumber(a, b));
