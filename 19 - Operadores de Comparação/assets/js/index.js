/*
Operadores
> maior que
>= maior ou igual a
< menor que
<= menor ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!=== diferente estrito (valor e tipo)
*/
let comp = 5 > 5;
console.log(comp);

comp = 5 >= 5;
console.log(comp);

comp = 5 > 6;
console.log(comp);

// Igualdade
comp = 5 == 5;
console.log(comp);

comp = '5' == 5; // Como não verifica o tipo retorna true
console.log(comp);

comp = '5' === 5;
console.log(comp);

// Diferença
comp = '5' != 5; // Como não verifica o tipo retorna false
console.log(comp);

comp = '5' !== 5;
console.log(comp);