// About v8 engine

//third largest

//compile or intpretor language

//everything is object in javascript but why number. giving properties
//let number1 = new Number(6); giving object

//how micro front end works in front end - any algo like federated renderin
//how app will be rendered in another app

//Module Federation (Webpack 5)

//performance optimization in web application

//JRE - Javascript Runtime Environment

//JS Engine
// -> Parsing -> Compilation -> Execution

//Parsing -> parse the code
// Syntax parser -> converts to AST -> Abstarct syntax tree
// send the AST high level code to compilation phase
// compilation and Execution happens hand in hand

// Interpretor & Compiler
// Interpretor -> Fast, executes line by line
// Compiler -> Optimize the code and compile all the code before executing
// Then comiler send buye code to Execution phase
// In the mean time, Compiler would optimize the code in runtime (that's y it's JIT)

// Memory Heap => Garbage Collector GC
// CallStack

// jit  - Just in-time compilation

// common js, amd, es

// custom implememtation for deep copy

// pull vs rebase

//var x = 10;
// var y = x++;
// var z = ++x;
// console.log(x, y, z);

// Create a JSON visualizer with comparison mode.
// - user can copy a json and paste into left side input panel
// - user can copy another json and paste in right side input panel
// - on "compare" differences get highlighted

// 1. scroll

// - user can pop out the right panel into a new tab.
// - in new tab, scroll should syncronize with previous tab

// why graphQL required
// node js CORS error
// require vs import difference why ?

// Bazarvoice
// How and why to choose ChatGPT vs Github Copilot
// Prepare any complex achievements thing you did
// Is micro services have different different DB for all services
// What's going above beyond vs going below
// how rate limiting can handled if there's billions of user accessging the app, how to store these values in cache and achieve Consistency. Redi ? -> Persisitent, Distrubuted

// Best Time to Buy and Sell Stock
// prices = [7,1,5,3,6,4]

// let maxProfit = 0;

// for(var i=0;i<prices.length;i++){
//   for(var j=i+1;j<prices.length;j++){
//      if(prises[i] < prices[j]){
//       maxProfit = Math.max(prices[j] - prises[i],maxProfit);
//      }
//   }
// }

// => n^2

// let min = prices[0];
// let profix = 0;
// for(var i=1;i<prices.length;i++){
//   const curr = prices[i];
//   profit = Math.max(curr-min,profit);
//   min = Math.min(min,curr);
// }

// => n

// design a tiny url service.
