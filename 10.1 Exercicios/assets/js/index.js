
const nome = prompt('Digite seu nome completo:');
const nomeSemEspaco = nome.replaceAll(' ', '');

document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nomeSemEspaco.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ${nome.indexOf('Leandro')} <br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf('o')} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-4)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;
