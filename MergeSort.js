function merge(A, a) {
  if (A.length < 2) {
    return A;
  }
  let div = A.length / 2;

  let lef = [],
    righ = [];

  for (var i = 0; i < div; i++) {
    lef.push(A[i]);
  }
  for (var j = Math.round(div); j < A.length; j++) {
    righ.push(A[j]);
  }
  let ls = merge(lef, 'lef');
  let rs = merge(righ, 'righ');

  return sort(ls, rs);
}

function sort(A, B) {
  let l = 0,
    r = 0;
  let merge = [];
  while (l < A.length && r < B.length) {
    if (A[l] < B[r]) {
      merge.push(A[l]);
      l++;
    } else {
      merge.push(B[r]);
      r++;
    }
  }
  while (l < A.length) {
    merge.push(A[l++]);
  }
  while (r < B.length) {
    merge.push(B[r++]);
  }
  return merge;
}

//Recursion
function PalindromeRecursion(A, i, j) {
  if (i >= j) return 1;

  if (A[i] == A[j]) {
    return PalindromeRecursion(A, i + 1, j - 1);
  } else {
    return 0;
  }
}
let str = 'stgts';
PalindromeRecursion(A, 0, str.length - 1);

//fibanacci Recursion
//F(n-1) + F(n-2);
