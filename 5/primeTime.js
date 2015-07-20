function prime(num) {
  var primes = [];
  for(var i = 2; i <= num; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(num) {
  for(var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}
