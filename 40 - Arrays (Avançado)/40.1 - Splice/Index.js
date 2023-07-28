// Remove a partir de um índice uma quantidade elementos
//.splice(índice, quantidadeDeletada, add1, add2, add3, add4);
// Apos remover se hover elementos a serem adicionadas eles o serão no índice especificado
// Retorna uma lista com os removidos
const nomes = ['Jão', 'Fabrício', 'Joana', 'Felipe', 'Rodrigo', 'Vanessa'];

const removidos = nomes.splice(4,1, 'a');

console.log(nomes, removidos);
