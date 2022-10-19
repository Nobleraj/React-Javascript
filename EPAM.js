//context api performance
//react element
//Tree shaking
//Solid principles
//Dry principles
//useImperative Handler
//Synthetic event
//useLayoutEffect
//class vs object

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

//React.memo - behing the scene it update like shouldComponentUpdate

//Is useRef variable render each time if we update the ref value - No
//dynamically load input from API and render in React component and submit the form
