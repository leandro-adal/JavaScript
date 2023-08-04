// Constrututora -> new Objeto
function Pessoa(nome, sobrenome) {
  // Métodos ou atributos privados
  const ID = 54646;
  const metodoInterno = function () {}
  
  // Métodos ou atributos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.fala = function() {
    console.log(`${this.nome}: sou um método`);
  }
}  

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Joaquina');
p1.fala()
p2.fala();
