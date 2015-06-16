function zipvalidate(postcode) {
  var firstDigit = ["1","2","3","4","6"];
  var digits = ["0","1","2","3","4","5","6","7","8","9"];
  if(postcode.length !== 6) {
    return false;
  }
  else if(firstDigit.indexOf(postcode[0]) === -1) {
    return false;
  }
  else {
    for(var i = 1; i < postcode.length; i++) {
      if(digits.indexOf(postcode[i]) === -1) {
        return false;
      }
    }
  }
  return true;
}
