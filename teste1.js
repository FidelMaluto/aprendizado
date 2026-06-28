//! Simulador de saque

// dado um valor a ser sacado
// exiba quantas notas de 100, 50, 20, 10, 5, 2
// devem ser entregues

const notas = [5000, 2000, 1000, 500];

let valor = 7200000;

for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];

    // calculando a quantidade de nota por valor
    let quantidade = Math.floor(valor / nota);

    if (quantidade ==! valor) {
        console.log("Lamentamos, não temos essas notas!");
        return;
        
    } else {
        console.log(quantidade + " notas de " + nota);
    }
    // console.log(quantidade + " notas de " + nota);
    valor = valor % nota;
}
