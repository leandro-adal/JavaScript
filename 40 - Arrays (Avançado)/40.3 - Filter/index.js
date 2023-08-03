/**
 * Cria um novo array contendo apenas os elementos do array original que atendem a determinada condição
 */

// Em listas
const numeros = [54,23,89,398,123,32,345,9556,1556,4,8,85];

function callbackFilter(valor, indice, array) {
    console.log(valor, indice, array);
    return valor > 10; // Retorna true ou false
}

const numerosFiltrados = numeros.filter(callbackFilter);

console.log(numerosFiltrados);
// ou

/*
const numerosFiltrados = numeros.filter(function (valor) {
    return valor > 10;
});

console.log(numerosFiltrados);
*/

// OU - Arrow function

/*
const numerosFiltrados = numeros.filter((valor) => valor > 10);

console.log(numerosFiltrados);
*/

// Em Objetos
const pessoas = [
    {nome: 'Luiz', idade: 65},
    {nome: 'Lu', idade: 67},
    {nome: 'Mui', idade: 45},
    {nome: 'Let', idade: 75},
    {nome: 'Ludiscreia', idade: 25},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);
const pessoasMaioresDeCinquenta = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasMaioresDeCinquenta);
// Filtra os que começam com a letra l
const comecaComL = pessoas.filter(obj => obj.nome.toLocaleLowerCase().startsWith('L'));
console.log(comecaComL);