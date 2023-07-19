// Listas
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) {
  console.log(frutas[i]);
}

// Objetos
const elementos = {
  texto: 'Frase1',
  texto2: 'Frase2',
  texto3: 'Frase3',
  texto4: 'Frase4'
};

for (let i in elementos) {
  console.log(i, elementos[i]);
}
