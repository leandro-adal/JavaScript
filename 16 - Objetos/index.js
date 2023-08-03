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
const pessoa3 = new criarPessoa('João', 'Luiz', 30);
console.log(pessoa3);
