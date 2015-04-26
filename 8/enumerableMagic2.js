function any(arr, fun) {
  for (var i = 0; i < arr.length; i++) {
    if(fun(arr[i])) {
      return true;
    }
  }
  return false;
}
