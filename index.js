// Import stylesheets
import './style.css';
import ClassExam from './classExample';

//Destructure
let user = {
  name : "Noble",
  address : {
      street : 20,
      age : 40
  }
}
const { name , address : { street, age } } = user;
console.log("Destructure", user);

//output based
const fnc = (function(a){
   delete a;
   return a;
})(5); //output 5
console.log(fnc);

const a = {};
const b = { key : "b" };
const c = { key : "c" };
a[b] = 123; // a[b] equals [object Object]
a[c] = 456
console.log(a[b]);//output 456

let ob1 = { name: 'hello' };
let ob2 = { name: 'hello' };
console.log(ob1 == ob2, ob1 === ob2); //both false

function demo() {
  function a() {
    return 10;
  }
  return a();
  function a() {
    return 222;
  }
} // 222

(function (a) {
  return (function () {
    console.log(a);
    a = 6;
  })();
})(21); //21

let ar = [-1, 0, 2, 1, 6, -1, 4, 8, 0, -1, -100, 0, -0, 0];
ar.filter((a) => a); //[-1, 2, 1, 6, -1, 4, 8, -1, -100]

function React(b, l) {
  this.l = l;
  this.b = b;

  this.react = function () {
    return this.l * this.b;
  };
}
React.prototype.react1 = function () {
  return this.l * this.b;
};
React.prototype.react2 = () => {
  return this.l * this.b;
};
let r = new React(5, 2);
r.react(); //10
r.react1(); //10
r.react2(); //NAN

//print 1 to 10 on every 1 seconds
for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

let a = 1;
console.log('output', +f + a + 1); //output 10

var f = '8';
let a = 1;
console.log('output', f + a + 1); //output 811

if (0.1 + 0.2 === 0.3) {
  alert('Yes');
} else {
  alert('No');
} //output No - 0.1 + 0.2 will be 0.30000
//ends

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//class inheritance
let par = new ClassExam('Imm', ' pri', 'demo');
console.log(par.run());

//var , let , const
(function () {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 3000);
  const x = 2;
  const y = 10;
})();

//Closure
function temp(a) {
  return (b) => {
    return 'Good ' + a + ' ' + b;
  };
}
let noble = temp('Morning');
let raj = temp('Morning');

let n_ = noble('Noble');
let r_ = raj('Raj');
console.log(n_, ' - ', r_);

//primises
let promise = new Promise((res, rej) => {
  res('Resolved');
});
promise.then((val) => {
  console.log('promies ' + val);
});

//aysnc function
async function dynamic() {
  return 'function';
}
dynamic().then((val) => {
  console.log('Async ' + val);
});

//aysnc await function
async function dynamic_async() {
  let res = await new Promise((res, rej) => {
    {
      rej('Promises failed from await');
      res('Promises resolved from await');
    }
  });
  return res;
}
dynamic_async()
  .then((val) => {
    console.log('Async Await ' + val);
  })
  .catch((err) => {
    console.log('Async Await ' + err);
  });

//prototype
var Proto_simple = function (y) {
  this.x = 0;
  this.y = y;

  this.obj = function () {
    return this.y;
  };
};
var x1 = new Proto_simple(5);
var x2 = new Proto_simple(10);
console.log('Proto simple ', x1.obj(), x2.obj());

//prototype dynamic
var Proto_dyn = function (y) {
  this.x = 0;
  this.y = y;
};
Proto_dyn.prototype.obj = function () {
  return this.y;
};
var x3 = new Proto_dyn(55);
var x4 = new Proto_dyn(105);
console.log('Proto dyn ', x3.obj(), x4.obj());

//let , var scope
let testing = 40;
var testing2 = 60;
if (true) {
  let testing = 20;
  var testing2 = 70;
  console.log('let scope in', testing);
  console.log('var scope in', testing2);
}
console.log('let scope ', testing);
console.log('var scope ', testing2);

//args check
function demo(x) {
  console.log(typeof x, arguments.length);
}
demo('a', 'b', 'c');

//timeout
(function () {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 1000);
  setTimeout(() => {
    console.log('3');
  }, 0);
  console.log('4');
})();

//object flow
let cal = {
  total : 0,
  sum : function(a,b){
      this.total+=a+b;
      return this;
  },
  mul : function(a){
      this.total*=a;
      return this;
  }
}
cal.sum(4,5).mul(4).total;