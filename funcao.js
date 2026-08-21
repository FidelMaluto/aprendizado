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

    descricao () {
        return `${this.nome} é um cão da raça: ${this.raca}`;
    }

}

const c1 = new Cao('Máx', 'Rafeiro');
console.log(c1.descricao());

// Criando a class anterior
class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto () {
        return `${this.nome} ${this.sobrenome}`;
    }
}

// Instância
const p1 = new Pessoa('Lweji', 'Fidel');
const p2 = new Pessoa('Fidel', 'Lweji');

console.log(p1.nomeCompleto());
console.log(p2.nomeCompleto());
