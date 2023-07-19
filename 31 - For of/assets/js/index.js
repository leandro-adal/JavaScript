// Listas
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i of frutas) {
  console.log(i);
}

frutas.forEach(function(valor, indice, array) {
  console.log(valor, indice, array);
})
// Objetos
/* Da erro pois objetos não são iteráveis com o of

const elementos = {
  texto: 'Frase1',
  texto2: 'Frase2',
  texto3: 'Frase3',
  texto4: 'Frase4'
};

for (let i of elementos) {
  console.log(i, elementos[i]);
}
*/