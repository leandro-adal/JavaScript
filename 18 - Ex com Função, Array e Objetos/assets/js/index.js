function meuEscoco() { // Para evitar conflito com variáveis de escopo global de bibliotecas
    const form = document.querySelector('.form'); // Seleciona a classe form
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /*
    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado.');
    };

    let contador = 1;
    function recebeEventoForm(evento) {
        evento.preventDefault();
        console.log('Foi enviado.');
        contador++;
    */

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }); // Adiciona a lista de pessoas

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: ${nome.value}</p>`;
        resultado.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`;
        resultado.innerHTML += `<p>Peso: ${peso.value}</p>`;
        resultado.innerHTML += `<p>Altura ${altura.value}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
    
}
meuEscoco();