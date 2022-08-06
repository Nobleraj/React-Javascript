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
