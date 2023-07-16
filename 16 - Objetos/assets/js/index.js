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