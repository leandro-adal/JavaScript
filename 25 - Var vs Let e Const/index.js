const verdadeiro = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

let nome = 'Leandro'; // criando
var nome2 = 'Leandro'; // criando

if (verdadeiro) {
  let nome = 'Adalberto'; // criando
  var nome2 = 'Luna' // redeclarando

  if (verdadeiro) {
    let nome = 'Coral';
    var nome2 = 'Luan'; // redeclarando
  }
}

console.log(nome, nome2);

function falaOi() {

  if (verdadeiro) {
    let nome = 'Coral';
    var sobrenome = 'Luan';
  }

  console.log(sobrenome);
}

falaOi();
