// Base class
class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Subclass that correctly extends Dog
class Labrador extends Dog {
  constructor(name, size) {
    super(name);         
    this.size = size;    
  }
}

// Create an instance of Labrador
const myDog = new Labrador('Max', 'Large');

// Log the properties
console.log(myDog.name); 
console.log(myDog.size); 
console.log(myDog instanceof Labrador); 
console.log(myDog instanceof Dog);      
