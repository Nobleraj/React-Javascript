//promise all settled
//debounce, throttling


(function() { 
  console.log(a)
  if(true) {
      var a = 'a';
      let b = 'b';
  }
  console.log(a)
  
  console.log(b);
  const bar = () => {
      var b = 'b';
      console.log(b);
  }
  bar();
})();
console.log(b)

5 events at timestamps 0ms, 400ms, 800ms, 1200ms, 2400ms.
1000ms

(function() { 
  console.log(a) //a
  if(true) {
      var a = 'a';
      let b = 'b';
  }
  console.log(a)//a
  
  console.log(b);//reference error before initi
  const bar = () => {
      var b = 'b'; //error 
      console.log(b);
  }
  bar();
})();

//Promise All settled
let prom1 = Promise.resolve("success 1");
function showText(txt){
    return new Promise((res,rej)=>{
        setTimeout(()=>res(txt),2000);
    })
}
let prom2 = Promise.resolve("success 2");
let prom3 = Promise.reject("Rejected");

//simple
function myPromiseAllSettled(promises){
  const mappedPromise = promises.map(pro=>{
    return pro.then(res=>{
      return {
        status : 'fullfilled',
        value : res
      }
    }).catch(err=>{
      return {
        status : 'fullfilled',
        reason : err
      }
    })
  })
  return Promise.all(mappedPromise);
}


function myPromiseAllSettled(promises){
 let result = [],completed = 0;
 return new Promise((res,rej)=>{
    promises.forEach((promise,i)=>{    
         promise.then(r=>{
         result[i]={status:"fulfilled",value : r };
         completed++;
         if(completed == promises.length){
         res(result);
         }
         }).catch(err=>{
         completed++;
         result[i]={ status:"rejected",reason : err};
          if(completed == promises.length){
         res(result);
         }
         });
    });
 })
}
myPromiseAllSettled([prom1,showText("Hello"),prom2,prom3]).then(res=>{
  console.log("res", res);
})