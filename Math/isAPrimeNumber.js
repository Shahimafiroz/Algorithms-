////////////////// just yes or no . if the number is prime or not   ///////////////////////////

function isPrime(n) {
  if (n <= 1) {
    console.log("Given number is not prime");
    return;
  }

  for (let z = 2; z < n; z++) {
    let x = 0;
    if (n % z === 0) {
      console.log("Given number is not prime");
      return;
    }
  }

  console.log("Given number is prime");
}

isPrime(13);
isPrime(81);
isPrime(78);
isPrime(53);

//////////////////   counting the number of prime numbers     ///////////////////////////

// You have to use sieve of Eratosthenes which is a relatively harder concept so wait for some time and get back
// Check this out https://www.mathmammoth.com/practice/sieve-of-eratosthenes //

///////////////      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.        ///////////////

// countPrime(13);
// countPrime(81);
// countPrime(78);
// countPrime(53);
