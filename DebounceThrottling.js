//Debounce - debouncing - what if user click on the button accidentily twice in a quick succession, 
//is that mean the order will go twice it depends on how we design the system  but we can protect against that kind of behaviour using a debounce function.
//Debounce is basically - if we keep clicking on the same button many times it would execute 
//the event on last click 
 
const debounce = (fn,delay) => {
   let timer;
   return function(...args){
      if(timer){
         clearTimeout(timer);
      }
      timer = setTimeout(()=>{
        fn(...args);
      },delay);
   }
}

document.getElementById("Debounce").addEventListener("click", debounce((e)=>{
   console.log("Fired Debounce");
},3000));

//Throttling - on first click it fires the event then it deyals for certain second and 
//again it fires.

const throttling = (fn,delay) => {
   let last = 0;
   return function(...args){
     let now = new Date().getTime();
     if(now - last < delay){
        return;
     }
     last = now;
     return fn(...args);
   }
}

document.getElementById("Throttling").addEventListener("click", throttling((e)=>{
   console.log("Fired Throttling");
},3000));
