//context api performance
//react element
//Tree shaking
//Solid principles
//Dry principles
//useImperative Handler
//Synthetic event
//useLayoutEffect

//output based questions
(function () {
  var x = 10;
  (function () {
    x++;
    console.log('res', x);
    var x = 20;
  })();
})();

//how to change inner obj
let ob1 = {
  name: 'Demo',
  add: {
    skills: 'React',
  },
};
let ob2 = ob1;
ob2.add.skills = 'Angular';


//dynamic