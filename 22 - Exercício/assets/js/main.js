const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

function imc(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
}

function classificacao(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso'
    } else if (imc <= 18.5 && imc >= 24.9) {
        return 'com Peso normal'
    } else if (imc <= 25 && imc >= 29.9) {
        return 'com Sobrepeso';
    } else if (imc <= 30 && imc >= 34.9) {
        return 'com Obesidade grau 1';
    } else if (imc <= 35 && imc >= 39.9) {
        return 'com Obesidade grau 2';
    } else if (imc >= 40){
        return 'com Obesidade grau 3';
    } 
}

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = form.querySelector('#peso');
    const inputAltura = form.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        resultado.innerHTML = `<p>Erro! Digite valores numéricos para peso (casas decimais devem ser demarcadas com ponto Ex: 35.5) </p>`;
        return;
    }
    if (!altura) {
        resultado.innerHTML = `<p>Erro! Digite valores numéricos para altura (casas decimais devem ser demarcadas com ponto Ex: 35.5) </p>`;
        return;
    }

    const imc1 = imc(peso, altura);
    const diag = classificacao(imc1);

    resultado.innerHTML = `<p>Seu IMC é: ${imc1}</p>`;
    resultado.innerHTML += `<p>Você está: ${diag}</p>`;
});

