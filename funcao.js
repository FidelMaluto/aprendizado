class Cao {
    constructor (nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
    
    latir () {
        return `${this.nome} está latindo...`;
    }

    correr () {
        return `${this.nome} está correndo!`;
    }

}

const p1 = new Cao('Máx', 'Rafeiro');
console.log(p1.latir());
