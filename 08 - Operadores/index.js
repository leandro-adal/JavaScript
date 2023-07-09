/*
Aritméticos:
    ( + ) Adição / Concatenação
    ( - ) Subtração
    ( * ) Multiplicação
    ( / ) Divisão
    ( ** ) Potenciação
    ( % ) Resto da Divisão
*/

/*
Ordem de Precedência:
    ()
    **
    * / %
    + -
    * /

*/

const num1 = '5';
const num2 = 10;
const num3 = 5
console.log(num1 + num2, num2 + num3); // Concatenação / Adição
console.log(num1 - num2, num2 - num3);
console.log(num1 * num2, num2 * num3);
console.log(num1 / num2, num2 / num3);

let cont = 1;
cont++; // Incremento
cont++;
cont++;
cont--;
console.log(cont);

const num4 = parseInt('5'); // Convertendo em inteiro.
const num5 = 10;
console.log(num4 + num5);