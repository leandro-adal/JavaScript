/** 
 * Serve para reduzir os elementos de um array a um único valor
*/
const numeros = [54,23,89,398,123,32,345,9556,1556,4,8,85];

// Parâmetros
const reduce = numeros.reduce(function (acumulador, valor, indice, array) {
    console.log(acumulador, valor, indice);
    return acumulador;
}, 0);

console.log(reduce);

// Soma - Arrow function
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0);

console.log(total);

// Em Objetos
const pessoas = [
    {nome: 'Luiz', idade: 65},
    {nome: 'Lu', idade: 67},
    {nome: 'Mui', idade: 45},
    {nome: 'Let', idade: 75},
    {nome: 'Ludiscreia', idade: 25},
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
