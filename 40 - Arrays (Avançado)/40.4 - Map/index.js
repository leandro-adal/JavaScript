/**
 * Cria um novo array a partir da transformação dos elementos de um array existente
 */

const numeros = [54,23,89,398,123,32,345,9556,1556,4,8,85];

// Parâmetros
const map = numeros.filter(function (valor, indice, array) {
    console.log(valor, indice, array);
});

console.log(map);

// Em dobro - Arrow function
const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);

// Em Objetos
const pessoas = [
    {nome: 'Luiz', idade: 65},
    {nome: 'Lu', idade: 67},
    {nome: 'Mui', idade: 45},
    {nome: 'Let', idade: 75},
    {nome: 'Ludiscreia', idade: 25},
];

// Aplica uma função a cada elemento de um array e retorna um novo array com os resultados. A função map() é frequentemente usada para converter um array de um tipo para outro.
const nome = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(nome);
console.log(idades);

const comIds = pessoas.map((obj, indice) => {
    obj.id = indice + 1;
    return obj;
});
console.log(comIds);
// PARA NÃO MODIFICAR O OBJETO ORIGINAL
/* 
const comIds = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    return obj;
});
console.log(comIds);
*/

// converter um array de números para um array de strings
const array = [1, 2, 3, 4, 5];

const stringArray = array.map(n => n.toString());

console.log(stringArray); // [ "1", "2", "3", "4", "5" ]
