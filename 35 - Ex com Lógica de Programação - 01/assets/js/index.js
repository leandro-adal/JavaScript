// Função que recebe dois números e retorna o maior
function maior(x, y) {
  if (x > y) return x;
  else if (x < y) return y;
  else return 'iguais'
}
const num1 = 10;
const num2 = 10;
console.log(maior(num1, num2));

// Caso a situação de serem iguais fosse ignorável
const max = (x, y) => x > y ? x : y;
console.log(max(num1, num2));
