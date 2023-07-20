// Função que recebe largura e altura e return true se a imagem estiver no modo paisagem
function ePaisagem(largura, altura) {
  return largura >= altura; // Não precisa do return pois a expressão ja retorna verdadeiro ou falso
}

// Declarando as variáveis e chamando a função
const num1 = 1080;
const num2 = 1920;
console.log(ePaisagem(num1, num2));

// Simplificando
const ePaisagem2 = (largura, altura) => largura >= altura; 

console.log(ePaisagem2(num1, num2));
