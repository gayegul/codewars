// my solution

function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0][0];
    args[0][0] = args[0][1];
    args[0][1] = temp;
}

// somebody had a better solution

function swapValues() {
  return arguments[0].reverse();
}
