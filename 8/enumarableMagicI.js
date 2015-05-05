function all(arr, fun) {
  for(var i = 0; i < arr.length; i++) {
    if(!fun(arr[i])) {
      return false;
    }
  }
  return true;
}
