try {
  console.log('Abrir arquivo');
  console.log('Fechei o arquivo');

  try {
    console.log(b);
  } catch(e) {
    console.log('Erro');
  }
} catch(e) {
  console.log('Tratando o erro');
} finally {
  console.log('Sempre executado'); // Vai executar mesmo se pego no segundo try
}

console.log('');

// Outro exemplo
function retonaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new Error('Erro! Esperando instância.');
  }
  
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date();
  const hora = retonaHora(data);

  console.log(hora);
} catch (e) {
  console.log('Alguma coisa');
} finally { // Sempre é executado
  console.log('soma(1, 2)');
}
