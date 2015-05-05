// my solution

function divide(weight) {
  return weight > 2 && !(weight % 2) ? true : false;
}

// an even better solution

function divide(weight){
  return weight > 2 && !(weight % 2);
}
