function solution(pairs) {
  var result = '';
  var seperator = '';
  for(var item in pairs) {
    result += seperator + item + ' = ' + pairs[item];
    seperator = ',';
  }
  return result;
}
