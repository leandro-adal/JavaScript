let data = new Date(); // tempo em milissegundos desde 01/01/1978
console.log(data.toString()); // Converte para hora atual

data = new Date(0); // Data 0 -> 01/01/1978
console.log(data.toString());

// Três horas
data = new Date(60 * 60 * 3 * 1000); // 60 * 60 -> 1h em ms; 1h em ms * 3 -> 3h em ms; 3h em ms * 1000ms -> 3h normais
console.log(data.toString());

// Um dia
data = new Date(60 * 60 * 24 * 1000); // 60 * 60 -> 1h em ms; 1h em ms * 24 -> 24h em ms; 24h em ms * 1000ms -> 24h normais
console.log(data.toString());

// Definindo uma data
data = new Date(2023, 6, 18, 17, 27, 54,900); // Ano/Mês(0-11)/Dia/Hora/Minutos/Segundos/Milissegundos
console.log(data.toString());
// Ou
data = new Date('2023-07-18 17:27:54'); // Ano/Mês(1-12)/Dia/Hora/Minutos/Segundos/Milissegundos
console.log(data.toString());

// Pegando os valores
data = new Date('2023-07-18 17:27:54'); // Ano/Mês(1-12)/Dia/Hora/Minutos/Segundos/Milissegundos
console.log(data.getDate());
console.log(data.getMonth());
console.log(data.getFullYear());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getMilliseconds());
console.log(data.getDay()); // 0 - Domingo, 6 - Sábado

function ZeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`; // Se o número for menor que 10 adiciona 0 na esquerda do número
}

function formataData(data) {
    const dia = ZeroAEsquerda(data.getDate());
    const mes = ZeroAEsquerda(data.getMonth());
    const ano = ZeroAEsquerda(data.getFullYear());
    const hora = ZeroAEsquerda(data.getHours());
    const min = ZeroAEsquerda(data.getMinutes());
    const seg = ZeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}


