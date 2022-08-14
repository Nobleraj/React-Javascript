//Palindrome
function isPalindrom(str) {
  //var rev = str.split("").reverse().join("");
  for (
    var i = 0, j = str.length - 1;
    i <= Math.floor(str.length / 2);
    i++, j--
  ) {
    if (str[i] != str[j]) return false;
  }
  return true;
}
console.log('IsPalindrome ', isPalindrom('121'));

//Move zero to end
function zeroAtEnd(array) {
  var zeroIndx = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      //[array[i],array[zeroIndx]] = [array[zeroIndx],array[i]]
      var temp = array[i];
      array[i] = array[zeroIndx];
      array[zeroIndx] = temp;
      zeroIndx++;
    }
  }
  return array;
}
console.log('ZeroAtEnd ', zeroAtEnd([0, 0, 1, 2, 3, 0, 2]));

//Anagram
function anagram(str1, str2) {
  if (str1.length != str2.length) return false;

  let array = Array(256).fill(0);
  for (var j = 0; j < str1.length; j++) {
    array[str1.charCodeAt(j)]++;
    array[str2.charCodeAt(j)]--;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== 0) return false;
  }

  return true;
}
console.log('Is Anagram', anagram('abcde', 'edbac'));

//this - basically behave in different manner, it depends  upon the environment where it is getting invoked invoked

//Find loop in Linked list
class LinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let head = new LinkedList(10);
let temp1 = new LinkedList(20);
let temp2 = new LinkedList(30);
head.next = temp1;
temp1.next = temp2;
temp2.next = null;
//10 > 20 > 30 > 10 > 20 > 30 > 10
function findLoop(A) {
  let fast = A,
    slow = A;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) return true;
  }
  return false;
}
console.log('Loop in linked list', findLoop(head));

//Lexicographically largest string
function largestString(n) {
  let ans = '';
  while (n > 26) {
    ans += 'z';
    n -= 26;
  }
  ans += String.fromCharCode(n + 'a'.charCodeAt() - 1);
  return ans;
}

console.log('largest string', largestString(17));

//Panagram - Having all the letters in english alphebets
const panagram = (str) => {
  let ans = new Array(26).fill(false);
  for (var i = 0; i < str.length; i++) {
    if (str[i]) {
      var ind = str[i].charCodeAt() - ('a'.charCodeAt() - 1);
      ans[ind - 1] = true;
    }
  }
  for (var i = 0; i < ans.length; i++) {
    if (!ans[i]) return false;
  }
  return true;
};

console.log('Panagram', panagram('bcdefghijklmnopqrstuvwxyz'));

//Find sum of all left BST
//For right BST change left to right
class LinkedList {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let head = new LinkedList(10);
head.left = new LinkedList(20);
head.right = new LinkedList(30);
head.left.left = new LinkedList(40);
head.left.right = new LinkedList(50);

function isLeaf(node) {
  if (node == null) return false;
  return node.left == null && node.right == null;
}

function leftBST(root) {
  let res = 0;
  if (root) {
    if (isLeaf(root.left)) {
      res += root.left.data;
    } else {
      res += leftBST(root.left);
    }
    res += leftBST(root.right);
  }
  return res;
}
console.log('Left BST', leftBST(head));
