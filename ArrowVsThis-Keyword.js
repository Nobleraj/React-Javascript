//Normal function - the value of this keyword will be determined by how a function is called not where the function is defined

//Arrow Function - Arrow function dont have own this
//the value of this keyword will be determined where the arrow function is defined

//Eg 1
let person = {
  age: 22,
  greet1: function () {
    console.log('greet1 ', this.age);
    function greet2() {
      console.log('greet 2', this.age);
    }
    greet2();
  },
};
person.greet1();

//to overcome the second function issue we can use arrow function
let person = {
  age: 22,
  greet1: function () {
    console.log('greet1 ', this.age);
    const greet2 = () => {
      console.log('greet 2', this.age);
    };
    greet2();
  },
};
person.greet1();

//Eg 2
class Exam {
  constructor(name) {
    this.name = name;
  }
  normal() {
    setTimeout(function () {
      console.log('normal', this.name);
    }, 1000);
  }
  arrow() {
    setTimeout(() => {
      console.log('arrow', this.name);
    }, 2000);
  }
}
let exam = new Exam('Noble');
exam.normal();
exam.arrow();
