//Promise - We can use it for async operations, it will give you the guarantee results either the response is success or failed.

//to overcome callback hell - Promise comes in
//we can do promise chaning - we can take the result of the one promise and chain using then
function sum(val, cb) {
  return cb(val);
}
function callback(val) {
  return val + 20;
}
console.log('callback hell', sum(5, callback));

const prom = (val) => {
  return new Promise((res, rej) => {
    res(val);
  });
};

console.log(
  'promise',
  prom(4)
    .then((val) => 4 * val)
    .then((val) => console.log(val))
);

//PromiseAll - it takes bunch of promises and resolves all of them
//once all of the promises got resolved it returs an array with all of the resolved results
//if one of the promises got failed then all of the promise would fail

function showText(text, time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('Hi ' + text);
    }, time);
  });
}

const prom1 = Promise.resolve('Hello');

Promise.all([showText('Noble', 1000), prom1, Promise.resolve('Demo')]).then(
  (promise) => {
    console.log('result', promise);
  }
);

//implement Promise.all custom

function myPromiseAll(promises) {
  let result = [];
  return new Promise((res, rej) => {
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          result.push(val);
          if (index == promises.length - 1) {
            res(result);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
}
myPromiseAll([showText('Noble', 1000), prom1, Promise.resolve('Demo')]).then(
  (res) => {
    console.log('myPromise', res);
  }
);

//Promise all settled - it takes bunch of promises and return promises with the resolved results if it either fullfilled or rejected, with arary of objects.
//[ { status: "fullfilled", value : "some value"}, { status: "rejected", reason : "some reason"}]

//Promise.race - it wont wait all the promises to resolve, it resolve when the first promises resoved

//Observables - Observalble can return multiple values and it behave like arrays. we can filter
const obs = new Rx.Observable((ob) => {
  ob.next('Dog');
  ob.next('Bird');
  ob.next('Man');
});
obs.subscribe((res) => {
  console.log('res', res);
});
//filter
obs
  .filter((val) => val == 'Bird')
  .subscribe((res) => {
    console.log('res', res);
  });

//save ref to subscription and we can unsubscribe the obsevables
const subscribe = obs.subscribe((res) => {
  console.log('res', res);
});
subscribe.unsubscribe();

//Promise vs async await
const prom = (a, b, c) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(a + b + c);
    }, 1000);
  });
};

prom(1, 2, 3)
  .then((val) => prom(val, 12, 13))
  .then((res) => {
    console.log('promise', res);
  });

const ayy = async () => {
  const sum = await prom(1, 2, 3);
  const sum2 = await prom(sum, 12, 13);
  return sum2;
};

ayy().then((val) => {
  console.log('res', val);
});
