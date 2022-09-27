/*
HTML
<div class="rainbow">
      <span>R</span>
      <span>A</span>
      <span>I</span>
      <span>N</span>
      <span>B</span>
      <span>O</span>
      <span>W</span>
    </div>
CSS
<style>
      span:nth-child(1){
        color: red;
      }
      span:nth-child(7){
        color: violet;
      }
    </style>   
*/

//Color each letter in en element
let elem = document.querySelector('.rainbow').children;
let COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
for (var i = 0; i < elem.length; i++) {
  elem[i].style.color = COLORS[i];
}

//Dynamic Colors
function dynamic(str) {
  let COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    count = 0;
  let parent = document.createElement('div');
  for (var i = 0; i < str.length; i++) {
    var temp = str[i].toLowerCase();
    var check =
      temp.charCodeAt() > 'a'.charCodeAt() - 1 &&
      temp.charCodeAt() < 'z'.charCodeAt() + 1;
    if (!check) continue;
    let child = document.createElement('span');
    child.innerHTML = str[i];
    child.style.color = COLORS[count];
    count++;
    parent.appendChild(child);
    if (count === COLORS.length) count = 0;
  }
  return parent;
}
//document.body.replaceChild(dynamic("RAINBOW98989RAINB"),document.querySelector(".rainbow"));

//Dynamic color - create a function that takes str, we have 7 colors - group the str and color those str
//7 colors if we have str length that multiplication of 7 its quite easy, just do strlength/7 and iterate the vale
//if we have str length is 15. so if we take str.len%7 we have a extra string that need to colors with the last iteration - str.len/7 then if you were at the last COLOR index just add the res string with str%7
//CHFDHSDCFB / 7
function dynamicColor(str) {
  let COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    count = 0;
  let res = str.length / COLORS.length,
    exceedStr = false;
  if (!Number.isInteger(res)) {
    exceedStr = true;
  }
  let parent = document.createElement('div');
  for (var i = 0; i < str.length; i += res) {
    let child = document.createElement('span');
    child.style.color = COLORS[count];
    count++;
    if (exceedStr && count == COLORS.length) {
      res += str.length % COLORS.length;
      child.innerHTML = str.substr(i, res);
    } else {
      child.innerHTML = str.substr(i, res);
    }
    parent.appendChild(child);
  }
  return parent;
}
document.body.replaceChild(
  dynamicColor('CHFDHSDCHFDHSDDfglkjfd'),
  document.querySelector('.rainbow')
);
