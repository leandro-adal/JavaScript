/** 
 * É utilizado para iterar (percorrer) os elementos de um array. Ao contrário de outros métodos como map() e filter(), o forEach() não cria um novo array;
 * 
 * A função não retorna nada.
*/
const numeros = [54,23,89,398,123,32,345,9556,1556,4,8,85];

// Parâmetros
numeros.forEach(function ( valor, indice, array) {
    console.log(valor, indice, array);
});

// Arrow function
numeros.forEach(valor => console.log(valor));
