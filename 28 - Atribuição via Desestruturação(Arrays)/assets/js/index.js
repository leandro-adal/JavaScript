let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

// lista para variavel
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [primeiroNumero, segundoNumero, ...resto] = numeros; // pega os 2 primeiros indices do array
console.log(primeiroNumero, segundoNumero, resto);

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
[primeiroNumero, segundoNumero, ,quarto, , , , oitavo, ...resto] = numeros; // pega os 2 primeiros indices do array
console.log(primeiroNumero, segundoNumero, nono, resto);
//             0          1          2
//          0, 1, 2    0, 1, 2    0, 1, 2
numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
[primeiro, segundo, terceiro] = numeros; // pega os 2 primeiros indices do array
console.log(terceiro[1]);