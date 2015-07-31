/* to return a number from a string */

var FilterString = function(value) {
  var result = "";
  for(var i = 0; i < value.length; i++) {
    if(!isNaN(value[i])) {
      result += value[i];
    }
  }
  return Number(result);
}
