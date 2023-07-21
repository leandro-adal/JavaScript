// Função que recebe um numero e retorna se:
// O numero é divisível por 3 = Fizz
// Divisível por 5 = Buzz
// Divisível por 3 e 5 FizzBuzz
// Não é divisível por 3 e 5 = Retorna o próprio número
// Checar se é um número = Retorna o número
// Usar loop para gerar números de 0 a 100

function eDivisivel(num) {
  if ((typeof num !== "number")) return num;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return 'a', num;
}

console.log('a1', eDivisivel('a'));
for (let i = 0; i <= 100; i++) {
  console.log(i, eDivisivel(i));
}
