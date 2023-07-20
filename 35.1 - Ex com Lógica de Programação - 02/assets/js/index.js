// Função que recebe largura e altura e return true se a imagem estiver no modo paisagem
function ePaisagem(largura, altura) {
  if (largura < altura) return false;
  else return true;
}
const num1 = 1080;
const num2 = 1920;
console.log(ePaisagem(num1, num2));

// Caso a situação de serem iguais fosse ignorável
const max = (largura, altura) => largura < altura ? false : true;
console.log(max(num1, num2));
