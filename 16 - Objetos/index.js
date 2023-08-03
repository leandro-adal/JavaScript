/**
 * Função Literal (Objeto Literal)
 */
const pessoa = {
    nome: 'Leandro',
    sobrenome: 'Adalberto',
    idade: 26,

    fala() {
        console.log(`Minha idade atual é: ${this.idade}`);
    }
}
console.log(pessoa.fala());

// Dentro de funções para criar vários objetos
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
// ou
function criarPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criarPessoa('Leandro', 'Adalberto', 26);
console.log(pessoa1.nome);

/**
 * Funções construtoras (new)
 */
// Consome menos memoria pois os métodos ficam gravados no protótipo
// Criando objeto com a palavra new
const pessoa2 = new Object();
pessoa2.nome = 'Fulana';
pessoa2.sobrenome = 'de Tal';
pessoa2.idade = 19;
pessoa2.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa2.getDataNascimento());

// Instanciando um objeto ja definido
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.apresentar = function() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    };
}

const pessoa3 = new Pessoa('Jose', 20);
const pessoa4 = new Pessoa('Carla', 17);
// O THIS É ATRELADO AO OBJETO VAZIO
// OU SEJA, o this.algo se torna o pessoa3.algo pois se refere ao objeto que ele está representando
pessoa4.apresentar();

// Quando utilizamos o operador 'new' para criar um novo objeto a partir da função construtora,
// o 'this' dentro da função se refere ao objeto recém-criado.
// Portanto, ao executar 'pessoa3.apresentar()', o 'this' dentro de 'apresentar' se refere a 'pessoa3',
// enquanto que ao executar 'pessoa4.apresentar()', o 'this' dentro de 'apresentar' se refere a 'pessoa4'.