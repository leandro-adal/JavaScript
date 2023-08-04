const nome = 'Leandro';

let i = 0;
while (i < nome.length) {
  console.log(nome[i]);
  i++;
}

function random(min, max) {
  const r = Math.random() * (max - min) + min;// 1 a 50
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min ,max);

while (rand !== 10) {
  rand = random(min ,max); // quando achar 10 sai do laço
  console.log(rand);
}

rand = 10; // Aqui executa a primeira iteração mesmo o valor da variável inicial seja 10 ao contrario
do {
  rand = random(min ,max); 
  console.log(rand);
} while (rand !== 10); // quando achar 10 sai do laço
