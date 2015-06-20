function numberProperty(n) {
  var result = [];

  function isPrime(n) {
    if(n <= 1) {
      return false;
    }
    for(var i = 3; i < n; i++) {
      if(n % i === 0) {
        return false;
      }
    }
    return true;
  }

  function isEven(n) {
    return n % 2 === 0;
  }

  function multipleOfTen(n) {
    return n % 10 === 0;
  }

  result.push(isPrime(n));
  result.push(isEven(n));
  result.push(multipleOfTen(n));
  return result;
}
