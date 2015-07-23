function rotate(array,n) {
  var array2 = [];
  var length = array.length
  for(var i = 0; i < length; i++) {
    if(n >= 0 || n > length) {
      array2[(i + n) % length] = array[i];
    }
    else {
      array2[(length + i + n) % length] = array[i];
    }
  }
  return array2;
}
