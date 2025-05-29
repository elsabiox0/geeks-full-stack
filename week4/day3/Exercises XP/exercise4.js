class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('iman');

console.log(typeof member);          
console.log(member instanceof Person); 
