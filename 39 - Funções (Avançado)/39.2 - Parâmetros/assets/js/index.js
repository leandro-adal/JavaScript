// arguments recebe todos os argumentos passados para função
function soma() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}

soma(1,2,5,8,6,3);

// Valor padrão
const sub = function(a, b = 2) {
  console.log(a - b);
};

sub(10);

// Por desestruturação
function nomes( {nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}
nomes({nome: 'primeiro', sobrenome: 'Segundo', idade: 30});

// Por listas
function nomes2( [nome, sobrenome, idade]) {
  console.log(nome, sobrenome, idade);
}
nomes2(['primeiro', 'Segundo', 30]);

// Usando o operador ...(rest)
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
}
conta('+', 0, 25, 368, 452, 156);

// não pode usar o arguments em Arrow function pois elas n tem argumentos
const btntarefa = () => {
  console.log(arguments);
}
btntarefa();

