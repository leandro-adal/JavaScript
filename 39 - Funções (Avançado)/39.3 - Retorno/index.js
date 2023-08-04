// Chamando função dentro de função
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Mundo!'); // Chama a função que ta dentro da função
console.log(resto);


// Outro exemplo
function criarMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador;
  };
}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3); 
const quadriplica = criarMultiplicador(4);

console.log(duplica(100)); // Chama a função que ta dentro da função
console.log(triplica(200));
console.log(quadriplica(500));
