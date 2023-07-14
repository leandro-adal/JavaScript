
let num1 = 15.2587454978561648;
let num2 = 15;
let num3 = 0.7;
let num4 = 0.1;

console.log(num1.toString() + num2);

// Removendo a imprecisão de números decimais
console.log('Imprecisão:', num3 + num4);

num3 += num4;
num3 = parseFloat(num3.toFixed(2));
// OU:  num3 = Number(num3.toFixed(2));
console.log(num3);

// Binário
console.log(num1.toString(2));

// Aredondado em menos casas decimais
console.log(num1.toFixed(3));

// Verificando se é inteiro
let teste = 'teste';
console.log(Number.isInteger(num1));
console.log(Number.isInteger(teste));

