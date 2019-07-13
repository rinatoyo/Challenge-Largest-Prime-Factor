exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  // do your work here
  let divisor = 2;
  while (n > 1) {
    if (n % divisor === 0) {
      n /= divisor;
    } else {
      divisor++;
    }
    primeNumber = divisor;
  }

  return primeNumber;
};
