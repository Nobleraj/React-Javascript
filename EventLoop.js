
//Event loop - output based question and why it's happening
let a = true,c = 1;
setTimeout(() => {
  a = false;
}, 2000);

setInterval(() => {
  if (a) {
    console.log(c++);
  }
}, 200);
//the setInterval runs for every 200ms for 9 times then setTimeout function would make the a= false, now the contition fails inside setInterval.
//now the program ketps running(try with vs code- the cursor won't be free)because setInterval is not cleared

//solution
let c = 1;
let id = setInterval(() => {
  console.log(c++);
}, 200);
setTimeout(() => {
  clearInterval(id);
}, 2000);
//setInterval cleared now the thread is free

//Question 2 - whether the while loop stops after 2 sec ?
//Note : Execution happen's in main thraed - Javascript is single threaded
setTimeout(() => {
  a = false;
}, 2000);
while (a) {
  console.log(c++);
}
//The loop won't stop because - the main thread is not free, its keep on running. the setTimeout function executes after 2 secs, it will execute the a = false in main thread but the main thread is busy running the loop.So it can't inject the value in the main thread.
