// Criando a class anterior
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  falar() {
    return `${this.nomeCompleto()} estão apaixonados...`;
  }

  falaOi() {
    return `${this.falar()} Oi AMORES!`;
  }
}

// Instância
const p1 = new Pessoa("Lweji", "Fidel");
const p2 = new Pessoa("Fidel", "Lweji");

console.log(p1.nomeCompleto());
console.log(p2.falaOi());

// NOVA CLASS
class Casal {
  constructor(fidel, lweji) {
    this.fidel = fidel;
    this.lweji = lweji;
  }

  chamarLove() {
    return `${this.fidel} muito vc ${this.lweji}`;
  }
}

const fl = new Casal("Amo", "Amor");
console.log(fl.chamarLove());
