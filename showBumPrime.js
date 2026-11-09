// Função mostrar números primos
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);
  }
}

// Imprimindo e chamando a função!
showPrimes(20); // todos os números primos a partir de 19 à 2
