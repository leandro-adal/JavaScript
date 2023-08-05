/**
 * É um objeto que contém as propriedades e métodos que são compartilhados por todas as instâncias desse objeto.
 * Ou seja, oferece uma referencia única para que por exemplo, funções em objetos não ocupem espaço na memoria a cada novo objeto adicionado.
 */
// Outra forma de copia
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'Na função' + this.nome + ' ' + this.sobrenome;
}

// Cria um protótipo para que cada objeto de pessoa possua uma referencia a ele. Dessa forma, não haverá gasto para qur toda Objeto de Pessoa possua uma mesma função.
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'O');
const pessoa2 = new Pessoa('Maria', 'A');
const data = new Date();

// Ordem de procura pessoa1 --> Pessoa.prototype --> Object.prototype
console.log(pessoa1);
console.log(pessoa2);
