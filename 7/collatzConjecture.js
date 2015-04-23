function collatz(n) {
  var result = [];
  while(n !== 1) {
    n = (n % 2 === 0) ? n * 0.5 : n * 3 + 1;
    result.push(n);
  }
  return result.length + 1;
}
