// Declaração	de Função
salvarTarefa(); // Pode chamar antes da função
function salvarTarefa() {
  console.log('salvarTarefa');
}

// First-Class objects
// Function expression
const inputtarefa = function() {
  console.log('.input-tarefa');
};
inputtarefa();

function executaFuncao(funcao) {
  console.log('salva');
  funcao(); // Executa a função
}
executaFuncao(inputtarefa);

// Arrow function
const btntarefa = () => {
  console.log('.btn-tarefa');
}
btntarefa();

const tarefas = {
  falar() {
    console.log('.btn-falar');
  }
};
tarefas.falar();
