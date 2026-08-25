const frutas = [
    "Limão",
    "Maçã",
    "Morango",
    "Banana",
    "Manga"
];

// const pera = "Péra";
// frutas.push(pera);

// POP --- Apaga o último elemento.
// frutas.pop(0);

// SPLICE --- Pega os elementos do array consoante o número digitado e apaga os outros!
// frutas.splice(2, 2, 'Figo');  Elimina 2 itens apartir do índice e adiciona novo item, no lugar do primeiro
frutas.splice(4, 0, "Figo"); // Splice como UNSHIFT, adicona elementos no lugar do índece marcado!

console.log(frutas);
