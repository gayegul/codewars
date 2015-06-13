function vectorLength(vector) {
  var x1 = vector[0][0];
  var x2 = vector[1][0];
  var y1 = vector[0][1];
  var y2 = vector[1][1];
  return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
}
