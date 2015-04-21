function isIsogram(str) {
  str = str.toLowerCase();
  var container = {};
  for (var i = 0; i < str.length; i++) {
    if(container[str[i]]) {
      return false;
    } else {
      container[str[i]] = 1;
    }
  }
  return true;
}
