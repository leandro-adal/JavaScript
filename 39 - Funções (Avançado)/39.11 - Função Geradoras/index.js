// Funções geradoras
function* geradora1() {
  yield 'Valor 1';
  yield 'Valor 2';
  yield 'Valor 3';
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

// Exemplo 2
function* geradora2() {
  yield 'Valor 4';
  yield 'Valor 5';
  yield 'Valor 6';
}

const g2 = geradora2();

for (let valor of g2) {
  console.log(valor);
}

// Exemplo 3
function* geradora3() {
  let i = 0;

  while(true) {
    yield i;
    i++;
  }
}
const g3 = geradora3();

console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

// Exemplo 4 - Chamando uma dentro da outra
function* geradora4() {
  yield 'Valor 1';
  yield 'Valor 2';
  yield 'Valor 3';
}

function* geradora5() {
  yield* geradora4();
  yield 'Valor 4';
  yield 'Valor 5';
  yield 'Valor 6';
}

const g5 = geradora5();
for (let valor of g5) {
  console.log(valor);
}
