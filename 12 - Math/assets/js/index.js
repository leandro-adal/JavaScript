
let num1 = 15.2587454978561648;

// Arredondando para baixo
let num2 = Math.floor(num1);
// Arredondando para cima
let num3 = Math.ceil(num1);
// Arredondando NORMAL
let num4 = Math.round(num1);
console.log(num2, num3, num4);

console.log(Math.max(1,3,25,26,75,12,36,21,23,45,85,32));
console.log(Math.min(1,3,25,26,75,12,36,21,23,45,85,32));

// Número aleatório entre 5 e 10
// OBS: random retornar um número decimal então pode-se usar o round para arredondar o número
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(alatorio);

// PI
console.log(Math.PI);

// Potencia
console.log(Math.pow(5,10)); //5 ** 10

// Raiz quadrada
console.log(9 ** 0.5);// console.log(9 ** (1/2));

// Divisão por zero não gera 0
console.log(100 /0); // -> infinity


