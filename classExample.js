class Parent {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  demo() {
    return this.name + this.lastname;
  }
}

export default class Child extends Parent {
  constructor(name, lastname, company) {
    //important
    super(name, lastname);
    this.company = company;
  }

  run() {
    console.log(this);
    return this.name + this.lastname + ' ' + this.company;
  }

  recursive(arr) {
    if (arr) {
      return;
    }
    recursive(arr);
  }
}
let par = new Child('Imm', ' pri', 'demo');
