/* this kata is mainly aimed at the new JS ES6 Update introducing classes */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = this.name + 's age is ' + this.age;
  }
}
