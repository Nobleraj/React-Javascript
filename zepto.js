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


const prom1 = Promise.resolve("Success 1");
function showText(){
return new Promise((res,rej)=>{
  setTimeout(()=>{
    res("Success 2");
  },2000);
})
}
//showText().then(val=>console.log('test',val))
const prom2 = ()=>{
return new Promise((res,rej)=>{
  setTimeout(()=>{
    res("Success 3");
  },1000);
})
};
const prom3 = Promise.reject("Rejected");


function myPromiseAllSettled(promises){
 console.log(promises);
 let result = [];
 return new Promise((res,rej)=>{
    promises.forEach((promise,indx)=>{
       
         promise.then(res=>{
         result.push({ status:"fulfilled",value : res });
         if(indx==promises.length-1){
           res(result);
         }
         }).catch(err=>{
         result.push({ status:"rejected",reason : err});
         if(indx==promises.length-1){
           res(result);
        }
         });
        console.log("Index ", indx, "Promise",promise, "result", result) 
        
    })
    
 })
}
myPromiseAllSettled([prom1,showText(),prom2(),prom3]).then(result=>{
console.log("Result", result);
})