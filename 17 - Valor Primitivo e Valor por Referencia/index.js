/*
Primitivos (imutáveis) - String, Number, Boolean,, undefined, null (bigint, symbol)

Referência (mutável) - Array, Object, Function
*/

let nome = 'Leandro';
nome[0] = 'A';
console.log(nome[0], nome); // Não modifica pois a string é imutável

// Aqui a variável é mutável
nome = 'Aeandro';
console.log(nome[0], nome);

// Copiando valores primitivos
let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'C';
console.log(a, b); // b não muda se a variável a mudar.

// Passando valores por referencia
let c = [1,2,3];
let d = c;
console.log(c, d);

c.push(4);
console.log(c, d); // Os dois apontam para o mesmo lugar na memoria então aparece o 4 nos dois.
d.pop(); // o elemento "some" tanto em c como d
console.log(c, d);

// Copiando valores de parâmetros mutáveis
let a1 = [1,2,3];
let b1 = [...a1];
console.log('Copia:', a1, b1);

a1.push(4);
console.log('Copia:', a1, b1);
b1.pop(); // o elemento "some" tanto em c como d
console.log('Copia:', a1, b1);
