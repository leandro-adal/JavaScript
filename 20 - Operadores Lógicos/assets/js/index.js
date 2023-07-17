/*
Operadores Lógicos
&& - AND -> Todas as expressões devem ser verdadeiras
|| - OR -> Ao menos uma deve ser verdadeira
! - NOT

FALSY -> Os termos abaixo não retornam true
false
0
'' "" `` (Strings vazias)
null / undefined
NaN
*/
const expressaoAnd = true && true && true
console.log(expressaoAnd);

const expressaoOr = true || false || true
console.log(expressaoOr);

const usuario = 'usuario';
const senha = 'senha';

const entrar = usuario === 'usuario' && senha === 'senha';
console.log(entrar);

// Negação inverte true e false
console.log(!true);

// Expressões falsy
function falaOi(){
    return 'Oi';
}
const executar = 'iae';
console.log(executar && falaOi()); // Retorna o ultimo verdadeiro quando todos são verdadeiros


console.log(false && 0 && '' && null &&'a' && true);
console.log(false || 0 || '' || null ||'a' || true); // Retorna o primeiro verdadeiro

// Quando todos são falsy
console.log(false || 0 || '' || null ||NaN); // Retorna o último falso