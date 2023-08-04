// Permite o acesso do espoco em que a função foi declarada

const nome = 'Olá';

function falaNome() {
  console.log(nome); // como não tem nome no escopo local irá procurar no escopo pai onde a função esta declarada
}

function falaNome2() {
  const nome = 'Mundo!'; // Não aparecer pois o que está dentro desta função esta em outro escopo
  falaNome();
}

falaNome();
falaNome2();
