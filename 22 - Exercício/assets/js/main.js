const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

function imc(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
}

function classificacao(imc) {
    const nivel = ['Abaixo do peso', 'com Peso normal', 'com Sobrepeso',
    'com Obesidade grau 1', 'com Obesidade grau 2', 'com Obesidade grau 3'];

    if (imc > 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
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

