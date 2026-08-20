class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    nomeCompleto() {
        console.log(this.nome + ' ' + this.sobrenome);
    }
    
}

const p1 = new Pessoa("Fidel", "Lweji");
console.log(p1.nomeCompleto());
