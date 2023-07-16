const lista = ['a', 'b', 'c', 1, true, null,[1, 2.5]];
console.log(lista);
// OBS: é uma boa pratica tentar manter as listas com apenas um tipo de dado (String, number ou etc.)

const letras = ['a', 'b', 'c', 'd'];

// Pegando pela posição na lista
console.log('pos 0:',letras[0]);
console.log('pos 2:',letras[2]);

// Tamanho da lista
console.log('Tamanho:', letras.length);

// Adicionando a lista
letras.push('e');
letras.push('f');
console.log(letras);

// Adicionando no inicio da lista
letras.unshift('A');
console.log(letras);

// Remove elementos do final
let removido = letras.pop();
console.log(removido, letras);

// Remove elementos do inicio
removido = letras.shift();
console.log(removido, letras);

// Remove o elemento de uum índice sem realocar os elementos posteriores para ele apos a remoção, ou seja, um índice que pode esta no meio da lista pode ficar sem valor definido
delete letras[1];
console.log(letras[1]);

// Acessar índice que não existe retorna undefined ao vez de error com em algumas outras linguagens
console.log(letras[50]);

// Pegando parte do array
console.log(letras.slice(0,4));
console.log(letras.slice(0,-2)); // Tira os últimos 2 elementos

// Verificando o tipo da lista
console.log(typeof letras);
// Verificar se é uma lista
console.log(letras instanceof Array);