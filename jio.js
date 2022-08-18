//Intersection of linked list

//Increament counter in javascript class, closure
//using class
class Timer {
  constructor(timer) {
    this.timer = timer;
  }
  increase() {
    this.timer++;
    console.log('increase', this.timer);
  }
  decrease() {
    this.timer--;
    console.log('decrease', this.timer);
  }
  getTime() {
    return this.timer;
  }
}
let timer = new Timer(10);
timer.increase();
timer.increase();
timer.decrease();
timer.increase();
timer.increase();
console.log('result', timer.getTime());

//using functions with closure
//strictly get the function in another variable and call the inner method then only closure value gets updated in scope else it won't get updated
function closure() {
  let timer = 10;
  function increase() {
    timer++;
    console.log('increase', timer);
  }
  function decrease() {
    timer--;
    console.log('decrease', timer);
  }
  return { increase, decrease };
}
let temp = closure();
temp.increase();
temp.increase();
temp.increase();
temp.decrease();
temp.decrease();
temp.increase();

//Navigation restriction for user - useHistory.push
//push same route multiple times

//Hooks standard - what to use when to use

//Log component in parent - 3 child component - print those names

//useSelector detect the chages from redux

//Promise.any
