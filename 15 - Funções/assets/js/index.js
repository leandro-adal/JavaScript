function teste(nome) {
    console.log('Olá', nome);
}

teste('Leandro');
teste('Luan');

function soma(x, y) {
    const soma = Number(x) + Number(y);
    return soma;
} 

console.log(soma('3', 7));

const sub = function(x, y) {
    return Number(x) - Number(y);
}
console.log(sub('3', 7));

const mult = (x, y) => Number(x) * Number(y);
console.log(mult('5', 5));
