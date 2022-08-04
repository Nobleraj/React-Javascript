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
