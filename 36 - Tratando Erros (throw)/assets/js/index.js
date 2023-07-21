// Função que recebe um numero e retorna se:
// O numero é divisível por 3 = Fizz
// Divisível por 5 = Buzz
// Divisível por 3 e 5 FizzBuzz
// Não é divisível por 3 e 5 = Retorna o próprio número
// Checar se é um número = Retorna o número
// Usar loop para gerar números de 0 a 100

function soma(x, y) {
  if ((typeof x !== "number") || (typeof y !== "number")) {
    throw new Error('x e y precisam ser números.');
  }
  
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma('1', 2));
} catch (e) {
  console.log(e);
  console.log('Alguma coisa');
}
