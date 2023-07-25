// Uma closure em JavaScript é uma função que tem acesso às variáveis do escopo externo, mesmo depois que o escopo externo for destruído. Isso é possível porque as closures são objetos que armazenam o escopo externo da função quando ela é criada.

function retornaFuncao(nome) {
  return function() {
    return nome;
  };
}


const funcao = retornaFuncao('Olá');
const funcao2 = retornaFuncao('Joao');

console.dir(funcao);
console.dir(funcao2);

// Outro exemplo
function criarContador() {
  let contador = 0;

  function incrementar() {
    contador++;
    console.log(contador);
  }

  return incrementar;
}

const meuContador = criarContador();
meuContador();
meuContador();
