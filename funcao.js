class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    nomeCompleto() {
       return `${this.nome} ${this.sobrenome}`;
    }

    correr () {
       return `O ${this.nomeCompleto()}, está correndo!`;
    }
    
}

const p1 = new Pessoa("Fidel", "Lweji");
// p1.nomeCompleto();
console.log(p1.correr());
