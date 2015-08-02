/* this kata is mainly aimed at the new JS ES6 Update
introducing class extends */

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return (this.name + ' makes a noise.');
  }
}

class Cat extends Animal {
  speak() {
    return (this.name + ' meows.');
  }
}
