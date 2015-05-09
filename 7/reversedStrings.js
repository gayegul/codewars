// my solution

function solution(str) {
  str = str.split('');
  for(var i = 0; i < str.length/2; i ++) {
    var temp = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = temp;
  }
  return str.join('');
}

// another coder's (more clever) solution

function solution(str) {
  return str.split('').reverse().join('');
}
