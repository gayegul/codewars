function countBy(x, n) {
  var z = [];
  var increment = x;
  for(var i = 0; i < n; i++) {
    z.push(x);
    x += increment;
  }
  return z;
}
