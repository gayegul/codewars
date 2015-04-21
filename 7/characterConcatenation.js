function charConcat(string){
  var result = "";
  for (var i = 0; i < Math.floor(string.length / 2); i++) {
    result += string[i] + string[string.length - 1 - i] + (i + 1);
  }
  return result;
}
