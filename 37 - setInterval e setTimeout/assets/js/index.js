function retonaHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

const timer = setInterval(function() {
  console.log(retonaHora());
}, 1000); // 10s de intervalo entre as mensagens

setTimeout(function() {
  clearInterval(timer);
}, 3000); // Determina o limite da operação anterior 

setTimeout(function() {
  console.log('Olá mundo!');
}, 5000);
