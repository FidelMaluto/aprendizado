// quantas palavras têm mais de cinco letras?

const frase = "eu amo programar em javascript";

const palavras = frase.split(" ");

let contador = 0;

for(const palavra of palavras){
    if(palavra.length > 5){
        contador++;
    }
}

console.log("As palavras que têm mais de 5 letras são: " + contador);
