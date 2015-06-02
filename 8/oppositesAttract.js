function lovefunc(flower1, flower2) {
  if((flower1%2 === 1 && flower2%2 === 0) || (flower1%2 === 0 && flower2%2 === 1)) {
    return true;
  }
  return false;
}


// A beautiful way to solve it inspired by another coder
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
