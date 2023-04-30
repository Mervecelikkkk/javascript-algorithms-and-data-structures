
function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  function isPrime(num) {
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }
  