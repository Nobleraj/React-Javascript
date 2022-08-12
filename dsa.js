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
