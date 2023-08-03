/** 
 * Retorne a soma do dobro de todos os pares
*/
const numeros = [54,23,89,398,123,32,345,9556,1556,4,8,85];

const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((ac, valor) => ac + valor); 

console.log(numerosPares);
