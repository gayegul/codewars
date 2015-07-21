function isTriangleNumber(number) {
  var currentNumber = 1;
  if(number === 1 || number === 0) {
    return true;
  }
  for(var i = 2; i <= number; i++) {
    currentNumber += i;
    if(currentNumber === number) {
       return true;
    }
  }
  return false;
}
