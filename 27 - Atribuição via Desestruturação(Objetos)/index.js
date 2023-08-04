let pessoa = {
  //nome: 'nome',
  sobrenome: "sobrenome",
  idade: "idade",
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

// Atribuição via desestruturação
let {
  nome = "Valor padrão",
  sobrenome: mudandoNomeVariavel,
  endereco,
  endereco: { rua, numero },
} = pessoa;
console.log(nome, mudandoNomeVariavel, endereco, numero);
