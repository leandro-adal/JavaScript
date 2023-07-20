const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 1) {
    continue; // Pula para proxima iteração do laço
  }

  console.log(numero);

  if (numero === 8) {
    break; // Termina o laço
  }

  
}

let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];

  if (numero === 1) {
    i++; // Precisa incrementar a variável antes de pular para o proximo loop se não irá entrar em um loop infinito
    continue; // Pula para proxima iteração do laço
  }

  console.log(numero);

  if (numero === 8) {
    break; // Termina o laço
  }

  
}