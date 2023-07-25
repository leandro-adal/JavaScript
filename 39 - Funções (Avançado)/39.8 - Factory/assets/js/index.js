// 
function criarPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() { // Recuperar sem precisar chama a função
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) { // Define o valor sem precisar chama a função
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto) {
      return `${this.nome} está ${assunto}`;
    },
    altura: a,
    peso: p,
    imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  }
}

const p1 = criarPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.imc());
p1.nomeCompleto = 'Leandro Adalberto';
console.log(p1.fala('falando sobre JS'))
const p2 = criarPessoa('Maria', 'Joaquina', 1.6, 42);
console.log(p2.imc());
console.log(p2.fala('falando sobre JS'));