function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype.toString = function() {
  return this.name + ' is a ' + this.type;
}
