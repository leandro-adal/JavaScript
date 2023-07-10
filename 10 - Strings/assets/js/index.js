// Pegando indices de uma string
/// Indices começam no 0

let umaString = 'texto';
let umaString2 = 'escrito';

console.log(umaString[4]);
// OU
console.log(umaString.charAt(4));

    //Tamanho da String

console.log('Tamanho:',umaString.length);

    // Concatenando
console.log(umaString.concat(' está ', umaString2));
// OU
console.log(`O ${umaString} está ${umaString2}`);

    // Em qual índice uma palavra começa
console.log(umaString.indexOf('xto'));
// Começando no índice 3 procura a palavra xto
console.log(umaString.indexOf('xto', 3)); // -1 -> não foi achado

// Em qual índice uma palavra começa da esquerda para direita
console.log(umaString.lastIndexOf('xto'));

    // Search aceita expressões regulares
console.log(umaString2.search('ri'));

    // Replace(modificar) aceita expressões regulares
console.log(umaString2.replace('ri', 'ro'));
let umaString3 = 'As melhores estreias de filmes e séries da semana no streaming e cinema'
// usando expressão regular
console.log(umaString3.replace(/a/g, '#')); // g -> indica para substituir todos

    // Pega uma parte da String
console.log(umaString3.slice(3, 11)); // O ultimo precisa adiciona 1 ao índice para ele aparecer

console.log(umaString3.slice(-5,-1)); // Os índices negativos começam do final da frase
//OU
console.log(umaString3.substring(umaString3.length - 5, umaString3.length - 1));


    // Separar
console.log(umaString3.split(" ", 3)); // Separa quando tiver um espaço vazio 3 vezes

    // Converter para letras maiúsculas ou minusculas
console.log(umaString3.toUpperCase());
console.log(umaString3.toLowerCase());