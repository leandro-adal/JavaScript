/*
Reproduzir:
Leandro Adalberto tem 26 anos, pesa 84 tem 1.8 e seu IMC é de 25.925925925925924
Leandro Adalberto nasceu em 1997
*/

const nome = 'Leandro';
const sobrenome = 'Adalberto';
const idade = 26;
const peso = 84;
const altura = 1.80;
let imc;
let anoNascimento;

//Resposta

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos,', 'pesa', peso, 'tem', altura, 'e seu IMC é de', imc);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);