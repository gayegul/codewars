/*  a function that takes a String and returns an
Array/list with the length of each word added to each element */

function addLength(str) {
  var result = [];
  str = str.split(" ");
  for(var i = 0; i < str.length; i++) {
    result.push(str[i] + ' ' + str[i].length);
  }
  return result;
}

// ECMAScript 6 version

function addLength(str) {
  return str.split(' ').map(v => v + ' ' + v.length);
}
