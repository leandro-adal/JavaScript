for (let i = 0; i <=5; i++) {
  console.log(`Linha ${i}`);
}

// pulando de 10 em 10
for (let i = 0; i <=100; i+=10) {
  console.log(`Linha1 ${i}`);
}

// Começando de números negativos
for (let i = -100; i <=200; i+=10) {
  console.log(`Linha2 ${i}`);
}

// Decrementando
for (let i = 500; i >=200; i-=100) {
  console.log(`Linha3 ${i}`);
}

// Números par
for (let i = 0; i <=10; i++) {
  const par = i % 2 === 0 ? 'par' : 'impar';
  console.log(i, par);
}

const frutas = ['Maçã', 'Pera', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
  console.log(i, frutas[i]);
}
