// Base class Animal
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Subclass Mammal
class Mammal extends Animal {
  sound(noise) {
    return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// Create instance of Mammal: farmerCow
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');

// Call the sound() method
console.log(farmerCow.sound('Moooo'));
