const inputtarefa = document.querySelector('.input-tarefa');
const btntarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

function criarTarefa(textoInput) {
  const li = criaLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criarBotaoApagar(li);
  salvarTarefa();
}

function limpaInput() {
  inputtarefa.value = '';
  inputtarefa.focus();
}

function criarBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

function salvarTarefa() {
  const liTarefas = tarefas.querySelector('li');
  const listaDeTarefas = [];

  for (let tarefa of listaDeTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // trim remove o espaço no final da string
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON =JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON); // precisa ser string para salva nesse storage do navegador então precisa converter pra JSON e quando recuperar transforma em array novamente
}

function adicionarTarefasSalvas() { // Para mostras as tarefas mesmo atualizando a pagina
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);
  for(let tarefa of listaDeTarefas){
    criarTarefa(tarefa);
  }
}
adicionarTarefasSalvas();

inputtarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputtarefa.value) return;
    criarTarefa(inputtarefa.value);
    console.log('Enter pressionado');
  }
});

btntarefa.addEventListener('click', function(e) {
  if (!inputtarefa.value) return;
  criarTarefa(inputtarefa.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefa();
  }
});