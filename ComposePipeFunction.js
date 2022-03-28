//Compose evaluates from right to left (reduceRight)
//Pipe evaluates from left to right (reduce)
function a(a){
    return a + 5;
}
function b(b){
    return b - 3;
}
function c(c){
    return c * 5;
}

function compose(...functions){
  return (args) => {
    return functions.reduceRight((arg,fn) => fn(arg), args );
  }
}
function pipe(...fns){
   return (args) => {
       return fns.reduce((arg,fn)=>fn(arg),args);
   }
}
const evaluate = compose(a,b,c);
const evaluatePipe = pipe(a,b,c);

console.log('compose',evaluate(5));
console.log('pipe',evaluatePipe(5));