var sample = {
  data: {
    name: 'Test',
    data: {
      name: 'Demo',
      data: {
        name: 'Hello',
        data: {},
      },
    },
  },
};

function customGet(src, path, defVal) {
  let dot = path.indexOf('.');
  if (src === undefined) {
    return defVal || undefined;
  }
  if (dot === -1) {
    if (path.length && path in src) {
      return src[path];
    }
    return defVal;
  }
  return customGet(src[path.substr(0, dot)], path.substr(dot + 1), defVal);
}

console.log('output', customGet(sample, 'data.data.name'));

//async await
function sleep(delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('Done');
    }, delay);
  });
}

async function test() {
  console.log('Hello!');
  await sleep(2000);
  console.log('World');
  await sleep(2000);
  console.log('Asyna');
}

test();

//Generate 2D array

//HTML
<table id="matrix"></table>;
//css
/* tbody{
  display : flex;
  flex-direction : column-reverse;
}
tbody tr{
  display : flex;
  justify-content : space-between;
}
tbody tr:nth-child(even){
  flex-direction : row-reverse;
}
td{
  cursor : pointer;
} */
//Javascript
function matrix(n) {
  let divId = document.getElementById('matrix');
  for (var i = 0; i < n; i++) {
    let row = divId.insertRow(i);
    for (var j = 0; j < n; j++) {
      let res = i * n + j;
      let column = row.insertCell(j);
      column.id = res;
      column.innerHTML = res;
    }
  }
}
document.getElementById('matrix').addEventListener('click', function (e) {
  if (e.target.tagName == 'TD') {
    let id = e.target.id;
    let count = 0;
    for (var i = 0; i <= Number(id); i++) {
      count += Number(document.getElementById(i).innerHTML);
    }
    e.target.innerHTML = count;
  }
});
matrix(4);

//2D array using div
//HTML
<div id="matrix"></div>;
//css
/* 
#matrix{
  display : flex;
  flex-direction : column-reverse;
  width : 200px;
  align-items : flex-start;
}
.tr{
  display : flex;
}
.tr:nth-child(even){
  flex-direction : row-reverse;
}
.cell{
  padding : 10px;
  cursor : pointer;
} */
function matrix(n) {
  let matrix = document.getElementById('matrix');

  for (var i = 0; i < n; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (var j = 0; j < n; j++) {
      let clm = document.createElement('div');
      let res = n * i + j;
      clm.id = res;
      clm.className = 'cell';
      clm.innerHTML = res;
      row.appendChild(clm);
    }
    matrix.appendChild(row);
  }
}

document.getElementById('matrix').addEventListener('click', function (e) {
  if (e.target.className == 'cell') {
    let elem = e.target;
    let value = Number(elem.id);
    let cnt = 0;
    for (var i = 1; i <= value; i++) {
      let b = document.getElementById(i).innerHTML;
      cnt += Number(b);
    }
    elem.innerHTML = cnt;
  }
});

matrix(4);
