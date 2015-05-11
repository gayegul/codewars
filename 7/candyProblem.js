function candies(kids){
  if(kids.length < 2) return -1;

  var maxCandy = Math.max.apply(null, kids);
  var difference = 0;
  for(var i = 0; i < kids.length; i++) {
    difference += (maxCandy - kids[i]);
  }
  return difference;
}
