function Person(name) {
  this.name = name
}

Person.prototype.greet = function(yourName) {
  return "Hello " + yourName + ", my name is " + this.name;
}
