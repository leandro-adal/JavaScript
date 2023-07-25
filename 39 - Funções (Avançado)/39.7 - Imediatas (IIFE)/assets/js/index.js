// IIFE -> Immediately invoke function expression

// Essa função ja será executada não precisando ser chamada
(function(idade, peso, altura) {
  const palavra2 = 'Mundo!';
  function criarPalavra(palavra) {
    return palavra + ' ' + palavra2
  }

  function falaPalavra(palavra) {
    console.log(criarPalavra('Olá'));
  }

  falaPalavra();
  console.log(idade, peso, altura);
})(30, 80, 1.80);
