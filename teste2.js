// Função mostrar
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    return i; // a prime
  }
}

// Imprimindo e chamando a função!
showPrimes();
console.log(showPrimes());
