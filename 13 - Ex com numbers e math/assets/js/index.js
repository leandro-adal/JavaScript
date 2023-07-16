const num = Number(prompt('Digite um número:'));
const numTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numTitulo.innerHTML = num;
texto.innerHTML = `<p>${num} - 2 é igual a: ${num - 2}<br>
Raiz quadrada: ${num ** 0.5}<br>
${num} é inteiro: ${Number.isInteger(num)}<br>
É NaN: ${Number.isNaN(num)}<br>
Arredondando para baixo: ${Math.floor(num)}<br>
Arredondando para cima: ${Math.ceil(num)}<br>
Com duas casas decimais: ${num.toFixed(2)}
</p>`;
// OU
/* 
texto.innerHTML = `<p>${num} - 2 é igual a: ${num - 2} </p>
texto.innerHTML += `<p>Raiz quadrada: ${num ** 0.5} </p>
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)} </p>
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>
...
*/