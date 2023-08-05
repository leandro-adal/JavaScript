/**
 * Object.values
 * Object.entries
 * Object.assign
 * Object.getOwnPropertyDescriptor
 * ... (spread)
 * Object.keys
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades) 
 * Object.defineProperty (define uma propriedade)
 */
// Outra forma de copia
const produto = { nome: 'Produto', preco: 1.8 };
const caneca = Object.assign({}, produto, { nome: 'porcelana' });

caneca.nome = 'Outro';
Object.freeze(caneca);
caneca.preco = 5.4; // Não vai mudar por causa do freeze
console.log(produto);
console.log(caneca);
// Alterando as configurações
Object.defineProperty(produto, 'nome', {
    writable: false
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Mostras as configurações

console.log('keys');
console.log(Object.keys(produto));

console.log('entries ');
console.log(Object.entries(produto));
